DROP DATABASE IF EXISTS `delivery_app`;
CREATE DATABASE IF NOT EXISTS `delivery_app`;

USE `delivery_app`;

CREATE TABLE IF NOT EXISTS Users (
	id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  role VARCHAR(20) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE KEY `email_un` (email)
);

CREATE TABLE IF NOT EXISTS Sales (
  id INT NOT NULL AUTO_INCREMENT,
  user_id INT NOT NULL,
  seller_id INT NOT NULL,
  total_price DECIMAL(9,2) NOT NULL,
  delivery_address VARCHAR(100) NOT NULL,
  delivery_number VARCHAR(50) NOT NULL,
  sale_date DATETIME NOT NULL,
  status VARCHAR(50) NOT NULL,
  PRIMARY KEY(id),
  FOREIGN KEY (user_id) REFERENCES Users(id),
  FOREIGN KEY (seller_id) REFERENCES Users(id)
);

CREATE TABLE IF NOT EXISTS Products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(4,2) NOT NULL,
  url_image VARCHAR(200) NOT NULL DEFAULT '',
  PRIMARY KEY(id),
  UNIQUE KEY `name` (name)
);

CREATE TABLE IF NOT EXISTS Sales_Products (
  sale_id INT NOT NULL,
  product_id INT NOT NULL,
  quantity INT NOT NULL,
  PRIMARY KEY(sale_id, product_id),
  FOREIGN KEY(sale_id) REFERENCES Sales(id),
  FOREIGN KEY(product_id) REFERENCES Products(id)
);

INSERT INTO Users (id, name, email, password, role) VALUES
  (1, 'Delivery App Admin', 'adm@deliveryapp.com', '$2a$12$24mk3pPbWDIrvVLAhV0F8eLfXZPH9bJCrS0SgU2kPQYW40HwVbMSi', 'administrator'), -- senha: --adm2@21!!--
  (2, 'Fulana Pereira', 'fulana@deliveryapp.com', '$2a$12$10yXYGvUedgcvKwRpIHCIOClPASrBMt..jNwpYA4YlgM20bNNcU1C', 'seller'), -- senha: fulana@123
  (3, 'Cliente Zé Birita', 'zebirita@email.com', '$2a$12$fe0fRv2lv1o.oUaB7OGPfun4uaAvkbiB6OxBJQ.hn4V2hXJRbXwkW', 'customer'); -- senha: $#zebirita#$
    

INSERT INTO Products (id, name, price, url_image) VALUES
	(1, 'Skol Lata 250ml',2.20, 'http://localhost:3001/images/skol_lata_350ml.jpg'),
	(2, 'Heineken 600ml',7.50, 'http://localhost:3001/images/heineken_600ml.jpg'),
	(3, 'Antarctica Pilsen 300ml',2.49, 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg'),
	(4, 'Brahma 600ml',7.50, 'http://localhost:3001/images/brahma_600ml.jpg'),
	(5, 'Skol 269ml',2.19, 'http://localhost:3001/images/skol_269ml.jpg'),
	(6, 'Skol Beats Senses 313ml',4.49, 'http://localhost:3001/images/skol_beats_senses_313ml.jpg'),
	(7, 'Becks 330ml',4.99, 'http://localhost:3001/images/becks_330ml.jpg'),
	(8, 'Brahma Duplo Malte 350ml',2.79, 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg'),
	(9, 'Becks 600ml',8.89, 'http://localhost:3001/images/becks_600ml.jpg'),
	(10, 'Skol Beats Senses 269ml',3.57, 'http://localhost:3001/images/skol_beats_senses_269ml.jpg'),
	(11, 'Stella Artois 275ml',3.49, 'http://localhost:3001/images/stella_artois_275ml.jpg');
