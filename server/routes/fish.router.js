const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const userStrategy = require('../strategies/user.strategy');

/**
 * GET route template
 */
 router.get('/', (req, res) => {
  // GET route code here
  console.log( '/api/fish GET hit', req.params.id);
  let queryString = `SELECT * FROM "fish"`;
  pool.query (queryString).then ( (results)=>{
    res.send( results.rows );
  }).catch ((err)=>{
    console.log(err)
    res.send( 500 );
  })
});
  router.get('/specific/:id', (req, res) => {
  // GET route code here
  console.log( '/api/fish/specific GET hit', req.params.id);
  let queryString = `SELECT * FROM "fish" WHERE id = $1`;
  pool.query (queryString, [req.params.id]).then ( (results)=>{
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
