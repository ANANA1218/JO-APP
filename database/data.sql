
INSERT INTO Sports (nom) VALUES ('Athlétisme');
INSERT INTO Sports (nom) VALUES ('Natation');
INSERT INTO Sports (nom) VALUES ('Gymnastique');
INSERT INTO Sports (nom) VALUES ('Tennis de table');
INSERT INTO Sports (nom) VALUES ('Basketball');
INSERT INTO Sports (nom) VALUES ('Football');
INSERT INTO Sports (nom) VALUES ('Cyclisme');
INSERT INTO Sports (nom) VALUES ('Escalade');
INSERT INTO Sports (nom) VALUES ('Judo');
INSERT INTO Sports (nom) VALUES ('Volleyball');
INSERT INTO Sports (nom) VALUES ('Boxe');
INSERT INTO Sports (nom) VALUES ('Tir a l\'arc');

INSERT INTO Epreuves (nom, sport_id) VALUES ('100 mètres', 1);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Marathon', 1);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Saut en longueur', 1);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Lancer de javelot', 1);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Nage libre', 2);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Relais 4x100 mètres', 2);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Nage papillon', 2);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Nage dos', 2);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Sol', 3);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Barres asymétriques', 3);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Poutre', 3);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Saut de cheval', 3);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Simple Hommes', 4);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Simple Femmes', 4);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Doubles Hommes', 4);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Doubles Femmes', 4);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Match Hommes', 5);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Match Femmes', 5);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Match Mixte', 5);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Match Hommes', 6);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Match Femmes', 6);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Vitesse sur piste', 7);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Course sur route', 7);
INSERT INTO Epreuves (nom, sport_id) VALUES ('BMX', 7);
INSERT INTO Epreuves (nom, sport_id) VALUES ('VTT', 7);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Escalade de vitesse', 8);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Bloc', 8);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Escalade en difficulté', 8);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie -60kg', 9);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie +100kg', 9);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie Mixte', 9);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Match Hommes', 10);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Match Femmes', 10);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie poids légers', 11);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie poids lourds', 11);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Catégorie Mixte', 11);

INSERT INTO Epreuves (nom, sport_id) VALUES ('Arc classique Hommes', 12);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Arc classique Femmes', 12);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Arc à poulies Hommes', 12);
INSERT INTO Epreuves (nom, sport_id) VALUES ('Arc à poulies Femmes', 12);

INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Bolt', 'Usain', 'Jama�que', 'Or', 1);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Biles', 'Simone', '�tats-Unis', 'Or', 3);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Johnson-Thompson', 'Katarina', 'Royaume-Uni', 'Or', 4);


INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Phelps', 'Michael', '�tats-Unis', 'Or', 5);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Ledecky', 'Katie', '�tats-Unis', 'Or', 6);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('USA', NULL, '�tats-Unis', 'Or', 7);


INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Biles', 'Simone', '�tats-Unis', 'Or', 8);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Hashimoto', 'Daiki', 'Japon', 'Or', 9);


INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Ma', 'Long', 'Chine', 'Or', 10);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Ding', 'Ning', 'Chine', 'Or', 11);

INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('USA', NULL, '�tats-Unis', 'Or', 12);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('USA', NULL, '�tats-Unis', 'Or', 13);


INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Canada', NULL, 'Canada', 'Or', 14);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Br�sil', NULL, 'Br�sil', 'Or', 15);


INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('USA', NULL, '�tats-Unis', 'Or', 16);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Roglic', 'Primoz', 'Slov�nie', 'Or', 17);

INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Nakamura', 'Tomoa', 'Japon', 'Or', 18);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Garnbret', 'Janja', 'Slov�nie', 'Or', 19);


INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Maruyama', 'Joshiro', 'Japon', 'Or', 20);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Tsjakadoea', 'Tornike', 'G�orgie', 'Or', 21);


INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('USA', NULL, '�tats-Unis', 'Or', 22);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Serbie', NULL, 'Serbie', 'Or', 23);


INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Tyszkiewicz', 'Krysztov', 'Pologne', '
Or', 24);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Lutalo', 'Muhammad', 'Royaume-Uni', 'Or', 25);


INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('Kim', 'Je Deok', 'Cor�e du Sud', 'Or', 26);
INSERT INTO DetenteursTitres (nom, prenom, pays, titre, epreuve_id) VALUES ('An', 'San', 'Cor�e du Sud', 'Or', 27);