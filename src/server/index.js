/**
 * The Server
 */

const express = require('express'),
api = express(),
port = 5050;
const { Blog } = require('./User')

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.get('/', (req, res) => {
  const blog = new Blog();
  const list = blog.getBlogs();
  res.send(list);
})

api.post('/blog/create', ({ body }, res) => {
  const blog = new Blog();
  const added = blog.addBlog(body)
  res.send(added);
})

api.get('/blog/:ID', ({ params }, res) => {
  const blog = new Blog();
  const result = blog.getBlog(params.ID);
  if (result) res.send(result);
  else res.send('couldn\'t find that item')
})

api.delete('/blog/delete/:ID', ({ params }, res) => {
  try {
    const blog = new Blog();
    const removed = blog.removeBlog(params.ID);
    res.send(removed);
  } catch {
    res.send('couldn\'t remove this item')
  }
})

const startServer = () => {
  return new Promise((resolve, reject) => {
    console.log("Starting the server...");
    
    api.listen(port, (err) => {
      if (err) reject();
      resolve();
      console.log(`App listening at http://localhost:${port}`)
    })
  })
}

module.exports = { startServer };