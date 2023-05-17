var express = require('express');
var router = express.Router();
var display_table = require('../models/product_display');
var select_box=require('../models/displaySelect_Box');
var express = require('express');
const session = require('express-session');
var router = express.Router();

router.post('/', function(req, res, next) {
  res.render('login', { title: 'Login page',
                        message: 'ATN Shop',
                        notice: '' });
});
/* GET home page. */
router.get('/', async function(req, res, next) {
  ss= req.session
 if(session.user_id) {
  let table_string= await display_table(0,ss.role);
      res.render('admin', { title: 'ADMIN PAGE', 
                            name: req.body.username,
                            box: select_box_string, 
                            table: table_string })
    // res.render('admin', { title: 'Admin Page',name:'Khoa' });
 }
 else{
  res.render('login', { title: 'LOGIN PAGE',
                        message: "ATN SHOP", 
                        notice:"Please login first!" });
 }
});
router.post('/select_shop', async function(req, res, next) {
  ss=req.session
  let shop_id= req.body.shop; 
  var  select_box_string = await select_box();
  let table_string= await display_table(shop_id,ss.role);
  res.render('admin', {   title: 'ADMIN PAGE',
                          name: "director",
                          box: select_box_string, 
                          table: table_string })
});
module.exports = router;
