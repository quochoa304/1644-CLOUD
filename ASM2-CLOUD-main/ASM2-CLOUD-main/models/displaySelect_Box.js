const pg_conn = require("./pg_config");

async function select_box(){
    var shop_query = `SELECT shops.name,shops.id FROM shops JOIN users on users.shop_id = shops.id WHERE users.role ='shop'`;
    var data = await pg_conn.query(shop_query);
    let num_shop = data.rowCount; 
    console.log(num_shop);
    let select_box_string = 
    `   <form action="select_shop" method="POST">
        <label for="shop">Choose a shop:</label>
        <select name="shop" id="shop">
        <option value="0" selected>All Shops</option>`
        for(let i=0; i<num_shop; i++){
            let shop_name= data.rows[i].name;
            let shop_id=data.rows[i].id;
            select_box_string += `<option value=${shop_id} > ${shop_name} </option>`
        }
        select_box_string += 
        `</select>
        <button type ="submit" value="shop_select">View</button>
        </form>`;
        // console.log(select_box_string);
        return select_box_string;
}

module.exports=select_box;