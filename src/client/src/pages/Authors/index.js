import React, { useEffect, useState } from 'react';
import { CardAuthor } from '../../components';
import { Page } from '../../layouts';


const Authors = () => {
    const [authors, setAuthors] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('http://localhost:5050/authors');
            const data = await resp.json();
            setAuthors(data);
        }
        fetchData()
    }, [])
    
    return (
        <Page>
            <div className="mb-4 d-flex align-items-center justify-content-between">
                <div> 
                    <h3 className="mb-0">Authors</h3>
                </div>
                <a className="btn btn-primary" href="/authors/create"><ion-icon name="add-circle-outline"></ion-icon> Add author</a>
            </div>
            {authors ? authors.map(a => {
                return <CardAuthor key={a.ID} props={a}></CardAuthor>
            }) : <p>Laden</p> }
        </Page>
    )
}

export {Authors}