var express = require('express');
var router = express.Router();

const mangaController = require('../controllers/manga');

router.get('/list', async function(req, res) {
    const mangas =await mangaController.getAll();
    res.json({ mangas: mangas});
  });
  
module.exports = router;