import sqlite3
conn = sqlite3.connect(r"C:\Users\amade\OneDrive\Desktop\Dokumente\Amadeus\ProWiki\Backend\database.db", check_same_thread=False)

with open(r"C:\Users\amade\OneDrive\Desktop\Dokumente\Amadeus\ProWiki\Backend\create_script_prowiki.sql") as f:
    conn.executescript(f.read())

cursor = conn.cursor()

def execute_sql(statement):
    cursor.execute(statement)
    return cursor.fetchall()

