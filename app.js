const express = require("express");
const app = express();
const bodyParser = require("body-parser")

const PORT = 3000;
let frenchMovies = [];

// UTILISATION DES MIDDLEWARE A L'AIDE DE LA METHODE USE()
app.use("/public",express.static("public"))
// app.use(bodyParser.urlencoded({extended:false}))

// DECLARATION TEMPLATE ENGINE
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/movies", (req,res)=>{
    // res.send("Welcome to the movie page")
    const title = "Films francais de y'a pas lgt mon reuf"
    frenchMovies = [
        {title : "Le fabuleux destin", year: 2001},
        {title : "Terminator", year: 1999},
        {title : "Saw", year: 2008},
        {title : "Le diner de cons", year: 2057}
    ]
    res.render("movies", {movies:frenchMovies, title:title})
})

const urlencodedParser = bodyParser.urlencoded({extended:false});


app.post("/movies",urlencodedParser, (req,res)=>{
    console.log("Le titre est : ",req.body.movietitle);
    console.log("L'année est : ",req.body.movieyear);
    const newMovie = {title : req.body.movietitle, year : parseInt(req.body.movieyear)};
    frenchMovies = [...frenchMovies,newMovie];
    // frenchMovies.push(newMovie);

    res.sendStatus(201);
})

// FAIRE ATTENTION A L'ORDRE DES ROUTES
app.get("/movies/add", (req,res)=>{
    // res.send("Prochainement des trucs ici les bougs");
    res.render("add")
})

// app.get("/movies-details", (req,res)=>{
//     // res.send("Prochainement des trucs ici les bougs");
//     res.render("details")
// })

app.get("/movies/:id", (req,res)=>{
    const id = req.params.id;
    // res.send(`film numéro ${id}`);
    res.render("details", {movieid:id});
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