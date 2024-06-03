const router = require('express').Router();

const { getAllPosts, newPosts, getByIdPosts } = require('../../controllers/posts.controller');

router.get('/', getAllPosts);
router.post('/', newPosts);
router.get('/:id', getByIdPosts);


module.exports = router;