
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS articles;

DROP TABLE IF EXISTS sources;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS sources_articles;

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username VARCHAR(60) NOT NULL,
    user_pw VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE sources(
    source_id INTEGER UNSIGNED NOT NULL PRIMARY KEY ,
    paragraph_stamp INTEGER,
    visited_at TIMESTAMP,
    description TEXT,
    link TEXT,
    title VARCHAR(100)
);

CREATE TABLE articles (
    article_id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(100),
    author_id INTEGER NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    source_id INTEGER NOT NULL,
    file_path VARCHAR(500),

    FOREIGN KEY (author_id) REFERENCES users(user_id),
    FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE comments(
    comment_id INTEGER PRIMARY KEY AUTOINCREMENT,
    article_id INTEGER NOT NULL,
    author_id INTEGER NOT NULL,
    comment TEXT,
    created_at TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(user_id)
);

CREATE TABLE sources_articles(
    source_id INT UNSIGNED NOT NULL,
    articles_id INT UNSIGNED NOT NULL
);

INSERT INTO users(username, user_pw, email) 
VALUES("Bedlinger", "iloveSEW", "bedlinger@student.tgm.ac.at");

INSERT INTO users(username, user_pw, email) 
VALUES("MDURST", "iLoveMEDT", "mdurst@student.tgm.ac.at");


INSERT INTO articles (title, author_id, source_id, file_path) 
VALUES("Virtuelle Maschine installieren", 1, "Benjamin Edlinger", "C:\Users\amade\OneDrive\Desktop\Dokumente\Amadeus\ProWiki\Backend\Articles\GEK530 Virtuelle Maschine installieren.md");

INSERT INTO comments(author_id, comment, article_id) 
VALUES(2, "Sehr Gut!", 1)
