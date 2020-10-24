import React from 'react';
import { Page } from '../../layouts';

const NewAuthor = () => {
    return (
        <Page>
            <h3 className="mb-4">New author</h3>
            <form action="http://localhost:5050/author/create" method="post" target="_self">
                <label>
                    <input type="text" className="form-control" name="name" placeholder=" "/>
                    <span>Name</span>
                </label>
                <label>
                    <input type="text" className="form-control" name="profilePic" placeholder=" "/>
                    <span>Picture</span>
                </label>
                <label>
                    <input type="text" className="form-control" name="intro" placeholder=" "/>
                    <span>Intro</span>
                </label>
                <button className="btn btn-primary" type="submit">Add author</button>
            </form>
        </Page>
    )
}

export {NewAuthor};