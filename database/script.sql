DROP DATABASE IF EXISTS joapp;

CREATE DATABASE joapp;

CREATE TABLE joapp.Sports (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL
	photo VARCHAR(255) NULL
);


CREATE TABLE joapp.Epreuves (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    sport_id INT,
    FOREIGN KEY (sport_id) REFERENCES Sports(id)
);

CREATE TABLE joapp.Medailles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL
);

CREATE TABLE joapp.Athletes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NULL,
    prenom VARCHAR(255) NULL,
    pays VARCHAR(255) NOT NULL,
    medaille_id INT,
    FOREIGN KEY (medaille_id) REFERENCES Medailles(id),
    epreuve_id INT, FOREIGN KEY (epreuve_id) REFERENCES Epreuves(id)
);

CREATE TABLE joapp.Pays (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    medaille_id INT,
    FOREIGN KEY (medaille_id) REFERENCES Medailles(id),
    epreuve_id INT, FOREIGN KEY (epreuve_id) REFERENCES Epreuves(id)
);


CREATE TABLE joapp.Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL,
    nom VARCHAR(255) NULL,
    prenom VARCHAR(255) NULL,
	password VARCHAR(255) NOT NULL,
    pays VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT 'public'
);


