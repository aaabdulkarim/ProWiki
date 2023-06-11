import sqlite3
conn = sqlite3.connect(r"\ProWiki\Backend\database.db", check_same_thread=False)

# cursor.fetchall() to get a return value
with open(r"\ProWiki\Backend\schema.sql") as f:
    conn.executescript(f.read())

cursor = conn.cursor()

def execute_sql(statement):
    cursor.execute(statement)
    return cursor.fetchall()


