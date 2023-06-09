from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import codecs
from random import sample
import uvicorn
from database_manager import execute_sql


app = FastAPI()
# ALLOW CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Article(BaseModel):
    title: str
    author_id: int
    text: str

@app.post("/articles")
def post_article(article: Article):

    try:
        # Write file
        file_path = r"C:\Users\amade\OneDrive\Desktop\Dokumente\Amadeus\ProWiki\Backend\Articles" + "\\" + article.title + ".md"

        

        with open(file_path, "w") as f:
            f.write(article.text) 

        return execute_sql(f"""INSERT INTO articles(title, author_id, file_path)
                         VALUES('{article.title}', {article.author_id}, '{file_path}')""")
    
    except Exception as e:
        print(e)
        return {"Error" : "Unable To Post Article"}


@app.post('/login')
def login(name : str, pw : str, email: str):
    try:
        return execute_sql(f"SELECT username FROM users WHERE ('{name}' = username OR '{email}' = email) AND '{pw}' = user_pw;")
    
    except Exception as e:
        print(e)
        return {"Error" : "Could not login"}


@app.post('/register')
def register(name : str, pw : str, email: str):
    try:
        return execute_sql(f"INSERT INTO users(username, user_pw, email) VALUES ('{name}', '{pw}', '{email}')")
    
    except Exception as e:
        print(e)
        return {"Error" : "Could not register"}

@app.get('/articles')
def random_articles():
    rand_range_id = sample(range(14), 6)
    articles = []
    for id in rand_range_id:
        query = execute_sql(f"SELECT article_id, title, author_id, created_at FROM articles WHERE article_id = {id}")
        if query != []:
            articles.append(query[0])

    return articles


@app.get('/articles/keyword')
def article(keyword : str):
    try:
        keyword = keyword.upper()
        article_data = execute_sql(f"""SELECT article_id, author_id, title, created_at 
                                   FROM articles WHERE UPPER(title) LIKE '%{keyword}%' """)
        
        
        return article_data
    
    except Exception as e:
        print(e)
        return {"Error" : "No Articles Found"}
    

@app.get('/articles/id')
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

    except Exception as e:
        print(e)
        return {"Error" : "Article Not Found/Available"}


@app.get('/user')
def author(id : int):
    try:
        return execute_sql(f"SELECT username FROM users WHERE user_id = {id}")
    
    except Exception as e:
        print(e)
        return {"Error" : "No Articles Found"}


@app.get("/comments")
def comments(article_id : int):
    try:
        comment_data = execute_sql(f"SELECT comment, author_id, created_at FROM comments WHERE article_id = {article_id}")
        return comment_data
    
    except Exception as e:
        print(e)        
        return {"Error" : "No Comments Found"}


@app.post("/comments")
def comments(author_id : int, comment : str, article_id : int):
    try:
        execute_sql(f"INSERT INTO comments(author_id, comment, article_id) VALUES({author_id}, '{comment}', '{article_id}')")
        return {"Success" : "Successfully commented"}
    
    except Exception as e:
        print(e)
        return {"Error" : "Unable To Comment"}


if __name__ == "__main__":
    uvicorn.run(app)
