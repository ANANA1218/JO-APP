
CREATE TABLE Sports (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL
);


CREATE TABLE Epreuves (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    sport_id INT,
    FOREIGN KEY (sport_id) REFERENCES Sports(id)
);

CREATE TABLE Medailles (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL
);

CREATE TABLE Athletes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NULL,
    prenom VARCHAR(255) NULL,
    pays VARCHAR(255) NOT NULL,
    medaille_id INT,
    FOREIGN KEY (medaille_id) REFERENCES Medailles(id),
    epreuve_id INT, FOREIGN KEY (epreuve_id) REFERENCES Epreuves(id)
);

CREATE TABLE Pays (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    medaille_id INT,
    FOREIGN KEY (medaille_id) REFERENCES Medailles(id),
    epreuve_id INT, FOREIGN KEY (epreuve_id) REFERENCES Epreuves(id)
);


CREATE TABLE Users (
    id INT PRIMARY KEY AUTO_INCREMENT,
	email VARCHAR(255) NOT NULL,
    nom VARCHAR(255) NULL,
    prenom VARCHAR(255) NULL,
	password VARCHAR(255) NOT NULL,
    pays VARCHAR(255) NOT NULL,
    role VARCHAR(255) DEFAULT 'public'
);


