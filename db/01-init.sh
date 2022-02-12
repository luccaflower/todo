#!/bin/bash
set -e
psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "postgres" <<-EOSQL
  CREATE DATABASE todo;
  GRANT ALL PRIVILEGES ON DATABASE todo TO $POSTGRES_USER;
  \connect todo $POSTGRES_USER
EOSQL