var pg_conn = require("./pg_config")
async function updateProduct(id, name, price, quantity, shop, defid) {
        let acc_query =
        {
            text: `UPDATE products SET id=$1, name=$2, price=$3, quantity=$4, shop_id=$5 WHERE id=$6`,
            values: [id, name, price, quantity, shop, defid]
        }
        try{
        query_data = await pg_conn.query(acc_query);
        }catch(err) {
            console.log('ID cannot be the same as an existing ID');            
        }
    return;
}
module.exports = updateProduct;
