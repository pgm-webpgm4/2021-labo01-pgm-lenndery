import React from 'react';
import {Link} from 'react-router-dom';

const CardPost = ({props: {ID, title, author, intro, fullUrl}}) => {
    return (
        <div className="card p-3 mb-3">
            {/* <img src="..." className="card-img-top"></img> */}
            <div className="row d-flex align-items-center">
                <div className="col"> 
                    <h5 className="card-title mb-0">{title}</h5>
                    {/* <p className="card-text mb-2">{intro}</p> */}
                    <p className="mb-0"><small>By {author}</small></p>
                </div>
                <div className="col d-flex justify-content-end">
                    {/* <a className="btn btn-outline-primary mr-3" href={`/blog/${fullUrl}`}>Edit post</a> */}
                    <Link to={`/blog/update/${fullUrl}`} className="btn btn-outline-primary mr-3">Edit post</Link>
                    <a className="btn btn-outline-danger" onClick={({target}) => {removeCart(target, ID)}}>Delete post</a>
                </div>
            </div>
        </div>
    )
}

const removeCart = async (target, ID) => {
    const resp = await fetch(`http://localhost:5050/blog/delete/${ID}`, {method: 'DELETE'});
    const data = await resp.json();
    console.log(data);
    target.closest('.card').remove();
}

export {CardPost};