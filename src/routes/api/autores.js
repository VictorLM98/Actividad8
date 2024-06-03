const router = require('express').Router();

const { getAutores, crearAutores, getAutorById, getPostByIdAutor } = require('../../controllers/autores.controller');

router.get('/', getAutores);
router.get('/:id', getAutorById);
router.get('/autor/:id', getPostByIdAutor);
router.post('/', crearAutores);


module.exports = router;