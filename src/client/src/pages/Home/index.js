import React, { useState, useEffect } from 'react';
import { CardPost } from '../../components';
import { Page } from '../../layouts'

const Home = () => {
    const [posts, setPosts] = useState([]);
    const [author, setAuthor] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const postResp = await fetch('http://localhost:5050/blog');
            const posts = await postResp.json();
            const authorResp = await fetch(`http://localhost:5050/authors`);
            const authors = await authorResp.json();
            posts.map(p => {
                p.author = authors.filter(a => a.ID == p.author).pop().name;
            })
            console.log(posts);
            setPosts(posts);
        }
        fetchData();
    }, [])
    
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:5050/authors/`);
            const data = await resp.json();
            setAuthor(data);
        }
        fetchData()
    }, []);
    
    return (
        <Page>
            <div className="mb-4 d-flex align-items-center justify-content-between">
                <div> 
                    <h1 className="mb-0">Posts</h1>
                </div>
                <a className="btn btn-primary" href="/blog/create"><ion-icon name="add-circle-outline"></ion-icon> Add post</a>
            </div>
            {posts ? posts.map(p => {
                return <CardPost key={p.ID} props={p}></CardPost>
            }) : <p>Laden</p> }
        </Page>
    )
}

export {Home};