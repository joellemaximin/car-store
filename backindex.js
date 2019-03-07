const fs = require('fs');
const sqlite3 = require('sqlite3').verbose();
const express = require('express');
var app = express();
const dbFile = 'back.db';
const db = new sqlite3.Database(dbFile);
const cors =require('cors');

app.use(cors());

db.serialize( ()=> {
   //if (!fs.existsSync(dbFile)){
        db.run('CREATE TABLE car (car_id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, price INTEGER, description VACHAR(200), img TEXT)');
        db.run('CREATE TABLE user (user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_first_name TEXT, user_last_name TEXT, user_email TEXT, birthday TEXT)');
        db.run('CREATE TABLE session (session_id INTEGER PRIMARY KEY AUTOINCREMENT, session_first_name TEXT, session_last_name TEXT, session_email TEXT, user_id INTEGER, FOREIGN KEY(user_id) REFERENCES users(id))');
        db.run('CREATE TABLE commande (commande_id INTEGER PRIMARY KEY AUTOINCREMENT, commande_first_name TEXT, commande_last_name TEXT, commande_email TEXT, car_id INTEGER, user_id INTEGER, FOREIGN KEY(car_id) REFERENCES cars(id), FOREIGN KEY(user_id) REFERENCES users(id))');
        // }
    //Cars running
    db.run('INSERT INTO car (name, price, description, img) VALUES (?, ?, ?, ?)', "passat", 20000, "Something about the car", "images/passat.png");
    db.run('INSERT INTO car (name, price, description, img) VALUES (?, ?, ?, ?)', "nouvelleTiguan", 25000, "Something about the car", "images/passat.png");
    db.run('INSERT INTO car (name, price, description, img) VALUES (?, ?, ?, ?)', "nouvelleTouareg", 23000, "Something about the car", "images/passat.png");
    db.run('INSERT INTO car (name, price, description, img) VALUES (?, ?, ?, ?)', "nouvellePolo", 30000, "Something about the car", "images/passat.png");
    db.run('INSERT INTO car (name, price, description, img) VALUES (?, ?, ?, ?)', "Golf", 30000, "Something about the car", "images/passat.png");
    db.run('INSERT INTO car (name, price, description, img) VALUES (?, ?, ?, ?)', "T-roc", 55000, "Something about the car", "images/passat.png");
    db.run('INSERT INTO car (name, price, description, img) VALUES (?, ?, ?, ?)', "Sam", 60000, "Something about the car", "images/passat.png");

    //users running
    db.run('INSERT INTO user (user_first_name, user_last_name, user_email, birthday) VALUES (?, ?, ?, ?)', "Sam", "Johns", "sma@johns.email", "23/05/1993");
    db.run('INSERT INTO user (user_first_name, user_last_name, user_email, birthday) VALUES (?, ?, ?, ?)', "Elow", "Elsa", "elow@johns.email", "23/05/1993");
    db.run('INSERT INTO user (user_first_name, user_last_name, user_email, birthday) VALUES (?, ?, ?, ?)', "Jason", "Steevens", "jason@johns.email", "23/05/1993");
    db.run('INSERT INTO user (user_first_name, user_last_name, user_email, birthday) VALUES (?, ?, ?, ?)', "Alex", "Kriss", "sma@kriss.email", "23/05/1993");
    db.run('INSERT INTO user (user_first_name, user_last_name, user_email, birthday) VALUES (?, ?, ?, ?)', "Dave", "Manderson", "elow@manderson.email", "23/05/1993");
    db.run('INSERT INTO user (user_first_name, user_last_name, user_email, birthday) VALUES (?, ?, ?, ?)', "Regis", "Fearson", "jason@fearson.email", "23/05/1993");

    //sessions running
    db.run('INSERT INTO session (session_first_name, session_last_name, session_email, user_id) VALUES (?, ?, ?, ?)', "Sam", "Johns", "sma@johns.email", 1);
    db.run('INSERT INTO session (session_first_name, session_last_name, session_email, user_id) VALUES (?, ?, ?, ?)', "Elow", "Elsa", "elow@johns.email", 2);
    db.run('INSERT INTO session (session_first_name, session_last_name, session_email, user_id) VALUES (?, ?, ?, ?)', "Jason", "Steevens", "jason@johns.email", 3);
    db.run('INSERT INTO session (session_first_name, session_last_name, session_email, user_id) VALUES (?, ?, ?, ?)', "Alex", "Kriss", "sma@kriss.email", 4);
    db.run('INSERT INTO session (session_first_name, session_last_name, session_email, user_id) VALUES (?, ?, ?, ?)', "Dave", "Manderson", "elow@manderson.email", 5);
    db.run('INSERT INTO session (session_first_name, session_last_name, session_email, user_id) VALUES (?, ?, ?, ?)', "Regis", "Fearson", "jason@fearson.email", 6);

    //commandes running
    db.run('INSERT INTO commande (user_id, commande_first_name, commande_last_name, commande_email, car_id) VALUES (?, ?, ?, ?, ?)', 1, "Sam", "Johns", "sma@johns.email", 1);
    db.run('INSERT INTO commande (user_id, commande_first_name, commande_last_name, commande_email, car_id) VALUES (?, ?, ?, ?, ?)', 2, "Elow", "Elsa", "elow@johns.email", 2);
    db.run('INSERT INTO commande (user_id, commande_first_name, commande_last_name, commande_email, car_id) VALUES (?, ?, ?, ?, ?)', 3, "Jason", "Steevens", "jason@johns.email", 3);
    db.run('INSERT INTO commande (user_id, commande_first_name, commande_last_name, commande_email, car_id) VALUES (?, ?, ?, ?, ?)', 4, "Alex", "Kriss", "sma@kriss.email", 4);
    db.run('INSERT INTO commande (user_id, commande_first_name, commande_last_name, commande_email, car_id) VALUES (?, ?, ?, ?, ?)', 5, "Dave", "Manderson", "elow@manderson.email", 5);
    db.run('INSERT INTO commande (user_id, commande_first_name, commande_last_name, commande_email, car_id) VALUES (?, ?, ?, ?, ?)', 6, "Regis", "Fearson", "jason@fearson.email", 6);


    //one to many
    /*app.get('/',function(req,res){
        db.all('SELECT * FROM car NATURAL JOIN user NATURAL JOIN session', function(error, data){
            res.send(data);
        });
    });

    //one to one
    app.get('/',function(req,res){
        db.all('SELECT * FROM car NATURAL JOIN user', function(error, data){
            res.send(data);
        });
    });*/

    //je veux les prénoms de chaque users qui a COMMANDER une VOITURE
    /*app.get('/',function(req,res){
        db.all('SELECT user_first_name, name FROM user NATURAL JOIN commande NATURAL JOIN car', function(error, data){
            res.send(data);
        });
    });*/

    //
    /*app.get('/',function(req,res){
        db.all('SELECT user_first_name, price FROM user CROSS JOIN commande NATURAL JOIN car', function(error, data){
            res.send(data);
        });
    });*/

    //je veux prénom et prix et nom de voiture
    app.get('/', function(req,res){
        db.all('SELECT user_first_name, price, name FROM user NATURAL JOIN commande NATURAL JOIN car WHERE price > 35000', function(error, data){
            res.send(data);
        });
    });

});




app.listen(3000, function(error){
    if(!error) console.log("everything works");
});