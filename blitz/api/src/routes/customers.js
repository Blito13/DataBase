const {Customers } = require("../db");
const customers = require("../mok/customers");
const { Router } = require("express");
const excelToJson = require('convert-excel-to-json');
const order = require('C:\\Users\\Cerrajeria\\Desktop\\IMG\\DataBase\\blitz\\api\\src\\mok\\orders.json')

const router = Router();
const XLSX = require("xlsx");
const multer = require ("multer")
const fs = require("fs");
const { promisify } = require("util");
const pipeline = promisify(require("stream").pipeline) 

//https://www.npmjs.com/package/xlsx#common-spreadsheet-format ---XLSX DOCS.

const getExel = async  ( req ,res )=>{

  const exel =   await XLSX.readFile("C:\\Users\\Cerrajeria\\Desktop\\IMG\\DataBase\\blitz\\api\\public\\files\\sample-file.xlsx",  )
  const pageNum =   await exel.SheetNames; //nombre de hojas que compone nuestro exel
  let data  =   await XLSX.utils.sheet_to_json(exel.Sheets[pageNum[0]] , {raw :false}) ;

res.json(data)
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/files');
  },
  filename: function (req, file, cb) {
    cb(null, 'sample-file.xlsx');
  },
 });
  
 const upload = multer({ storage: storage }).single('file');
 const postFile = async (req, res) => {
  await upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    } 
    
    
    return res.status(200).send(req.file);
  });
 };
 
 
router.get("/", getExel);
router.post("/", postFile);
module.exports = router 
