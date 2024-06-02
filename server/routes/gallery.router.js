const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  const galleryItemId = req.params.id;

  const queryText = `
    UPDATE gallery
    SET likes = likes + 1
    WHERE id = $1
  `;

  pool.query(queryText, [galleryItemId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error('PUT /api/gallery/like/:id error:', err);
      res.sendStatus(500);
    });
});

// GET /gallery
router.get('/', (req, res) => {
  const queryText = `
  SELECT * FROM "gallery"
  ORDER BY "title" ASC
  `;

  pool.query(queryText)
  .then((response)=>{
      res.send(response.rows)
  })
  .catch((err)=>{
      console.error('GET /api/gallery error', err)
      res.sendStatus(500)
  })
});

module.exports = router;
