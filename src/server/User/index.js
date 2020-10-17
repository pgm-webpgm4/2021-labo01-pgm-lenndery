const { v4: uuid } = require('uuid');
const fs = require('fs');
const filePath = 'src/server/data/users.json';

class Blog {
    constructor(ID = uuid()) {
        // console.log(ID);
    }
    
    getBlogs() {
        const data = fs.readFileSync(filePath, 'utf-8') || [];
        return JSON.parse(data);
    }
    
    getBlog(ID) {
        this.blogExists(ID);
        const blogs = this.getBlogs();
        return blogs.filter((user) => user.ID === ID).pop() || null;
    }
    
    addBlog(data) {
        const blogs = this.getBlogs(), id = uuid();
        
        data.ID = id;
        data.publishedOn = new Date();
        data.fullUrl = data.fullUrl || id;
        
        blogs.push(data);
        this.updateFile(blogs);
        return { id, update };
    }
    
    removeBlog(ID) {
        const blogs = this.getBlogs();
        const result = blogs.filter((user) => user.ID != ID);
        this.updateFile(result);
        return { id: ID };
    }
    
    blogExists(prop, key = 'ID') {
        const users = this.getBlogs();
        return users.filter((user) => user[key] === prop).length > 0;
    }
    
    updateFile(data) {
        const update = fs.writeFileSync(filePath, JSON.stringify(data))
        return update
    }
};

module.exports = {
    Blog
}