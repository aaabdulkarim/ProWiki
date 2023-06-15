from fastapi import FastAPI
import codecs

import uvicorn
from database_manager import execute_sql


app = FastAPI()

@app.post('/login')
def login(name : str, pw : str, email: str):
    try:
        return execute_sql(f"SELECT username FROM users WHERE ('{name}' = username OR '{email}' = email) AND '{pw}' = user_pw;")
    
    except:
        return {"Error" : "Could not login"}


@app.post('/register')
def register(name : str, pw : str, email: str):
    try:
        return execute_sql(f"INSERT INTO users(username, user_pw, email) VALUES ('{name}', '{pw}', '{email}')")
    
    except:
        return {"Error" : "Could not register"}


@app.get('/articles_by_keyword')
def article(keyword : str):
    try:
        article_data = execute_sql(f"""SELECT article_id,  title, author_id, created_at 
                                   FROM articles WHERE title LIKE '%{keyword}%'""")
        author_id = article_data[0][2]
        author_name = author(author_id)
        return {
            "article_id" : article_data[0][0],
            "title" : article_data[0][1],
            "author" : author_name, 
            "created_at" : article_data[0][3]
        }
    
    except:
        return {"Error" : "No Articles Found"}
    

@app.get('/articles_by_id')
def get_article(id : int):
    try:
        article_data = execute_sql(f"SELECT file_path, title, author_id, created_at FROM articles WHERE article_id = {id}")
        path = article_data[0][0]
        author_id = article_data[0][2]
        author_name = author(author_id)

        with codecs.open(path, "r", encoding="utf-8") as f:
            md_content = f.read()

        return {
            "text" : md_content, 
            "title" : article_data[0][1], 
            "author" : author_name, 
            "created_at" : article_data[0][3]
        }

    except Exception:
        return {"Error" : "Article Not Found/Available"}


@app.get('/user')
def author(id : int):
    try:
        return execute_sql(f"SELECT username FROM users WHERE user_id = {id}")
    
    except:
        return {"Error" : "No Articles Found"}


@app.get("/comments")
def comments(article_id : int):
    try:
        comment_data = execute_sql(f"SELECT comment, author_id, created_at FROM comments WHERE article_id = {article_id}")
        author_name = author(comment_data[0][1])
        return {
            "comment" : comment_data[0][0],
            "author_name" : author_name,
            "created_at" : comment_data[0][2]
        }
    
    except:
        return {"Error" : "No Comments Found"}


@app.post("/comments")
def comments(author_id : int, comment : str, article_id : int):
    try:
        execute_sql(f"INSERT INTO comments(author_id, comment, article_id) VALUES({author_id}, '{comment}', '{article_id}')")
        return {"Success" : "Successfully commented"}
    except:
        return {"Error" : "Unable To Comment"}




if __name__ == "__main__":
    uvicorn.run(app)
