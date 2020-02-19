BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS questions;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(225) NOT NULL,
    user_password VARCHAR(225) NOT NULL,
    user_score INTEGER NOT NULL
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    questions VARCHAR(225) NOT NULL,
    option_1 VARCHAR(225) NOT NULL,
    option_2 VARCHAR(225) NOT NULL,
    option_3 VARCHAR(225) NOT NULL,
    answer VARCHAR(225) NOT NULL
);

INSERT INTO
    questions(questions, option_1, option_2, option_3, answer)
VALUES
    ('1+1=?', '1', '2', '3', '2'),
    ('1+2=?', '1', '2', '3', '3'),
    ('1+0=?', '1', '2', '3', '1');

COMMIT;