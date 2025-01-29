const express = require('express');
const app = express();
const postsRouter = require('./routers/posts');

// Middleware per gestire JSON
app.use(express.json());

// Registrazione del router
app.use('/posts', postsRouter);

// Avvio del server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});