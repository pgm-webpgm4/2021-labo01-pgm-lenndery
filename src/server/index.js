/**
 * The Server
 * 
 * TODO: add error catching
 */

const express = require('express'),
    api = express(),
    port = 5050;
const { Blog } = require('./Blog');
const { Author } = require('./Author');

api.use(express.json());
api.use(express.urlencoded({
    extended: true
}));

// CREATE post
api.post('/blog/create', ({ body }, res) => {
    const blog = new Blog();
    const added = blog.addBlog(body);
    res.send(added);
})

// READ all posts
api.get('/blog', (req, res) => {
    const blogs = new Blog();
    const list = blogs.getBlogs();
    res.send(list);
})

// READ single post by ID
api.get('/blog/:ID', ({ params }, res) => {
    const blog = new Blog();
    const result = blog.getBlog(params.ID);
    if (result) res.send(result);
    else res.send('couldn\'t find that item');
})

// UPDATE post by ID
api.put('/blog/update/:ID', ({ params, body }, res) => {
    const blog = new Blog();
    const result = blog.updateBlog(params.ID, body);
    res.send(result);
})

// DELETE single post by ID
api.delete('/blog/delete/:ID', ({ params }, res) => {
    try {
        const blog = new Blog();
        const removed = blog.removeBlog(params.ID);
        res.send(removed);
    } catch {
        res.send('couldn\'t remove this item');
    }
})

// CREATE author
api.post ('/authors/create', ({body}, res) => {
    const author = new Author();
    const added = author.addAuthor(body);
    res.send(added);
})

api.get('/authors', (req, res) => {
    const authors = new Author();
    const list = authors.getAuthors();
    res.send(list);
})

api.get('/authors/:ID', ({ params: {ID} }, res) => {
    console.log(ID);
    res.send('hello world');
})

const startServer = () => {
    return new Promise((resolve, reject) => {
        console.log("Starting the server...");

        api.listen(port, (err) => {
            if (err) reject();
            else {
                resolve();
                console.log(`api listening at http://localhost:${port}`)
            }
        })
    })
}

module.exports = {
    startServer
};