const { Router } = require("express");

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
/* const recipes = require('./Routes.js'); */
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
/* 
MiddleWares */
/* router.use('/recipes' ,recipeRoute);
router.use('/diets' , dietsRoute); */

const customers = require('./customers');
const orders = require('./orders');
//const ventures = require('./ventures');
//const products = require('./products');

// Configurar los routers

router.use('/customers', customers)
router.use('/orders', orders)
//router.use('/ventures', ventures)
//router.use('/products', products)




/* router.use("/recipes", getApiInfo); */
/* router.use("/recipes/:idRecipe", searchId);
router.use("/types", getTypes); */ 
/* router.use("/recipe", getRecipe); */
/* router.use('/recipes', recipes); */

module.exports = router;    