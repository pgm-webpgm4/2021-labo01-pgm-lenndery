import React, { useEffect, useState } from 'react';
import {Page} from '../../layouts';

const UpdateAuthors = ({match: {params}}) => {
    const [author, updatePost] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:5050/authors/${params.id}`);
            const data = await resp.json();
            updatePost(data);
            console.log(data);
        }
        fetchData();
    }, [])
    
    return (
        <Page>
            <h3 className="mb-4">Update post</h3>
            <form action={`http://localhost:5050/authors/update/${params.id}`} method="post">
                <label>
                    <input type="text" autoComplete="off" className="form-control" name="name" defaultValue={author.name} placeholder=" "/>
                    <span>Name</span>
                </label>
                <label>
                    <input type="url" className="form-control" name="profilePic" defaultValue={author.profilePic} placeholder=" "/>
                    <span>Picture</span>
                </label>
                <button className="btn btn-primary" type="submit">Update author</button>
            </form>
        </Page>
    )
}

export {UpdateAuthors}