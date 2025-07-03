Database Setup:

You’ll need to create a todos table in tododb.
You can do it by connecting to the postgres container like this:

docker exec -it todo-postgres psql -U postgres -d tododb

CREATE TABLE todos (
id SERIAL PRIMARY KEY,
title TEXT NOT NULL
);

RUN All

docker-compose up --build -d
