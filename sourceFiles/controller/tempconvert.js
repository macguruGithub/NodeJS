var express = require("express");
var router = express.Router();
var soapClientTemptCnvert = require("../soapClient/tempConvertClient");


router.get("/convertTemp1",async(req,res)=>{

    await soapClientTemptCnvert.celToFa(req.query.input)
    .then((result)=>{

        res.send(result);

    }).catch((e) =>{

    })
})


module.exports = router;