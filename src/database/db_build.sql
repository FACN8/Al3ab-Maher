BEGIN;


DROP TABLE IF EXISTS users;


create table users (

    id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) NOT NULL,
    user_password  VARCHAR(50) NOT NULL,
    user_score  VARCHAR(225) NOT NULL,
	 
);
INSERT INTO users(user_name , user_password) 
VALUES
('fatmeeh','123'),
('ivan','123'),
('najwan','123');

create table questions (

    id SERIAL PRIMARY KEY,
    questions VARCHAR(225) NOT NULL,
    option_1  VARCHAR(225) NOT NULL,
    option_2  VARCHAR(225) NOT NULL,
    option_3  VARCHAR(225) NOT NULL,
    answer VARCHAR(225) NOT NULL,

);

INSERT INTO users(questions , option_1,option_2,option_3) 
VALUES
('1+1=?','1','2','3','2')
('1+2=?','1','2','3','3')
('1+0=?','1','2','3','1')