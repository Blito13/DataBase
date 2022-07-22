const {Customers} = require("../db");
const customers = require("../mok/customers");
const { Router } = require("express");
const axios = require ('axios');
const {Recipe , Diet} = require ('../db')
const router = Router();

const getAll = () => Promise.resolve(customers); 

module.exports =
  getAll

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
