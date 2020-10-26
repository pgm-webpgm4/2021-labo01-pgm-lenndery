import React from 'react';
import {Link} from 'react-router-dom';

const CardAuthor = ({props: {ID, name, profilePic}}) => {
    return (
        <div className="card p-3 mb-3">
            <div className="row align-align-items-center">
                <div className="col d-flex align-items-center">
                    <h5 className="card-title mb-0">{name}</h5>
                </div>
                <div className="col d-flex justify-content-end">
                    <Link to={`/authors/update/${ID}`} className="btn btn-outline-primary mr-3">Edit author</Link>
                    <a className="btn btn-outline-danger" onClick={({target}) => {removeAuthor(target, ID)}}>Delete author</a>
                </div>
            </div>
        </div>
    )
}

const removeAuthor = async (target, ID) => {
    const resp = await fetch(`http://localhost:5050/authors/delete/${ID}`, {method: 'DELETE'});
    const data = await resp.json();
    console.log(data);
    target.closest('.card').remove();
}

export {CardAuthor}