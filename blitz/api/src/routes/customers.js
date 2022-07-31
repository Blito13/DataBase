const {Customers } = require("../db");
const customers = require("../mok/customers");
const { Router } = require("express");
const excelToJson = require('convert-excel-to-json');
const order = require('C:\\Users\\Cerrajeria\\Desktop\\IMG\\DataBase\\blitz\\api\\src\\mok\\orders.json')
console.log(order)
const router = Router();
const fs = require('fs');
/* const vill = require('../utils') */
const XLSX = require("xlsx");
const { json, raw } = require("body-parser");
const { brotliCompress } = require("zlib");
/* id: "google-oauth2|112420871468081807642",
fullName: "Ariel Ventura",
billingAddress: "CL XX XX XX",
defaultShippingAddress: "CL XX XX XX",
country: "ARG",
phone: "888888888",
userType: "user", */


const getCust = async () =>{
  const newdata = []
  const customInfo =  await customers.map((e)=> {
    const customCreate =  {
      id :e.id,
      fullName : e.fullName,
      billingAddress : e.billingAddress,
      phone : e.phone,
      defaultShippingAddress : e.defaultShippingAddress,
      country : e.country,
      userType : e.userType     //nullviolations

    }
    newdata.push(customCreate) 
  })

    const count = await Customers.count();
    console.log(count , 'dax')
    if (count === 0) {
      try {
        const newType = await Customers.bulkCreate(newdata);
        console.log('Where are you Scooby Doo?')
        return(newType);
      } catch (error) {
        
        console.log(error , "bill");
      }
    } else {
     return(customers);
    }
}
//https://www.npmjs.com/package/xlsx#common-spreadsheet-format ---XLSX DOCS.
const BlinBlin = () => {
  const exel = XLSX.readFile("C:\\Users\\Cerrajeria\\Desktop\\IMG\\blitz\\api\\src\\utils\\Feria 67 (respuestas).xlsx" ,  )
  const pageNum =  exel.SheetNames; //nombre de hojas que compone nuestro exel
  var liviu = 'feCHA'
  

/*   let dati  = */ 
/*   let dati  = */// XLSX.utils.sheet_add_aoa(exel.Sheets[pageNum[0]] ,[["Combo-AlmaT-AmasoC"]],{ origin: "C1", }) ;
/*   let dati  = */// //XLSX.utils.sheet_add_aoa(exel.Sheets[pageNum[0]] ,[["Combo-AlmaT-AmasoC"]],{ origin: "C1", }) ;
/*   let dati  = */// XLSX.utils.sheet_add_aoa(exel.Sheets[pageNum[0]] ,[["Combo-AlmaT-AmasoC"]],{ origin: "C1", }) ;
  let data  = XLSX.utils.sheet_to_json(exel.Sheets[pageNum[0]] , {raw :false}) ;
  /* console.log(data) */
  var bort = []
  const productorxs={
   Aguaribay : [],
   AlmaToba :[],
   AmasoCriando:[],
   DeLaGra:[],
   MissAmapola:[],
   NonnaChiquita:[],
   SantaAntonia:[],
   Trapi:[],
   ZweetArtesanal:[],
   Ananda:[],
   Altoviaje:[],
   BeGero:[],
   Gourmex:[],
}


  data.map(e=>{
    for(let N in e){
      bort.push(N)
      
      /* console.log(`${N} : ${e[N]}`) */
     }
const vill = {
  fecha: e['Marca temporal'],
  correo : e["Direccion de correo electronico"],
 
}

  })
  /* console.log(bort) */
  bart = [...new Set(bort)] 
  console.log(bart)
  return bart

/* console.log(Object.assign(data)) */
/* console.log(oveja) */
/* const vels = data.map(e => {

}) */
/* const vels =  Object.entries(data)  */
   
  

    }
  





router.get ('/' , async ( req , res)=>{
  const values = await BlinBlin()
  ;
 /*  console.log(values) */
  res.send(values)
})

module.exports = router 
 /* const users = [ 
  {id: '1', fullName: 'User The First'},
  {id: '2', fullName: 'User The Second'}
];

const getAll = () => Promise.resolve(users);
const getById = (id) => Promise.resolve(users.find(u => u.id == id));

module.exports = {
  getById,
  getAll
};
const handleResponse = (res, data) => res.status(200).send(data);
const handleError = (res, err) => res.status(500).send(err);


// routes/users.js
router.get('/', function(req, res) {
  userService.getAll()
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
});
 
router.get('/:id', function(req, res) {
  userService.getById(req.params.id)
    .then(data => handleResponse(res, data))
    .catch(err => handleError(res, err));
}); */
