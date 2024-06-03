const Posts = require('../models/posts.model');
const Autores = require('../models/autores.model');

const getAllPosts = async (req, res, next) => {
    try {
        const [result] = await Posts.selectAllPosts();
        res.json(result);
    } catch (err) {
        next(err);
    }
}
const getByIdPosts = async (req, res, next) => {
    try {
        const PostsId = req.params.id; 
        const [result] = await Posts.selectByIdPost(PostsId);
        if (result != 0) {
            res.json(result);
        } else {
            res.json("No exite un Posts con esa ID");
        }
    } catch (err) {
        next(err);
    }
}

const newPosts = async (req, res, next) => {
    try {
        const AutorId = req.body.autor_id; 
        const [result] = await Posts.selectByIdPost(AutorId);
        if (result != 0) {
            const [result] = await Posts.insert(req.body);
            res.json(req.body);
        } else {
            res.json("No exite un Posts con esa ID");
        }
    } catch (err) {
        next(err);
    }

}

module.exports = {
    getAllPosts, newPosts, getByIdPosts
}