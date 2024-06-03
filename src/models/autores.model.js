const getByAutor = (autorID) => {
    return db.query('SELECT * FROM  actividad8.posts WHERE id = ?', [autorID])
}

const selectAllAutores = () => {
    return db.query('SELECT * FROM actividad8.autores');
}

const insertAutores = ({ nombre, email, imagen }) => {
    return db.query('INSERT INTO actividad8.autores (nombre, email, imagen) VALUES (?, ?, ?)', [nombre, email, imagen]);
}

const selectById = (autoresId) => {
    return db.query('SELECT * from actividad8.autores WHERE id = ?', [autoresId]);
}

const selectByIdAutor = (autoresId) => {
    return db.query('SELECT * from actividad8.posts WHERE id_autor = ?', [autoresId]);
}

module.exports = {
    selectAllAutores,
    insertAutores,
    selectById,
    selectByIdAutor
}