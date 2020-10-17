const { v4: uuid } = require('uuid');
const fs = require('fs');
const filePath = 'src/server/data/authors.json';

class Author {
    constructor() {
        
    }
    
    getAuthors() {
        const data = fs.readFileSync(filePath, 'utf-8') || [];
        return JSON.parse(data);
    }
    
    getAuthor(ID) {
        const authors = this.getAuthors();
        return authors.filter((author) => author.ID === ID).pop() || null;
    }
    
    addAuthor(data) {
        const authors = this.getAuthors(), id = uuid();
        const ID = data.ID || id;
        
        data = {...data, ID};
        authors.push(data);
        this.updateFile(authors);
        return { data };
    }
    
    updateAuthor(ID, newData) {
        const currentData = this.getAuthor(ID);
        const update = {...currentData, ...newData};
        this.removeAuthor(ID);
        return this.addAuthor(update);
    }
    
    removeAuthor(ID) {
        const authors = this.getAuthors();
        const result = authors.filter((author) => author.ID != ID);
        this.updateFile(result);
        return { id: ID };
    }
    
    authorExists(ID) {
        const authors = this.getAuthors();
        return authors.filter((author) => author.ID === ID).length > 0;
    }
    
    updateFile(data) {
        const update = fs.writeFileSync(filePath, JSON.stringify(data));
        return update
    }
} 

module.exports = {
    Author
}