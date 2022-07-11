CREATE TABLE IF NOT EXISTS user_profile (
    user_id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(256)
);

CREATE SEQUENCE user_profile_seq START 1 increment 1;