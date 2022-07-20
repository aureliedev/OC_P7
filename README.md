# Installation de Node.js

Pour faire fonctionner le projet, installé Node.js

lien vers le site node.js: https://nodejs.org/en/

# Creer votre base de données

Rendez vous sur: https://www.mongodb.com/fr-fr

- Créer votre cluster
- Télécharger mongoDB compass
- Importer les données qu'on vous a fourni pour le projet
- Documentation import/export MongoDB Compass sur: https://www.mongodb.com/docs/compass/current/import-export/

# Lancer le backend du projet

- Ouvrez le dossier dans votre IDE (visual studio code)
- Rendez vous dans backend/config/ Puis renommer le fichier '.env-exemple par '.env' (SANS LES GUILLEMETS DE DEBUT ET DE FIN)
- Complétez dans le fichier votre cluster nommé 'DB_NAME'
- Faites pareil avec TOKEN_SECRET='clédetokensouhaitée'
- Ouvrez votre terminal sous visual studio code
- Rendez vous dans le sous dossier 'backend' via la commande 'cd backend' depuis votre terminal
- Taper 'npm install' depuis votre terminal pour installé le dossier 'node_modules' dans le projet
- Taper 'npm start' pour demarrer le projet, le message 'Connexion à MongoDB réussie !' apparaitra.
- changer 'false' par 'true' (SANS LES GUILLEMETS DE DEBUT ET DE FIN) dans la base de donnée a la ligne isAdmin pour avoir les droits administrateur


# Lancer le frontend du projet

- Ouvrez un nouveau terminal sous visual studio code
- Rendez vous dans le sous dossier 'frontend' via la commande 'cd frontend' depuis votre terminal
- Taper 'npm install' depuis votre terminal pour installé le dossier 'node_modules' dans le projet
- Taper 'npm start' pour demarrer le projet

# a noter ATTENTION !!!

Si vous rencontrer une erreur lors du téléchargement d'une image pendant la publication d'un post, je vous invite à vous rendre: 'backend/node_modules/fs-temp/lib/write-stream.js':

- A la ligne 6 remplacer le contenu 'WriteStream.call(this, null, options)' par 'WriteStream.call(this, '', options)' (SANS LES GUILLEMETS DE DEBUT ET DE FIN)
N'oublier pas d'enregistrer les modifications !
