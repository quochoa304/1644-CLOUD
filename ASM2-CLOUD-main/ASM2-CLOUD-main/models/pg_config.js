const  Pool = require('pg').Pool;
const pg_conn = new Pool({
  user: 'opnkyiskkehzgd',
  host: 'ec2-52-70-45-163.compute-1.amazonaws.com',
  database: 'd1rvej1drq5r3p',
  password: '2870c620edd9637a15052960762f67f3026b4f09ac40e5735ca8639d62d8d636',
  port: 5432,
  ssl:{
    rejectUnauthorized: false
  },
});
module.exports = pg_conn;


