var express = require("express");
var router = express.Router();

// import controllers
const orders = require("../mok/orders");
const {Orders} = require("../db");
// C.R.U.D.
console.log(orders)

module.exports = router;