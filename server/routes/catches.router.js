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
  console.log( 'in /api/catches POST', req.body);
  let queryString = `INSERT INTO "my_catch" ( user_id, fish_id, lakes_id) VALUES ($1, $2, $3)`
  pool.query( queryString, [req.body.user_id, req.body.fish_id, req.body.lakes_id])
  .then(()=>{
    res.sendStatus(200)
  })
  .catch( (err) =>{
    console.log('ERROR in POST', err )
    res.sendStatus(500)
  })
});

module.exports = router;
