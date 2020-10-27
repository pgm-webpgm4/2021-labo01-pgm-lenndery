const api = require('../index');
const { Author } = require('../lib/Author');
const fileUpload = require('express-fileupload');
api.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

// CREATE author
api.post('/authors/create', ({ body, headers, originalUrl, files }, res) => {
    console.log(body)
    const author = new Author();
    const added = author.addAuthor(body);
    // res.send(added);
    res.redirect(headers.origin + originalUrl);
})

// READ all authors
api.get('/authors', (req, res) => {
    const authors = new Author();
    const list = authors.getAuthors();
    res.send(list);
})

// READ single author by ID
api.get('/authors/:ID', ({ params: {ID} }, res) => {
    const authors = new Author();
    const result = authors.getAuthor(ID);
    res.send(result);
})

// UPDATE author by ID
api.post('/authors/update/:ID', ({ params: {ID}, body, headers, originalUrl }, res) => {
    const authors = new Author();
    const result = authors.updateAuthor(ID, body);
    res.redirect(headers.origin + originalUrl);
})

// DELETE single author by ID
api.delete('/authors/delete/:ID', ({ params: {ID} }, res) => {
    const authors = new Author();
    const removed = authors.removeAuthor(ID);
    res.send(removed);
})