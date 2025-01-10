CREATE DATABASE myrestaurant;
USE myrestaurant;
CREATE TABLE IF NOT EXISTS users(
    id INT(10) NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(200    mysql -u your_username -p) NOT NULL,
    phone VARCHAR(200),
    address VARCHAR(200),
    password VARCHAR(200) NOT NULL
);
INSERT INTO users(name, phone, address, password)
VALUES
('Gaurav', '123456789', 'Mumbai, India', 'pass134'),
('Sakshi', '987654321', 'Chennai, India', 'pass456');