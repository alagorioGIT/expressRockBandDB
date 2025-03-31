var express = require('express');
const bandasController = require('../controllers/bandasController');
var router= express.Router();

router.get('/', bandasController.index);
router.get('/id/:id', bandasController.show);
router.get('/generos', bandasController.generos);
router.get('/generos/:genId', bandasController.generoBands);

module.exports=router;

