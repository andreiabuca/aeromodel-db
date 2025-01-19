-- Création de la base de données --
-- DROP DATABASE IF EXISTS AeroModel;
CREATE DATABASE AeroModel CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE AeroModel ;

-- Table Categories
CREATE TABLE Categories (
	id INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50)
);

-- Table Produits
CREATE TABLE Produits (
	id_produits INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    reference_produit VARCHAR(50),
    prix_unitaire FLOAT,
    quantite_stock INT,
    id_categorie INT,
    FOREIGN KEY (id_categorie) REFERENCES Categories(id)
);

-- Table Fournisseur
CREATE TABLE Fournisseur (
	id_fournisseur INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50)
);

-- Table produits_fournisseur
CREATE TABLE produits_fournisseur(
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_produits INT,
    id_fournisseur INT,
    FOREIGN KEY (id_produits) REFERENCES Produits(id_produits),
    FOREIGN KEY (id_fournisseur) REFERENCES Fournisseur(id_fournisseur)
);

-- Table Clients
CREATE TABLE Clients (
	id_client INT AUTO_INCREMENT PRIMARY KEY,
    nom VARCHAR(50),
    adress VARCHAR(150),
    email VARCHAR(150),
    telephone VARCHAR(10)
);

-- Table Commandes
CREATE TABLE Commandes (
	id_commandes INT AUTO_INCREMENT PRIMARY KEY,
    id_client INT,
    date_time datetime,
    prix_total FLOAT,
    FOREIGN KEY (id_client) REFERENCES Clients(id_client)
);

-- Table lignes_commande
CREATE TABLE lignes_commande (
	id INT AUTO_INCREMENT PRIMARY KEY,
    id_produits INT,
    id_commandes INT,
    quantite INT,
    FOREIGN KEY (id_produits) REFERENCES Produits(id_produits), 
    FOREIGN KEY (id_commandes) REFERENCES Commandes(id_commandes)
);

-- Data for Categories Table 
INSERT INTO Categories (nom) 
VALUES 
('Électronique'),
('Maquettes simples'),
('Avions en papier classique'),
('Avions de chasse'),
('Avions commerciaux'),
('Hydravions'),
('Avions en papier personnalisables'),
('Maquettes en papier de collection'),
('Accessoires pour maquettes'),
('Papier spécial pour maquettes'),
('Avions en papier pliables'),
('Modèles historiques'),
('Modèles futuristes'),
('Avions biplans'),
('Avions à hélices'),
('Jets supersoniques'),
('Avions militaires'),
('Avions civils'),
('Miniatures d’avions en papier'),
('Avions en papier décoratifs'),
('Papier coloré pour maquettes'),
('Papier texturé pour maquettes'),
('Adhésifs et outils'),
('Livres et guides de pliage'),
('Avions en papier pour enfants'),
('Maquettes de concours'),
('Avions en papier réalistes'),
('Modèles réduits d’avions célèbres'),
('Kits de pliage débutant'),
('Kits de pliage avancé'),
('Papier écologique pour maquettes'),
('Avions en papier à thème'),
('Avions en papier avec moteurs en papier'),
('Papier renforcé pour maquettes'),
('Avions en papier pour événements'),
('Maquettes pédagogiques'),
('Papier premium pour pliage'),
('Modèles géants d’avions en papier'),
('Avions en papier micro-modèles'),
('Avions à thème de la Seconde Guerre mondiale'),
('Avions en papier interactifs'),
('Papier imprimé pour maquettes'),
('Papier spécial pour pliages complexes'),
('Supports d’exposition pour maquettes'),
('Avions en papier pour compétitions de vol'),
('Avions en papier pour décoration intérieure'),
('Kits de papier thématiques'),
('Maquettes d’avions pliés artisanaux'),
('Avions en papier pour initiations scolaires');

-- Data for Clients Table
INSERT INTO Clients (nom, adress, email, telephone) 
VALUES 
('Dupont', '123 Rue Principale, Paris, France', 'dupont@example.com', '0123456789'),
('Durand', '45 Avenue des Champs, Lyon, France', 'durand@example.com', '0145567890'),
('Martin', '67 Rue de la Gare, Marseille, France', 'martin@example.com', '0678123456'),
('Bernard', '12 Boulevard Haussmann, Paris, France', 'bernard@example.com', '0654321876'),
('Dubois', '8 Impasse des Fleurs, Toulouse, France', 'dubois@example.com', '0765432109'),
('Thomas', '20 Rue des Écoles, Bordeaux, France', 'thomas@example.com', '0612345678'),
('Robert', '54 Place de la Liberté, Lille, France', 'robert@example.com', '0555667788'),
('Petit', '9 Rue Victor Hugo, Nice, France', 'petit@example.com', '0632147890'),
('Richard', '35 Allée des Roses, Nantes, France', 'richard@example.com', '0621456789'),
('Durant', '18 Rue Pasteur, Strasbourg, France', 'durant@example.com', '0678943210'),
('Morel', '73 Avenue de la République, Rennes, France', 'morel@example.com', '0643217890'),
('Simon', '6 Quai de la Loire, Orléans, France', 'simon@example.com', '0754123987'),
('Laurent', '11 Rue Voltaire, Clermont-Ferrand, France', 'laurent@example.com', '0789541236'),
('Lemoine', '42 Rue Gambetta, Dijon, France', 'lemoine@example.com', '0647895123'),
('David', '15 Boulevard Saint-Michel, Paris, France', 'david@example.com', '0671238945'),
('Michel', '78 Avenue Mozart, Toulon, France', 'michel@example.com', '0612378945'),
('Garcia', '25 Rue des Lilas, Rouen, France', 'garcia@example.com', '0654987123'),
('Leroy', '5 Boulevard des Nations, Metz, France', 'leroy@example.com', '0623456789'),
('Roux', '89 Rue de la Liberté, Reims, France', 'roux@example.com', '0698745123'),
('Vincent', '47 Place de la Gare, Nancy, France', 'vincent@example.com', '0654123987'),
('Bonnet', '13 Rue des Peupliers, Angers, France', 'bonnet@example.com', '0641238795'),
('Francois', '52 Rue Lafayette, Grenoble, France', 'francois@example.com', '0678941253'),
('Lambert', '32 Avenue des Tilleuls, Besançon, France', 'lambert@example.com', '0623948571'),
('Bertrand', '19 Rue du Port, Caen, France', 'bertrand@example.com', '0634871298'),
('Renaud', '28 Impasse du Moulin, Poitiers, France', 'renaud@example.com', '0612987435'),
('Gonzalez', '64 Allée des Cerisiers, Perpignan, France', 'gonzalez@example.com', '0674192385'),
('Fontaine', '3 Rue Jean Moulin, Brest, France', 'fontaine@example.com', '0659832174'),
('Chevalier', '10 Avenue des Platanes, Pau, France', 'chevalier@example.com', '0647512983'),
('Robin', '7 Rue des Arènes, Limoges, France', 'robin@example.com', '0628743195'),
('Blanc', '60 Place du Marché, Nîmes, France', 'blanc@example.com', '0693217845'),
('Moulin', '44 Rue du Lac, Annecy, France', 'moulin@example.com', '0658741293'),
('Picard', '16 Rue des Oliviers, Ajaccio, France', 'picard@example.com', '0674398125'),
('Dupuis', '38 Boulevard des Alpes, Chambéry, France', 'dupuis@example.com', '0632189475'),
('Faure', '12 Rue de la Forêt, Montauban, France', 'faure@example.com', '0674321985'),
('Charpentier', '33 Rue des Prés, La Rochelle, France', 'charpentier@example.com', '0657943812'),
('Perrot', '48 Place des Pyramides, Tours, France', 'perrot@example.com', '0698743215'),
('Rousseau', '22 Rue des Pâquerettes, Chartres, France', 'rousseau@example.com', '0631254987'),
('Barbier', '91 Allée des Pins, Saint-Malo, France', 'barbier@example.com', '0671235498'),
('Renard', '8 Boulevard Carnot, Amiens, France', 'renard@example.com', '0612987432'),
('Giraud', '20 Avenue des Érables, Colmar, France', 'giraud@example.com', '0658472193'),
('Noël', '74 Rue des Tournesols, Valence, France', 'noel@example.com', '0632148957'),
('Schmitt', '13 Place des Vosges, Mulhouse, France', 'schmitt@example.com', '0675894321'),
('Mathieu', '55 Avenue des Pyrénées, Tarbes, France', 'mathieu@example.com', '0619783425'),
('Clement', '30 Rue des Alpes, Bayonne, France', 'clement@example.com', '0657129834'),
('Marchand', '27 Place du Général, Narbonne, France', 'marchand@example.com', '0621978435'),
('Guichard', '88 Allée des Palmiers, Antibes, France', 'guichard@example.com', '0678431295'),
('Benoît', '50 Rue des Amandiers, Cannes, France', 'benoit@example.com', '0619432758'),
('Hernandez', '37 Rue des Coquelicots, Avignon, France', 'hernandez@example.com', '0698432175');

-- Data for Commandes Table 
INSERT INTO Commandes (id_client,date_time, prix_total) 
VALUES 
(1, '2025-01-09 14:30:00', 45.99),
(2, '2025-01-08 11:45:00', 30.50),
(3, '2025-01-07 16:00:00', 75.20),
(4, '2025-01-06 13:15:00', 60.10),
(5, '2025-01-05 12:30:00', 25.75),
(6, '2025-01-04 10:00:00', 40.90),
(7, '2025-01-03 09:25:00', 33.30),
(8, '2025-01-02 15:00:00', 50.00),
(9, '2025-01-01 18:20:00', 62.80),
(10, '2024-12-31 14:00:00', 48.00),
(11, '2024-12-30 17:45:00', 52.45),
(12, '2024-12-29 13:10:00', 38.90),
(13, '2024-12-28 10:35:00', 41.65),
(14, '2024-12-27 09:15:00', 29.99),
(15, '2024-12-26 12:50:00', 35.00),
(16, '2024-12-25 16:20:00', 78.25),
(17, '2024-12-24 11:40:00', 61.60),
(18, '2024-12-23 10:05:00', 54.75),
(19, '2024-12-22 14:45:00', 47.50),
(20, '2024-12-21 13:30:00', 67.90),
(21, '2024-12-20 11:15:00', 53.25),
(22, '2024-12-19 10:25:00', 39.80),
(23, '2024-12-18 09:50:00', 72.55),
(24, '2024-12-17 17:00:00', 59.65),
(25, '2024-12-16 15:10:00', 36.40),
(26, '2024-12-15 13:25:00', 44.30),
(27, '2024-12-14 12:00:00', 68.10),
(28, '2024-12-13 14:40:00', 33.60),
(29, '2024-12-12 09:30:00', 56.45),
(30, '2024-12-11 18:10:00', 70.00),
(31, '2024-12-10 11:55:00', 48.80),
(32, '2024-12-09 14:15:00', 65.90),
(33, '2024-12-08 13:50:00', 50.20),
(34, '2024-12-07 16:35:00', 38.60),
(35, '2024-12-06 10:10:00', 34.80),
(36, '2024-12-05 12:30:00', 63.00),
(37, '2024-12-04 09:00:00', 29.99),
(38, '2024-12-03 14:20:00', 79.90),
(39, '2024-12-02 16:55:00', 42.00),
(40, '2024-12-01 17:25:00', 31.70),
(41, '2024-11-30 10:50:00', 55.00),
(42, '2024-11-29 18:30:00', 57.30),
(43, '2024-11-28 12:00:00', 45.40),
(44, '2024-11-27 15:40:00', 60.55),
(45, '2024-11-26 11:00:00', 73.10),
(46, '2024-11-25 14:30:00', 62.40),
(47, '2024-11-24 16:50:00', 64.20),
(48, '2024-11-23 13:15:00', 68.80),
(49, '2024-11-22 10:25:00', 75.90);

-- Data for Fournisseur Table
INSERT INTO Fournisseur (nom) 
VALUES 
('AéroPapier Fournitures'),
('Maquettes en Papier Inc.'),
('Papier Aviation Supplies'),
('AvionDesigns'),
('FlyCraft Models'),
('AéroMaquettes'),
('Papier Volant'),
('Fournitures Aviaires'),
('SkyModels'),
('Les Maquettes du Ciel'),
('Modèles Volants'),
('MaquettesPapier France'),
('PapierAérien'),
('AirplaneCraft'),
('SkyWing Models'),
('Papier AeroDesign'),
('PapierFlight'),
('Modélisme Aérien'),
('AirWing Supplies'),
('Fournitures Volantes'),
('AvionMaquette Co'),
('MaquettesCiel'),
('Papier Aéronautique'),
('SkyLine Model Kits'),
('AirPaper Crafting'),
('Fournitures Aéronautiques'),
('Papier Voleur'),
('Ciel Papillon'),
('ModelAirplane Supplies'),
('AeroKit PaperModels'),
('Papier de Vol'),
('AvionModèles'),
('Papier Aérien Designs'),
('AirplanePapier Craft'),
('Winged Paper Models'),
('Papier Avion Design'),
('Altitude Paper Models'),
('Papier AéroModèle'),
('SkyPlane Supplies'),
('Maquettes du Ciel Bleu'),
('PapierAiles'),
('Maquettes Papillon Ciel'),
('Maquettes à Voler'),
('PlaneCraft Paper Supplies'),
('Fournitures Maquettes Volantes'),
('Ailes Papier Aviation'),
('Maquette Volante Co'),
('Modèles Volants Aérien'),
('Papier et Ailes'),
('SkyFly PaperModels');

-- Data for lignes_commande 
INSERT INTO lignes_commande (id_produits, id_commandes, quantite) 
VALUES
(1, 1, 5),
(2, 1, 3),
(3, 1, 2),
(4, 2, 1),
(5, 2, 4),
(6, 2, 7),
(7, 3, 6),
(8, 3, 3),
(9, 3, 2),
(10, 4, 1),
(1, 4, 10),
(2, 4, 5),
(3, 5, 2),
(4, 5, 3),
(5, 5, 8),
(6, 1, 4),
(7, 1, 3),
(8, 2, 2),
(9, 2, 6),
(10, 3, 7),
(1, 3, 5),
(2, 3, 4),
(3, 4, 9),
(4, 4, 6),
(5, 5, 2),
(6, 5, 1),
(7, 2, 3),
(8, 2, 8),
(9, 1, 1),
(10, 1, 7),
(1, 2, 4),
(2, 3, 9),
(3, 4, 7),
(4, 5, 2),
(5, 1, 6),
(6, 3, 8),
(7, 4, 5),
(8, 5, 3),
(9, 4, 2),
(10, 5, 6),
(1, 5, 3),
(2, 5, 8),
(3, 2, 4),
(4, 3, 6),
(5, 4, 2);

-- Data for Produits Table 
INSERT INTO Produits (nom, reference_produit, prix_unitaire, quantite_stock, id_categorie) 
VALUES 
('Maquette Avion Concorde', 'REF-AV-CONC', 19.99, 50, 1),
('Maquette Avion Boeing 747', 'REF-AV-B747', 22.50, 40, 1),
('Maquette Avion Airbus A380', 'REF-AV-A380', 25.00, 30, 1),
('Maquette Avion Spitfire', 'REF-AV-SPIT', 18.00, 60, 1),
('Maquette Avion F-16', 'REF-AV-F16', 21.99, 25, 1),
('Maquette Avion Mirage 2000', 'REF-AV-MIR2000', 23.50, 45, 1),
('Maquette Avion Lockheed Martin F-22', 'REF-AV-F22', 28.00, 35, 1),
('Maquette Avion Boeing 737', 'REF-AV-B737', 19.50, 55, 1),
('Maquette Avion Cessna 172', 'REF-AV-CESSNA172', 15.00, 70, 1),
('Maquette Avion Piper Cub', 'REF-AV-PIPER', 12.00, 80, 1),
('Maquette Avion A-10 Thunderbolt', 'REF-AV-A10', 24.99, 60, 1),
('Maquette Avion Stealth Bomber', 'REF-AV-STEALTH', 30.00, 40, 1),
('Maquette Avion F/A-18 Hornet', 'REF-AV-FA18', 26.00, 30, 1),
('Maquette Avion Antonov AN-225', 'REF-AV-AN225', 35.00, 15, 1),
('Maquette Avion Boeing 787 Dreamliner', 'REF-AV-B787', 27.50, 20, 1),
('Maquette Avion Tupolev Tu-154', 'REF-AV-TU154', 19.75, 55, 1),
('Maquette Avion Hawker Hurricane', 'REF-AV-HAWKER', 17.00, 50, 1),
('Maquette Avion Avro Lancaster', 'REF-AV-LANCASTER', 20.00, 45, 1),
('Maquette Avion Boeing B-17 Flying Fortress', 'REF-AV-B17', 25.50, 60, 1),
('Maquette Avion Messerschmitt Bf 109', 'REF-AV-MB109', 22.00, 35, 1),
('Maquette Avion Douglas DC-3', 'REF-AV-DC3', 18.50, 75, 1),
('Maquette Avion Boeing 707', 'REF-AV-B707', 21.00, 40, 1),
('Maquette Avion McDonnell Douglas MD-80', 'REF-AV-MD80', 20.00, 65, 1),
('Maquette Avion Airbus A320', 'REF-AV-A320', 23.99, 50, 1),
('Maquette Avion Focke-Wulf Fw 190', 'REF-AV-FW190', 21.50, 55, 1),
('Maquette Avion Boeing 757', 'REF-AV-B757', 24.00, 30, 1),
('Maquette Avion Boeing 737 MAX', 'REF-AV-B737MAX', 27.00, 40, 1),
('Maquette Avion Lockheed L-1049 Super Constellation', 'REF-AV-L1049', 28.50, 25, 1),
('Maquette Avion Airbus A330', 'REF-AV-A330', 29.99, 35, 1),
('Maquette Avion Lockheed C-130 Hercules', 'REF-AV-C130', 31.00, 20, 1),
('Maquette Avion Concorde 2', 'REF-AV-CONC2', 21.50, 40, 1),
('Maquette Avion Boeing 767', 'REF-AV-B767', 23.75, 45, 1),
('Maquette Avion Sukhoi Su-27', 'REF-AV-SU27', 29.50, 50, 1),
('Maquette Avion Airbus A340', 'REF-AV-A340', 26.00, 55, 1),
('Maquette Avion Saab JAS 39 Gripen', 'REF-AV-GRIPEN', 22.00, 60, 1),
('Maquette Avion Boeing 757 Cargo', 'REF-AV-B757C', 30.50, 20, 1),
('Maquette Avion Fokker 100', 'REF-AV-FOKKER100', 18.75, 70, 1),
('Maquette Avion Boeing 737-800', 'REF-AV-B737800', 21.99, 65, 1),
('Maquette Avion Dassault Rafale', 'REF-AV-RAF', 32.00, 30, 1),
('Maquette Avion Sukhoi Superjet 100', 'REF-AV-SU100', 24.50, 40, 1),
('Maquette Avion Boeing 747 Freighter', 'REF-AV-B747F', 29.00, 50, 1),
('Maquette Avion Fokker 50', 'REF-AV-FOKKER50', 17.25, 60, 1),
('Maquette Avion Airbus A321', 'REF-AV-A321', 25.00, 45, 1),
('Maquette Avion Boeing 737-200', 'REF-AV-B737200', 19.99, 80, 1),
('Maquette Avion Boeing 727', 'REF-AV-B727', 22.50, 30, 1),
('Maquette Avion Lockheed Martin C-5 Galaxy', 'REF-AV-C5GALAXY', 38.00, 15, 1),
('Maquette Avion Antonov AN-124', 'REF-AV-AN124', 36.50, 10, 1),
('Maquette Avion Airbus A380 Cargo', 'REF-AV-A380C', 33.00, 20, 1),
('Maquette Avion Boeing 777', 'REF-AV-B777', 28.99, 40, 1),
('Maquette Avion Saab 340', 'REF-AV-SAAB340', 16.00, 70, 1),
('Maquette Avion Boeing 737 MAX 9', 'REF-AV-B737MAX9', 26.50, 30, 1),
('Maquette Avion Airbus A350', 'REF-AV-A350', 31.00, 25, 1),
('Maquette Avion F-15 Eagle', 'REF-AV-F15', 27.50, 40, 1),
('Maquette Avion Boeing 787-9', 'REF-AV-B7879', 32.50, 35, 1),
('Maquette Avion Boeing 767-300ER', 'REF-AV-B767300ER', 25.99, 50, 1),
('Maquette Avion Airbus A310', 'REF-AV-A310', 24.00, 60, 1);

-- Data for produits_fournisseur 
INSERT INTO produits_fournisseur (id_produits, id_fournisseur) 
VALUES 
(1, 1),
(2, 1),
(3, 1),
(4, 1),
(5, 1),
(6, 1),
(7, 1),
(8, 1),
(9, 1),
(10, 1),
(11, 2),
(12, 2),
(13, 2),
(14, 2),
(15, 2),
(16, 2),
(17, 2),
(18, 2),
(19, 2),
(20, 2),
(21, 3),
(22, 3),
(23, 3),
(24, 3),
(25, 3),
(26, 3),
(27, 3),
(28, 3),
(29, 3),
(30, 3),
(31, 4),
(32, 4),
(33, 4),
(34, 4),
(35, 4),
(36, 4),
(37, 4),
(38, 4),
(39, 4),
(40, 4),
(41, 5),
(42, 5),
(43, 5),
(44, 5),
(45, 5),
(46, 5),
(47, 5),
(48, 5),
(49, 5);











