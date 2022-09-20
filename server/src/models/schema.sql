
CREATE TYPE roleType AS ENUM ('SuperAdmin', 'Admin', 'Subscriber') DEFAULT 'Subscriber';

CREATE TABLE users(
    userId uuid DEFAULT uuid_generate_v4 () PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    middleName VARCHAR(255),
    lastName VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phoneNumber BIGINT NOT NULL,
    role roleType,
    address VARCHAR(255) NOT NULL,
    createdDate VARCHAR(255)
);

