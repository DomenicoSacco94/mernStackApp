const ObjectId = require('mongodb').ObjectId;

const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

const dbName = "Cluster0"

const recordName = "news"

const collectionName = "newsCollection"

const dataStructure = (req) => ({
    creation_date: req.body.creation_date,
    modification_date: req.body.modification_date,
    title : req.body.title,
    content: req.body.content,
    image: req.body.image,
    categories: req.body.categories
});


recordRoutes.route(`/${recordName}/:id`).get(function (req, res) {
    let db_connect = dbo.getDb(dbName);
    db_connect
        .collection(collectionName)
        .find({_id: new ObjectId(req.params.id)})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result[0]);
        });
});

// This section will help you get a list of all the records.
recordRoutes.route(`/${recordName}`).get(function (req, res) {
    let db_connect = dbo.getDb(dbName);
    db_connect
        .collection(collectionName)
        .find({})
        .toArray(function (err, result) {
            if (err) throw err;
            res.json(result);
        });
});

// This section will help you create a new record.
recordRoutes.route(`/${recordName}/add`).post(function (req, res) {
    let db_connect = dbo.getDb(dbName);
    let myobj = dataStructure(req);
    db_connect.collection(collectionName).insertOne(myobj, function (err, res) {
        if (err) throw err;
    });
});

// This section will help you update a record by id.
recordRoutes.route(`/${recordName}/update/:id`).post(function (req, res) {
    let db_connect = dbo.getDb(dbName);
    let myquery = { id: req.body.id };
    let newvalues = {
        $set: dataStructure(req),
    };
    db_connect
        .collection(collectionName)
        .updateOne(myquery, newvalues, function (err, res) {
            if (err) throw err;
            console.log("1 document updated");
        });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, res) => {
    let db_connect = dbo.getDb(dbName);
    var myquery = { id: req.body.id };
    db_connect.collection(collectionName).deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
    });
});

module.exports = recordRoutes;