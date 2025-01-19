# aeromodel-db

## Description du Projet
L'API Aeromodel est un projet développé dans le cadre scolaire, conçu pour gérer une application de gestion de catégories, clients, commandes, fournisseurs, produits et lignes de commande. Cette API RESTful utilise Express pour la logique côté serveur et MySQL pour la gestion de la base de données.

## Installation et lancement du serveur
- Avant de commencer, créez un fichier .env à la racine du projet et ajoutez les variables suivantes (en fonction de votre configuration locale) :
```
DB_HOST=localhost
DB_USERNAME=root
DB_PASSWORD=0310Larry
DB_DATABASE=Aeromodel
DB_PORT=3306

```

- Exécutez la commande suivante pour installer toutes les dépendances nécessaires :
```
npm install

```
- Avant de lancer l'API, vous devez d'abord établir la connexion à la base de données. Pour cela, exécutez la commande suivante pour exécuter db.js :
```
node db.js
```

- Une fois la connexion à la base de données établie, vous pouvez démarrer le serveur API en exécutant le fichier index.js avec la commande suivante :
```
node index.js
```

- Une fois le serveur lancé, vous pouvez accéder à l'API à l'adresse :
```
http://localhost:3001/
```

- La documentation de l'API est disponible à l'adresse :
```
http://localhost:3001/api-docs
```



