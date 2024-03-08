
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Athlétisme', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Natation', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Gymnastique', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Tennis de table', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Basketball', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Football', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Cyclisme', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Escalade', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Judo', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Volleyball', "photo");
INSERT INTO Sports
    (nom,photo)
VALUES
    ('Boxe', "photo");
INSERT INTO Sports (nom,photo) VALUES ('Tir a l\'
arc',"photo");

INSERT INTO Epreuves (nom, sport_id) VALUES ('100
mètres', 1);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Marathon', 1);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Saut
en
longueur', 1);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Lancer
de
javelot', 1);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Nage
libre', 2);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Relais
4x100
mètres', 2);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Nage
papillon', 2);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Nage
dos', 2);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Sol', 3);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Barres
asymétriques', 3);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Poutre', 3);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Saut
de
cheval', 3);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Simple
Hommes', 4);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Simple
Femmes', 4);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Doubles
Hommes', 4);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Doubles
Femmes', 4);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Match
Hommes', 5);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Match
Femmes', 5);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Match
Mixte', 5);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Match
Hommes', 6);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Match
Femmes', 6);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Vitesse
sur
piste', 7);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Course
sur
route', 7);
INSERT INTO Epreuves (nom, sport_id) VALUES ('BMX', 7);
INSERT INTO Epreuves (nom, sport_id) VALUES ('VTT', 7);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Escalade
de
vitesse', 8);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Bloc', 8);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Escalade
en
difficulté', 8);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie
-60kg', 9);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie
+100kg', 9);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie
Mixte', 9);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Match
Hommes', 10);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Match
Femmes', 10);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie
poids
légers', 11);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie
poids
lourds', 11);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie
Mixte', 11);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Arc
classique
Hommes', 12);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Arc
classique
Femmes', 12);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Arc
à
poulies
Hommes', 12);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Arc
à
poulies
Femmes', 12);



INSERT INTO Medailles (nom) VALUES ('OR');
INSERT INTO Medailles (nom) VALUES ('ARGENT');
INSERT INTO Medailles (nom) VALUES ('BRONZE');


INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Bolt', 'Usain', 'Jamaique', 1, 1);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Biles', 'Simone', 'Etats-Unis', 1, 3);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Johnson-Thompson', 'Katarina', 'Royaume-Uni', 1, 4);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Phelps', 'Michael', 'Etats-Unis', 1, 5);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Ledecky', 'Katie', 'Etats-Unis', 1, 6);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('USA', NULL, 'Etats-Unis', 1, 7);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Biles', 'Simone', 'Etats-Unis', 1, 8);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Hashimoto', 'Daiki', 'Japon', 1, 9);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Ma', 'Long', 'Chine', 1, 10);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Ding', 'Ning', 'Chine', 1, 11);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('USA', NULL, 'Etats-Unis', 1, 12);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('USA', NULL, 'Etats-Unis', 1, 13);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Canada', NULL, 'Canada', 1, 14);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Bresil', NULL, 'Bresil', 1, 15);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('USA', NULL, 'Etats-Unis', 1, 16);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Roglic', 'Primoz', 'Slovenie', 1, 17);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Nakamura', 'Tomoa', 'Japon', 1, 18);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Garnbret', 'Janja', 'Slovenie', 1, 19);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Maruyama', 'Joshiro', 'Japon', 1, 20);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Tsjakadoea', 'Tornike', 'Georgie', 1, 21);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('USA', NULL, 'Etats-Unis', 1, 22);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Serbie', NULL, 'Serbie', 1, 23);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Tyszkiewicz', 'Krysztov', 'Pologne', 1, 24);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Lutalo', 'Muhammad', 'Royaume-Uni', 1, 25);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Kim', 'Je
Deok', 'Coree
du
Sud', 1, 26);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('An', 'San', 'Coree
du
Sud', 1, 27);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Gatlin', 'Justin', 'Etats-Unis', 2, 1);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Bowie', 'Tori', 'Etats-Unis', 2, 1);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Hughes', 'Zharnel', 'Royaume-Uni', 2, 1);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Blake', 'Yohan', 'Jamaique', 3, 1);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Thompson-Herah', 'Elaine', 'Jamaique',  3, 1);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Hughes', 'Daryll', 'Royaume-Uni',  3, 1);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Manaudou', 'Florent', 'France', 2, 5);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Hosszu', 'Katinka', 'Hongrie', 2, 6);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Dressel', 'Caeleb', 'Etats-Unis', 2, 5);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Peaty', 'Adam', 'Royaume-Uni',  3, 5);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Sjöström', 'Sarah', 'Suede',  3, 6);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Ledecky', 'Katie', 'Etats-Unis',  3, 5);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Whittenburg', 'Donnell', 'Etats-Unis', 2, 9);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Kaya', 'Ahmet', 'Turquie', 2, 10);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Ervin', 'Sam', 'Australie', 2, 9);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Zanetti', 'Arthur', 'Bresil',  3, 9);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Wang', 'Yibo', 'Chine',  3, 10);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Gimnasta', 'Jose', 'Espagne',  3, 9);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Ma', 'Lin', 'Chine', 2, 13);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Ito', 'Mima', 'Japon', 2, 14);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Wong', 'Chun
Ting', 'Hong
Kong', 2, 13);

INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Boll', 'Timo', 'Allemagne',  3, 13);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Feng', 'Tianwei
', 'Singapour',  3, 14);
INSERT INTO Athletes (nom, prenom, pays, medaille_id, epreuve_id) VALUES ('Ovtcharov', 'Dimitrij', 'Allemagne',  3, 13);

INSERT INTO Users (email, nom,  prenom, password, pays, role) VALUES ('smith@gmail.com','Smith', 'Alice', 'test1234','Royaume-Uni', 'admin');
INSERT INTO Users (email, nom, prenom, password, pays, role) VALUES ('dubois@gmail.com','Dubois', 'Élise', 'test1234','France');