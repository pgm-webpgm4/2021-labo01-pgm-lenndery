import React from 'react';
import { Page } from '../../layouts';

const NewAuthor = () => {
    return (
        <Page>
            <h3 className="mb-4">New author</h3>
            <form action="http://localhost:5050/authors/create" method="post" encType="multipart/form-data">
                <label>
                    <input type="text" autoComplete="off" className="form-control" name="name" placeholder=" "/>
                    <span>Name</span>
                </label>
                <label>
                    <input type="file" className="form-control" name="profilePic" placeholder=" "/>
                    <span>Picture File</span>
                </label>
                <button className="btn btn-primary" type="submit">Add author</button>
            </form>
        </Page>
    )
}

export {NewAuthor};