USE ProWIKI;


DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS articles;

DROP TABLE IF EXISTS sources;
DROP TABLE IF EXISTS users;


CREATE TABLE users (
    user_id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL
);

CREATE TABLE sources(
    source_id INT UNSIGNED NOT NULL PRIMARY KEY ,
    paragraph_stamp INT,
    visited_at TIMESTAMP,
    description TEXT,
    link TEXT,
    title VARCHAR(100)
);

CREATE TABLE articles (
    article_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    author INT UNSIGNED NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    source_id INT UNSIGNED NOT NULL,
    path VARCHAR(500),

    FOREIGN KEY (author) REFERENCES users(user_id),
    FOREIGN KEY (source_id) REFERENCES sources(source_id)
);

CREATE TABLE comments(
    comment_id INT UNSIGNED NOT NULL PRIMARY KEY,
    author_id INT UNSIGNED NOT NULL,
    comment TEXT,
    created_at TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(user_id),
    FOREIGN KEY (comment_id) REFERENCES articles(article_id)
);

CREATE TABLE sources_articles(
    source_id INT UNSIGNED NOT NULL,
    articles_id INT UNSIGNED NOT NULL
);


