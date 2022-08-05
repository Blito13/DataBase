const {Customers } = require("../db");
const customers = require("../mok/customers");
const { Router } = require("express");
const excelToJson = require('convert-excel-to-json');
const order = require('C:\\Users\\Cerrajeria\\Desktop\\IMG\\DataBase\\blitz\\api\\src\\mok\\orders.json')
/* console.log(order) */
const router = Router();

/* const vill = require('../utils') */
const XLSX = require("xlsx");
const multer = require ("multer")
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline) 
/* const parseFile = require('./helpers'); */
//https://www.npmjs.com/package/xlsx#common-spreadsheet-format ---XLSX DOCS.
/* var multer = require('multer')({
  dest: '../public/uploads'
}) */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/files');
  },
  filename: function (req, file, cb) {
    cb(null, 'sample-file.xlsx');
  },
 });
  
 const upload = multer({ storage: storage }).single('file');
 router.post('/', async (req, res) => {
  await upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
 });
 
/* router.post('/', upload.single("file") , function (req, res, next) {
  const {file,
  body :{name}} = req; */
    
  // req.file es el `avatar` del archivo
  // req.body tendrá los campos textuales, en caso de haber alguno.

/* var upload = multer({ storage: storage }).single('file')
router.post('/customers',function(req, res) {
     const {file } = req.body
     console.log(file)
  upload(req, res, function (err) {
         if (err instanceof multer.MulterError) {
             return res.status(500).json(err)
         } else if (err) {
             return res.status(500).json(err)
         }
    return res.status(200).send(req.file)

  })

}); */

/* router.get ('/' , function ( req , res){

  
const exelPath = req.body;
console.log((exelPath)) */
  /* for (c in exelPath){
    letter = c
    
  } */
 /*  res.send(exelPath) */
  const exel =   XLSX.readFile("C:\\Users\\Cerrajeria\\Desktop\\IMG\\DataBase\\blitz\\api\\public\\files\\sample-file.xlsx",  )
  const pageNum =   exel.SheetNames; //nombre de hojas que compone nuestro exel
  let data  =   XLSX.utils.sheet_to_json(exel.Sheets[pageNum[0]] , {raw :false}) ;
  console.log(data)

/* }) */

module.exports = router 
