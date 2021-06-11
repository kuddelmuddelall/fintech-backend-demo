const customer = require("./customer");
const express = require("express");
const bodyParser = require("body-parser"); //parse data from body
const cors = require("cors"); //to allow client and server to be on same machine

var app = express();
app.use(bodyParser.json());
app.use(cors()); //see cors above
 

// parse in json format
app.use(customer.router);

app.listen(3000);