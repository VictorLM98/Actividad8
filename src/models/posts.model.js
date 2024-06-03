const selectAllPosts = () => {
    return db.query('SELECT * FROM actividad8.posts');
}

const insertPost = ({ titulo, descripcion, fecha_creacion, categoria, id_autor }) => {
    return db.query('INSERT INTO actividad8.posts (titulo, descripcion, fecha_creacion, categoria, id_autor) VALUES (?, ?, ?, ?, ?)', [titulo, descripcion, fecha_creacion, categoria, id_autor]);
}

const selectByIdPost = (IdPost) => {
    return db.query('SELECT * FROM actividad8.posts WHERE id = ?', [IdPost]);
}

module.exports = {
    selectAllPosts, insertPost, selectByIdPost
}