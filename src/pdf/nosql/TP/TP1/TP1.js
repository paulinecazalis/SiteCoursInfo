TP1 – Prise en main de mongoDB

CAZALIS Pauline

1)	Installation et démarrage de mongoDB

a)	Lancer le serveur mongoDB
b)	Lancer le shell mongo
c)	Arreter le serveur mongoDB
d)	Fermer le shell
e)	Relancer le serveur et le shell


2)	Création d’une base de données

a)	Créer une base de données nommée bdTest
Commande : use bdTest

b)	Afficher les bases de données de votre serveur mongodb. Que constatez-vous ?
Commande : show dbs
La base de données ne s’affiche pas car elle est vide

c)	Créer une collection nommée magasin
Commande : db.createCollection(« magasin »)

d)	Afficher la liste des collections de bdTest
Commande : show collections
La base de données bdTest s’affiche


3)	Insertion de données

a)	Exemple {
  		id: 1,
 	 	Libelle: "Chaussure",
 		Rayon: "chaussure"
}

Une base de données NoSQL orientée document permet la manipulation de données complexe.


b)	Ajouter dans votre base de données la liste des produits donnés en annexe



db.magasin.insert(

{
  "_id": 1,
  "libelle": "Chaussure XX",
  "rayon": "chaussure",
  "stock": [
    {"pointure": 40, "qStock": 5},
    {"pointure": 41, "qStock": 3}
  ]
},
{
  "_id": 2,
  "libelle": "Pantalon XZZ",
  "rayon": "vetement",
  "stock": [
            {"taille": "S", "qStock": 10},
            {"taille": "M", "qStock": 4},
            {"taille": "L", "qStock": 15}
           ]
},
{
  "_id": 3,
  "libelle": "Tennis WW",
  "rayon": "chaussure",
  "stock": [
            {"pointure": 43, "qStock": 0}
          ]
},
{
  "_id": 4,
  "libelle": "Casquette BB",
  "rayon": "accessoire",
  "stock": [
            {"taille": "U", "qStock": 50}
          ]
},
{
  "_id": 5,
  "libelle": "Sac a main VW",
  "rayon": "accessoire",
  "stock": [
            {"taille": "U", "qStock": 0}
          ]
}

)

4)	Interrogation

a)	Obtenir la liste des produits
Commande : db.magasin.find()

b) Obtenir le nombre de produits
Commande : db.magasin.count()

c) Obtenir la liste des produits du rayon chaussure
Commande : db.magasin.find({"rayon": "chaussure"})

d) Obtenir le libellé des produits du rayon chaussure
Commande : db.magasin.find({"rayon": "chaussure"},{"libelle": 1, "_id": 0})

e) Compter la liste des articles du rayon accessoire
Commande : db.magasin.find({"rayon": "accessoire"}).count()

f) Obtenir le libellé et le rayon des produits en rupture de stock
Commande : db.magasin.find({"stock.qStock": 0},{"libelle": 1, "rayon": 1,"_id": 0})

5) Modification
a)
