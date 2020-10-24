import React, { useState, useEffect } from 'react';
import { CardPost } from '../../components';

const Home = () => {
    const [posts, setPosts] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('http://localhost:5050/blog');
            const data = await resp.json();
            setPosts(data);
        }
        fetchData();
    }, [])
    
    
    return (
        <div className="p-5">
            <h1>Posts</h1>
            <p>Hello world</p>
            {posts ? posts.map(p => {
                return <CardPost key={p.ID} props={p}></CardPost>
            }) : <p>Laden</p> }
        </div>
    )
}

export {Home};