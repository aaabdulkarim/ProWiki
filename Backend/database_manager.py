import sqlite3
import codecs
import os


conn = sqlite3.connect(r"C:\Users\amade\OneDrive\Desktop\Dokumente\Amadeus\ProWiki\Backend\database.db", check_same_thread=False)

with open(r"C:\Users\amade\OneDrive\Desktop\Dokumente\Amadeus\ProWiki\Backend\create_script_prowiki.sql") as f:
    conn.executescript(f.read())

cursor = conn.cursor()

def execute_sql(statement):
    cursor.execute(statement)
    return cursor.fetchall()


folder_path = r"C:\Users\amade\OneDrive\Desktop\Dokumente\Amadeus\ProWiki\Backend\Articles"

for filename in os.listdir(folder_path):
    file_path = os.path.join(folder_path, filename)

    
    if os.path.isfile(file_path):
        with codecs.open(file_path, "r", encoding="utf-8") as f:
            file_content = f.read()
            # Process the file content here as needed
            execute_sql(f"""INSERT INTO articles(title, author_id, file_path)
                         VALUES('{filename}', 1, '{file_path}')""")
        