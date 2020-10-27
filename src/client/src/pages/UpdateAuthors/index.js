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
            <img className="mb-4" src={`http://localhost:5050/profilePics/${author.profilePic}`} alt="" width="100px" height="100px"/>
            <form action={`http://localhost:5050/authors/update/${params.id}`} method="post" encType="multipart/form-data">
                <label>
                    <input type="text" autoComplete="off" className="form-control" name="name" defaultValue={author.name} placeholder=" "/>
                    <span>Name</span>
                </label>
                <label>
                    <input type="file" className="form-control" name="profilePic" placeholder=" "/>
                    <span>Picture File</span>
                </label>
                <button className="btn btn-primary" type="submit">Update author</button>
            </form>
        </Page>
    )
}

export {UpdateAuthors}