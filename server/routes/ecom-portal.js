import express from "express";

const app = express();
const router = express.Router();

app.get("/", async (req, res) => {
  res.redirect("http://localhost:3000");
});

app.get("/next", async (req, res) => {
  res.redirect("http://localhost:3002");
});

export default router;