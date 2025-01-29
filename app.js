const express = require("express");
const app = express();
const postsRouter = require("./routers/posts");

// Middleware per gestire JSON
app.use(express.json());

// Registrazione del router
app.use("/posts", postsRouter);

// Middleware per le rotte non trovate (404)
app.use((req, res, next) => {
  res.status(404).json({ error: "Endpoint non trovato" });
});

// Middleware per la gestione degli errori
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || "Errore interno del server",
  });
});

// Avvio del server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server avviato sulla porta ${PORT}`);
});
