import React from 'react';
import './index.scss';

const Header = () => {
    return (
        <header className="px-4 pt-4">
            <h4 className="mb-1 text-white">Potato Potato</h4>
            <small className="d-block mb-4 text-white">Everything you don't needed to know about a potato</small>
            <nav className="nav nav-pills flex-column">
                <div className="flex-sm-fill nav-link active">  
                    <a href="/"><ion-icon name="document-text-outline"></ion-icon> Posts</a>
                    <a href="/" className="btn btn-light"><ion-icon name="add-circle-outline"></ion-icon> Add post</a>
                </div>
                <div className="flex-sm-fill nav-link">  
                    <a href="/"><ion-icon name="document-text-outline"></ion-icon> Authors</a>
                    <a href="/" className="btn btn-light"><ion-icon name="add-circle-outline"></ion-icon>Add author</a>
                </div>
            </nav>
        </header>
    )
}

export default Header;