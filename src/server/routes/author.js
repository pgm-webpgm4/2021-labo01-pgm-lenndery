const api = require('../index');
const { Author } = require('../lib/Author');

// CREATE author
api.post('/authors/create', ({ body }, res) => {
    const author = new Author();
    const added = author.addAuthor(body);
    res.send(added);
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
api.put('/authors/update/:ID', ({ params: {ID}, body }, res) => {
    const authors = new Author();
    const result = authors.updateAuthor(ID, body);
    res.send(result);
})

// DELETE single author by ID
api.delete('/authors/delete/:ID', ({ params: {ID} }, res) => {
    const authors = new Author();
    const removed = authors.removeAuthor(ID);
    res.send(removed);
})