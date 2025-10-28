const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🚀 Servidor WhatsApp rodando com sucesso!");
});

app.post("/webhook", (req, res) => {
  console.log("Mensagem recebida:", req.body);
  res.sendStatus(200);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(Servidor rodando na porta ${PORT}));
