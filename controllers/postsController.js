// Array dei post
const posts = [
    { id: 1, title: "Post 1", content: "Content of Post 1" },
    { id: 2, title: "Post 2", content: "Content of Post 2" },
    { id: 3, title: "Post 3", content: "Content of Post 3" },
  ];
  
  // Restituisce la lista dei post
  const getAllPosts = (req, res) => {
    res.json(posts);
  };
  
  // Restituisce un singolo post
  const getPostById = (req, res) => {
    const post = posts.find((p) => p.id === parseInt(req.params.id));
    if (post) {
      res.json(post);
    } else {
      res.status(404).send(`Post with id ${req.params.id} not found`);
    }
  };
  
  // Crea un nuovo post (placeholder per ora)
  const createPost = (req, res) => {
    res.send("Creazione di un nuovo post");
  };
  
  // Aggiorna un post (placeholder per ora)
  const updatePost = (req, res) => {
    res.send(`Aggiornamento del post ${req.params.id}`);
  };
  
  // Elimina un post
  const deletePost = (req, res) => {
    const postIndex = posts.findIndex((p) => p.id === parseInt(req.params.id));
    if (postIndex !== -1) {
      posts.splice(postIndex, 1); // Rimuove il post dall'array
      console.log("Lista aggiornata dei post:", posts); // Stampa la lista aggiornata
      res.status(204).send(); // Risponde con stato 204 e nessun contenuto
    } else {
      res.status(404).send(`Post with id ${req.params.id} not found`);
    }
  };
  
  // Esporta le funzioni
  module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
  };
  
  