import path from "path";
import express from "express";

async function createServer() {
  const app = express();

  app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
  });
}

createServer();
