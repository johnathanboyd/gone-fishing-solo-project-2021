const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
 router.get('/', (req, res) => {
  // GET route code here
  console.log( '/api/catches GET hit');
  let queryString = `SELECT * FROM "my_catch"`;
  pool.query (queryString).then ( (results)=>{
    res.send( results.rows );
  }).catch ((err)=>{
    console.log(err)
    res.send( 500 );
  })
});
/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
