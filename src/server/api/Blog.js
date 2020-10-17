const api = require('../index');
const { Blog } = require('../lib/Blog');

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
api.get('/blog/:ID', ({ params: {ID} }, res) => {
    const blog = new Blog();
    const result = blog.getBlog(ID);
    if (result) res.send(result);
    else res.send('couldn\'t find that item');
})

// UPDATE post by ID
api.put('/blog/update/:ID', ({ params: {ID}, body }, res) => {
    const blog = new Blog();
    const result = blog.updateBlog(ID, body);
    res.send(result);
})

// DELETE single post by ID
api.delete('/blog/delete/:ID', ({ params: {ID} }, res) => {
    try {
        const blog = new Blog();
        const removed = blog.removeBlog(ID);
        res.send(removed);
    } catch {
        res.send('couldn\'t remove this item');
    }
})