const { v4: uuid } = require('uuid');
const fs = require('fs');
const filePath = 'src/server/data/authors.json';
const mime = require('mime-types')

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
    
    addAuthor(data, files = []) {
        const authors = this.getAuthors(), id = uuid();
        const ID = data.ID || id;
        let sampleFile = files.profilePic;
        
        if (!files || Object.keys(files).length === 0) {
            console.log('No files were uploaded.');
            data = {...data, ID};
            authors.push(data);
            this.updateFile(authors);
            return { data };
        } else if (sampleFile) {
            const ext = mime.extension(sampleFile.mimetype);
            sampleFile.mv(`src/server/data/profilePics/${id}.${ext}`, (err) => {
                data = {...data, ID, profilePic: `${id}.${ext}` };
                authors.push(data);
                this.updateFile(authors);
                return { data };
            });
        } 
    }
    
    updateAuthor(ID, newData) {
        const currentData = this.getAuthor(ID);
        const update = {...currentData, ...newData};
        this.removeAuthor(ID);
        return this.addAuthor(update);
    }
    
    removeAuthor(ID) {
        const authors = this.getAuthors();
        const updated = authors.filter((author) => author.ID != ID);
        const deleted = authors.find((author) => author.ID == ID).profilePic;
        try {
            fs.unlinkSync(`src/server/data/profilePics/${deleted}`);
        } catch (err) {console.log(err)};
        this.updateFile(updated);
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

const uploadFile = () => {
    return Promise((resolve, reject) => {
        
    })
}

module.exports = {
    Author
}