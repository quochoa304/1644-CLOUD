var express = require('express');
var router = express.Router();
var select_box=require('../models/displaySelect_Box');
var display_table = require('../models/product_display');

/* GET home page. */
router.get('/', async function(req, res, next) {
  ss=req.session;
  var  select_box_string = await select_box();
  console.log(ss.role)
  if(ss.role=="director")
  {
    let table_string= await display_table(0,ss.role);
    res.render('admin', { title: 'ADMIN PAGE', name: ss.user_id,
                          box: select_box_string, 
                          table: table_string })
  }
  else  if(ss.role=="shop")
  {
    res.redirect('/users')
  }

  else
  res.render('login', { title: 'Login' });
});

module.exports = router;