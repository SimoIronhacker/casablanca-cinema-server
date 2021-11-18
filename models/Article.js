const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        enum: ["movies", "actor", "music", "culture"]
    },

    date: {
        type: Date,
        default: Date.now
    },

    description: {
        type: String,
        required: true,
    },

    images: {
        type: String,
    },

    author: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        //  required: true,
    },
 
});

const articleModel = mongoose.model("Article", articleSchema);

module.exports = articleModel;

// shéma v1 validé 
// créer le modèle
// exporter le modèle

// ensuite =>

// dans les routes créer router article
// créer un article (post)
// lire tous les articles (get)
// lire un article GET
// supprimer un article (delete)
// mettre à jour un article (update)

// ensuite =>

// tester les routes avec Postman