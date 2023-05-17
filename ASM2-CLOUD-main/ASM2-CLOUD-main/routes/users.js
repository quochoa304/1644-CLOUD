var express = require('express');
var router = express.Router();
const session = require('express-session');
var deleteFunc =require('../models/delete');
var display_table = require('../models/product_display');
var insertFunc = require('../models/insert');
var updateProduct = require('../models/updateProduct');

var ss;
/* GET users listing. */
router.get('/', async function(req, res, next) {
  ss=req.session;
  console.log(ss);
  if (ss.role=="shop"){
    let username= ss.user_id;
    let shop_id = ss.shop_id;
    let table_string = await display_table(shop_id,ss.role)
        res.render('users', { title: 'USER PAGE', 
                              name: username, 
                              table_string: table_string })
  }
 else{
  res.render('login', { title: 'LOGIN PAGE',
                        message: "ATN SHOP", 
                        notice:"Please login first!" });
 }
});
router.get('/functions', async function(req, res, next) {
  res.redirect('/login')

});

router.post('/functions', async function(req, res, next) {
  // res.send('respond with a resource');
  let product_id = req.body.id;
  ss=req.session
  console.log(product_id);
  if(req.body.button=="delete")deleteFunc(product_id)
  else if(req.body.button=="update")await updateProduct(req.body.id, req.body.name, req.body.price, req.body.quantity, req.body.shop_id, req.body.defid);
  let shop_id = req.body.shop_id
  let table_string = await display_table(shop_id,ss.role)
  
  res.render('users', { title: 'USER PAGE', 
              name: req.body.username, 
             table_string: table_string })
});

router.post('/insert', async function(req, res, next) {
  ss=req.session
  let id = req.body.id;
  let name =req.body.name;
  let price= req.body.price;
  let quantity = req.body.quantity;
  let shop_id = req.body.shop_id;
  insertFunc(id, name, price, quantity, shop_id);
  res.redirect('/users')
});

module.exports = router;
