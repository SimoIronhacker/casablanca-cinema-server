const express = require("express");
const router = new express.Router();
const uploader = require('../config/cloudinary')
const articleModel = require("../models/Article");


// lire tous les articles (get)

router.get("/article", async (req, res, next) => {
    try {
        console.log(typeof req.query)
        console.log(req.query)
        console.log(req.query.category)
        // {category: "movies"} // bien sûr c'est pas tjs movies, ça peut être music | movies | culture
        console.log({category: req.query.category})
        console.log("-----");

        const currentCategory = req.query.category;
        let filter;
        if( currentCategory === undefined ) {
            filter = {};
        } else {
            filter = { category : currentCategory }
        }
        
        
        // if req.query.category est undefined on veut trouver tous les articles => filter sera un object vide
        
        // sinon on veut trouver les article de la category en cours => filter sera un object ressemblant {category: 'music'} ou {category: "movies"}
        const articles = await articleModel.find(filter).populate("author");
        console.log("article", articles);
        res.status(200).json(articles);
    }catch(err) {
        next(err);
    }
});

// créer un article (post)
router.post("/article", uploader.single('images'), async (req, res, next) => {
    try {
        const {description, title, category} = req.body
        let images=null
        console.log(req.file)
        if (req.file) {
            images = req.file.path
        }
        const newArticle = await articleModel.create({
            title, description, category, images
        });
        res.status(200).json(newArticle);
       }catch (err) {
           next(err);
       }
});

// lire un article GET
router.get("/article/:id", async (req, res, next) => {
    try {
        const article = await articleModel.findById(req.params.id);
        res.status(200).json(article);
    } catch(err) {
        next(err);
    }
    
});


// supprimer un article (delete)
router.delete("/article/:id", async (req, res, next) => {
    try {
        const deleteArticle = await articleModel.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteArticle);
    } catch (err) {
        next(err);
    }
});


// mettre à jour un article (update)
router.patch("/article/:id", async (req, res, next) => {
    try {
        const updateArticle = await articleModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updateArticle);
    } catch (err) {
        next(err);
    }
   

});

module.exports = router;

// dans les routes créer router article

// créer un article (post)
// lire tous les articles (get)
// lire un article GET
// supprimer un article (delete)
// mettre à jour un article (update)

// ensuite =>

// tester les routes avec Postman