const Autores = require('../models/autores.model');

const getAutores = async (req, res, next) => {
    try {
        const [result] = await Autores.selectAllAutores();
        res.json(result);
    } catch (err) {
        next(err);
    }
}

const crearAutores = async (req, res, next) => {
    try {
        const [result] = await Autores.insertAutores(req.body);
        res.json(req.body);
    } catch (err) {
        next(err);
    }

}

const getAutorById = async (req, res, next) => {
    try {
        const autoresId = req.params.id;
        const [result] = await Autores.selectById(autoresId);
        if (result != 0) {
            res.json(result);
        } else {
            res.json("No exite un autor con esa ID");
        }
    } catch (err) {
        next(err);
    }
}

const getPostByIdAutor = async (req, res, next) => {
    try {
        const autoresId = req.params.id; 
        const [result] = await Autores.selectByIdAutor(autoresId);
        if (result != 0) {
            res.json(result);
        } else {
            res.json("Este Autor no tiene post");
        }
    } catch (err) {
        next(err);
    }
}
module.exports = {
    getAutores,
    crearAutores,
    getAutorById,
    getPostByIdAutor
}