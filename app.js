const express = require("express");
const app = express();
const PORT = 3000;

// UTILISATION DES MIDDLEWARE A L'AIDE DE LA METHODE USE()
app.use("/public",express.static("public"))


// DECLARATION TEMPLATE ENGINE
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/movies", (req,res)=>{
    res.send("Welcome to the movie page")
})

// FAIRE ATTENTION A L'ORDRE DES ROUTES
app.get("/movies/add", (req,res)=>{
    res.send("Prochainement des trucs ici les bougs");
})

app.get("/movies/:id", (req,res)=>{
    const id = req.params.id;
    res.send(`film numéro ${id}`);
})


// La méthode "Get" prend deux parametres le premier sera le chemin dans l'url et le deuxieme sera un callback qui dispose de la requete et de la reponse
app.get("/", (req,res)=>{

    // Une fois que la methode "get" est faite il faut une réponse associé et ici on envoie ("send") le string "hello world" 
    // res.send("Hello world")
    res.render("Index");
});

// On écoute sur le port de l'application
app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
});