import React from 'react';

const CardPost = ({props: {title, author, intro, fullUrl}}) => {
    return (
        <div className="card p-3 mb-3">
            {/* <img src="..." className="card-img-top"></img> */}
            <div className="row d-flex align-items-center">
                <div className="col"> 
                    <h5 className="card-title mb-0">{title}</h5>
                    {/* <p className="card-text mb-2">{intro}</p> */}
                    <p className="mb-0"><small>Door {author}</small></p>
                </div>
                <div className="col d-flex justify-content-end">
                    <a className="btn btn-outline-primary mr-3" href={`/blog/${fullUrl}`}>Edit post</a>
                    <a className="btn btn-outline-danger" onClick={({target}) => {removeCart(target)}}>Delete post</a>
                </div>
            </div>
        </div>
    )
}

const removeCart = (target) => {
    target.closest('.card').remove();
}

export {CardPost};