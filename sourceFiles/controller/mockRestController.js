var express = require("express");
var router = express.Router();
var Client = require("node-rest-client").Client;
var client = new Client();
var util = require("util");

//var mockRestClient = require("../restClient/mockRestClient");


router.get("/restmock", (req,res) =>{
    client.get("http://localhost:8081/restMockService/getDetails",(data,response)=>{
        console.log(data);
    res.send(data);
    })
})

module.exports = router;