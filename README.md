# Installation de Node.js

Pour faire fonctionner le projet, installé Node.js

lien vers le site node.js: https://nodejs.org/en/

# Creer votre base de données

Rendez vous sur: https://www.mongodb.com/fr-fr

- Créer votre cluster
- Importer (au besoin) les données qu'on vous a fourni pour le projet

# Lancer le backend du projet

- Ouvrez le dossier dans votre IDE (visual studio code)
- Rendez vous dans backend/config/ Puis renommer le fichier '.env-exemple par '.env' (SANS LES GUILLEMETS DE DEBUT ET DE FIN)
- Complétez dans le fichier de votre cluster 'DB_NAME'
- Faites pareil avec TOKEN_SECRET='clédetokensouhaitée'
- Ouvrez votre terminal sous visual studio code
- Rendez vous dans le sous dossier 'backend' via la commande 'cd backend' depuis votre terminal
- Taper 'npm install' depuis votre terminal pour installé le dossier 'node_modules' dans le projet
- Taper 'npm start' pour demarrer le projet, le message 'Connexion à MongoDB réussie !' apparaitra.


# Lancer le frontend du projet

- Ouvrez un nouveau terminal sous visual studio code
- Rendez vous dans le sous dossier 'frontend' via la commande 'cd frontend' depuis votre terminal
- Taper 'npm install' depuis votre terminal pour installé le dossier 'node_modules' dans le projet
- Taper 'npm start' pour demarrer le projet