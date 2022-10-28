const fs = require('fs')
const path = require('path')
const express = require('express')
const { createServer: createViteServer } = require('vite')

async function createServer() {
  const app = express()

  // Create Vite server in middleware mode. This disables Vite's own HTML
  // serving logic and let the parent server take control.
  //
  // If you want to use Vite's own HTML serving logic (using Vite as
  // a development middleware), using 'html' instead.
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom'
  })
  // use vite's connect instance as middleware
  app.use(vite.middlewares)

  app.use('/*', async (req, res) => {
    // serve index.html - we will tackle this next
    res.sendFile(path.resolve("index.html"));
  })


  app.listen(3000,()=>{ 
    console.log('Server running at http://localhost:3000')
  })
};

createServer()