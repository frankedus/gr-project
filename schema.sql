CREATE DATABASE digitalpros;
\connect digitalpros;
CREATE TABLE users (id SERIAL, name TEXT NOT NULL, email TEXT NOT NULL, message TEXT NOT NULL, PRIMARY KEY (id));
