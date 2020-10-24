import React from 'react';

const CardPost = ({props: {title, author, intro, fullUrl}}) => {
    return (
        <div className="card">
            {/* <img src="..." className="card-img-top"></img> */}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text mb-2">{intro}</p>
                <p className="mb-0"><small>{author}</small></p>
                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
            </div>
            <div className="card-footer">
                <a className="btn btn-primary" href={`/blog/${fullUrl}`}>Edit post</a>
                <a className="btn btn-grey">Delete post</a>
            </div>
        </div>
    )
}

export {CardPost};