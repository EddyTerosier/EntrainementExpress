'use strict'

const express = require("express");
const app = express();
const PORT = 3000;

app.get("/movies", (req,res)=>{
    res.send("Welcome to the movie page")
})

// La méthode "Get" prend deux parametres le premier sera le chemin dans l'url et le deuxieme sera un callback qui dispose de la requete et de la reponse
app.get("/", (req,res)=>{

    // Une fois que la methode "get" est faite il faut une réponse associé et ici on envoie ("send") le string "hello world" 
    res.send("Hello world")
});

// On écoute sur le port de l'application
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});