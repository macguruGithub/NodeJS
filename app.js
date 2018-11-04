var express = require("express");
var app = express();
var tempConvertController = require("./sourceFiles/controller/tempconvert"); 
var mockRestController = require("./sourceFiles/controller/mockRestController");


app.use("/restService",tempConvertController,mockRestController);




var server = app.listen(8082, () => {
    console.log("Running port is " + server.address().port);
})