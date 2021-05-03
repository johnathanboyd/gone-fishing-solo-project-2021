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
  console.log( '/api/baits GET hit');
  let queryString = `SELECT * FROM "baits"`;
  pool.query (queryString).then ( (results)=>{
    res.send( results.rows );
  }).catch ((err)=>{
    console.log(err)
    res.send( 500 );
  })
});

router.get('/specific/:id', (req, res) => {
// GET route code here
console.log( '/api/baits/specific GET hit', req.params.id);
let queryString = `SELECT "baits".name, "baits".type, "baits".image_path FROM "baits"
JOIN "fish_baits" ON "fish_baits".baits_id = "baits".id
JOIN "fish" ON "fish_baits".fish_id = "fish".id
WHERE "fish".id = $1;`;
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
router.post('/add', (req, res) => {
  // POST route code here
  const name = req.body.name;
  const type= req.body.type;
  const style = req.body.style;
  const depth = req.body.depth;
  const season = req.body.depth;
  const image = req.body.image;
  const example = req.body.example;
  const retrieval = req.body.retrieval;
  const description = req.body.description;

  const queryText = 
  `INSERT INTO "baits" () 
  VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`;
  pool.query(queryText, [name, type, style, depth, season, image, example, retrieval, description ])
  .then(() => res.sendStatus(201)) 
  .catch((err) => {
    console.log('Adding fish fialed: ', err)
    res.sendStatus(500);
  });
});

module.exports = router;
