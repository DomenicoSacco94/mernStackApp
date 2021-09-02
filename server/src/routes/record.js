const ObjectId = require('mongodb').ObjectId;

const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

const {collectionName, dbName, recordName} = require("../../../client/src/config/dbConfig.json")

const defaultData = require("../../../client/src/config/models/data")

const properties =  Object.keys(defaultData);

const dataStructure = (req) => {
    const dataStructure = {}
    properties.forEach(
        property=> Object.assign(dataStructure,{[property]: req.body[property]})
    )
    return dataStructure
}


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
    db_connect.collection(collectionName).insertOne(myobj, function (err, obj) {
        if (err) throw err;
        res.json(obj);
    });
    console.log("1 document created");
    return res;
});

// This section will help you update a record by id.
recordRoutes.route(`/${recordName}/update/:id`).post(function (req, res) {
    let db_connect = dbo.getDb(dbName);
    let myquery = { _id: new ObjectId(req.params.id) };
    let newvalues = {
        $set: dataStructure(req),
    };
    db_connect
        .collection(collectionName)
        .updateOne(myquery, newvalues, function (err, obj) {
            if (err) throw err;
            res.json(obj);
        });
    console.log("1 document updated");
    return res;
});

// This section will help you delete a record
recordRoutes.route(`/${recordName}/:id`).delete((req, res) => {
    let db_connect = dbo.getDb(dbName);
    const myquery = { _id: new ObjectId(req.params.id) };
    db_connect.collection(collectionName
    ).deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        res.json(obj);
    });
    console.log("1 document deleted");
    return res;
});

module.exports = recordRoutes;