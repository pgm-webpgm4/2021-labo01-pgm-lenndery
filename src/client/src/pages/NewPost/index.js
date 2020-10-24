import React from 'react';
import { Page } from '../../layouts';
import './index.scss';

const NewPost = () => {
    return (
        <Page>    
            <h3 className="mb-4">New post</h3>
            <form action="http://localhost:5050/blog/create" method="post" target="_self">
                <label>
                    <input type="text" className="form-control" name="title" placeholder=" "/>
                    <span>Title</span>
                </label>
                <label>
                    <input type="text" className="form-control" name="intro" placeholder=" "/>
                    <span>Intro</span>
                </label>
                <label>
                    <input type="text" className="form-control" name="description" placeholder=" "/>
                    <span>Description</span>
                </label>
                <label>
                    <input type="text" className="form-control" name="author" placeholder=" "/>
                    <span>Author</span>
                </label>
                <button className="btn btn-primary" type="submit">Create</button>
            </form>
        </Page>
    )
}

export {NewPost}