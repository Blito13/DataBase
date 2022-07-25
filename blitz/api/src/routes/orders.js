
const {Orders} = require ("../db")
const orders = require ("../mok/orders");
const { Router } = require("express");
const router = Router();
/* {
    orderDate: "2022-06-02T04:33:12.000Z",
    amount: 11500,
    shippingAddress: "CL XX XX XX",
    orderEmail: "dianacorts@gmail.com",
    orderStatus: "completed",
    customerId: "google-oauth2|100810497740092440206",
  }, */

const getOrders = async () =>{
  const newdata = []
  const orderInfo =  await orders.map((e)=> {
    const orderCreate =  {
      orderDate:e.orderDate,
      amount : e.amount,
      shippingAddress : e.shippingAddress,
      orderEmail: e.orderEmail,
      orderStatus : e.orderStatus,
      price : e.amount,
          //nullviolations

    }
    newdata.push(orderCreate) 
  })

    const count = await Orders.count();
    console.log(count , 'dax')
    if (count === 0) {
      try {
        const newType = await Orders.bulkCreate(newdata);
        console.log('Where are you Scooby Doo?')
        return(newType);
      } catch (error) {
        
        console.log(error , "bill");
      }
    } else {
     return(orders);
    }

  
}

router.get ('/' , async ( req , res)=>{
  const values = await getOrders()
  ;
 /*  console.log(values) */
  res.send(values)
})




// import controllers


module.exports = router;