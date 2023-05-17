async function productData(shopId){
    // var authenticated = false;
    const product_query=
    {
        text: 'SELECT * FROM products WHERE shop_id= $1',
        values: [shopId]
    };
    var query_data = await pg_conn.query(product_query);
    console.log(query_data.row);
    return query_data.rows;
}

module.exports = productData;

