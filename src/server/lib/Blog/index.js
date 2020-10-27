const { v4: uuid } = require('uuid');
const fs = require('fs');
const filePath = 'src/server/data/blogs.json';

class Blog {
    constructor() {
       
    }
    
    getBlogs() {
        const data = fs.readFileSync(filePath, 'utf-8') || []; // get file of array
        return JSON.parse(data);
    }
    
    getBlog(ID) {
        /**
         * TODO: check if blog exists, else error
         */
        this.blogExists(ID); // check if post exists
        const blogs = this.getBlogs(); // get all the blogs
        return blogs.filter((blog) => blog.ID === ID).pop() || null; // filter out all posts without this ID
    }
    
    addBlog(data) {
        const blogs = this.getBlogs(), id = uuid(); // get posts and define id
        const ID = data.ID || id, fullUrl = data.fullUrl || id, publishedOn = data.publishedOn || new Date(); // set some data
        
        data = {...data, ID, fullUrl, publishedOn} // merge data
        
        blogs.push(data); // add data to array
        this.updateFile(blogs); // write data to file
        return { data };
    }
    
    updateBlog(ID, newData) {
        const currentData = this.getBlog(ID); // get a post by ID
        const update = {...currentData, ...newData}; // merge current and new data
        this.removeBlog(ID); // remove old data
        return this.addBlog(update); // add new -merged- data
    }
    
    removeBlog(ID) {
        const blogs = this.getBlogs();
        const result = blogs.filter((blog) => blog.ID != ID);
        this.updateFile(result);
        return { id: ID };
    }
    
    blogExists(prop, key = 'ID') {
        const users = this.getBlogs();
        return users.filter((blog) => blog[key] === prop).length > 0;
    }
    
    blogIndex(ID) {
        const blogs = this.getBlogs();
        return blogs.findIndex((blog) => blog.ID === ID);
    }
    
    updateFile(data) {
        const update = fs.writeFileSync(filePath, JSON.stringify(data))
        return update
    }
};

module.exports = {
    Blog
}