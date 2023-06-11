from flask import Flask
from database_manager import execute_sql

app = Flask(__name__)

@app.post('/login/<str:name>:<str:pw>:<str:email>')
def login():
    return execute_sql(f"SELECT name FROM users WHERE ({name} = name OR {email} = email) AND {pw} = password;")

@app.post('/register/<str:name>:<str:pw>:<str:email>')
def register():
    return execute_sql(f"INSERT INTO users ({name}, {pw}, {email})")

@app.get('articles/<str:keyword>:<int:id>')
def get_article():
    return "Artikel"


if __name__ == "__main__":
    app.run()