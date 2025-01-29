const posts = require("../routers/posts"); // Importiamo i dati dei post

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

// Aggiunge un nuovo post
const createPost = (req, res) => {
  console.log("Dati ricevuti:", req.body); // Stampiamo i dati nel terminale

  const { title, content, tags, image } = req.body;

  if (!title || !content) {
    return res
      .status(400)
      .json({ message: "Titolo e contenuto sono obbligatori" });
  }

  const newPost = {
    id: posts.length ? posts[posts.length - 1].id + 1 : 1, // Generiamo un ID automatico
    title,
    content,
    tags: tags || [],
    image: image || "https://example.com/default.jpg",
  };

  posts.push(newPost);
  res.status(201).json(newPost);
};

// UPDATE: Conferma l'aggiornamento di un post
const updatePost = (req, res) => {
  const postId = parseInt(req.params.id);
  const { title, content, tags, image } = req.body;

  const postIndex = posts.findIndex((p) => p.id === postId);

  if (postIndex === -1) {
    return res
      .status(404)
      .json({ message: `Post con ID ${postId} non trovato` });
  }

  // Aggiorniamo solo i campi forniti nel body
  posts[postIndex] = {
    ...posts[postIndex],
    title: title || posts[postIndex].title,
    content: content || posts[postIndex].content,
    tags: tags || posts[postIndex].tags,
    image: image || posts[postIndex].image,
  };

  res.json(posts[postIndex]);
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
