BEGIN;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_score VARCHAR(225) NOT NULL
);

INSERT INTO
    users(user_name, user_password, user_score)
VALUES
    ('fatmeeh', 'fatmeeh123', 0),
    ('ivan', '123', 0),
    ('najwan', '123', 0);

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