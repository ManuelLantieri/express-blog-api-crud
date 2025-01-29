const posts = require("../data/posts"); // Importiamo i dati dei post

// INDEX: Restituisce tutti i post (con filtro per tag opzionale)
const getAllPosts = (req, res) => {
  const { tag } = req.query;

  if (tag) {
    const filteredPosts = posts.filter((post) => post.tags.includes(tag));
    return res.json(filteredPosts);
  }

  res.json(posts);
};

// SHOW: Restituisce un singolo post in base all'ID
const getPostById = (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((p) => p.id === postId);

  if (!post) {
    return res
      .status(404)
      .json({ message: `Post con ID ${postId} non trovato` });
  }

  res.json(post);
};

// CREATE: Conferma la creazione di un nuovo post
const createPost = (req, res) => {
  res.send("Creazione di un nuovo post");
};

// UPDATE: Conferma l'aggiornamento di un post
const updatePost = (req, res) => {
  const postId = req.params.id;
  res.send(`Aggiornamento del post ${postId}`);
};

// DELETE: Cancella un post e aggiorna la lista
const deletePost = (req, res) => {
  const postId = parseInt(req.params.id);
  const index = posts.findIndex((p) => p.id === postId);

  if (index === -1) {
    return res
      .status(404)
      .json({ message: `Post con ID ${postId} non trovato` });
  }

  posts.splice(index, 1); // Rimuove il post dall'array
  console.log("Lista aggiornata dei post:", posts);
  res.status(204).send(); // Nessun contenuto
};

module.exports = {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};
