const {Customers } = require("../db");
const customers = require("../mok/customers");
const { Router } = require("express");
const excelToJson = require('convert-excel-to-json');
const order = require('C:\\Users\\Cerrajeria\\Desktop\\IMG\\blitz\\api\\src\\mok\\orders.json')
console.log(order)
const router = Router();
const fs = require('fs');
/* const vill = require('../utils') */
const XLSX = require("xlsx");
const { json, raw } = require("body-parser");
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
const BlinBlin = () => {
  const exel = XLSX.readFile("C:\\Users\\Cerrajeria\\Desktop\\IMG\\blitz\\api\\src\\utils\\sss.xlsx"  )
  const pageNum =  exel.SheetNames; //nombre de hojas que compone nuestro exel
  var liviu = 'feCHA'
  let data  = XLSX.utils.sheet_add_aoa(exel.Sheets[pageNum[0]] ,[[liviu]],{ origin: "A1", }) ;
  let datE  = XLSX.utils.sheet_to_csv(exel.Sheets[pageNum[0]] ,/* [[liviu]],{ origin: "EJ30" } */) ;
    

/* console.log(Object.assign(data)) */
/* console.log(oveja) */
/* const vels = data.map(e => {

}) */
/* const vels =  Object.entries(data)  */
   console.log(datE)
  

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
