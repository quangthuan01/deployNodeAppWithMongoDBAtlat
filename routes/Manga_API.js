var express = require('express');
var router = express.Router();

const mangaController = require('../controllers/manga');

router.get('/list', async function(req, res) {
    const mangas =await mangaController.getAll();
    res.json({ mangas: mangas});
  });
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Welcome to BE trave4t' });
  });
  
module.exports = router;