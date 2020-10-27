const api = require('../index');
const { Blog } = require('../lib/Blog');

// CREATE post
api.post('/blog/create', ({ body, headers, originalUrl }, res) => {
    console.log(body)
    const blog = new Blog();
    const added = blog.addBlog(body);
    res.send(added);
    // res.redirect(headers.origin + originalUrl);
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
api.post('/blog/update/:ID', ({ params: {ID}, body, headers, originalUrl }, res) => {
    console.log(body);
    const blog = new Blog();
    const result = blog.updateBlog(ID, body);
    res.redirect(headers.origin + originalUrl);
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