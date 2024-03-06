
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

CREATE TABLE DetenteursTitres (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(255) NOT NULL,
    prenom VARCHAR(255) NOT NULL,
    pays VARCHAR(255) NOT NULL,
    titre VARCHAR(20) NOT NULL, 
    epreuve_id INT,
    FOREIGN KEY (epreuve_id) REFERENCES Epreuves(id)
);