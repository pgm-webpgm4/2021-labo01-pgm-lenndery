import React from 'react';

const Header = () => {
    return (
        <header>
            <nav className="nav nav-pills flex-column flex-sm-row">
                <a className="flex-sm-fill text-sm-center nav-link active" href="/">Home</a>
                <a className="flex-sm-fill text-sm-center nav-link" href="/store">Active</a>
            </nav>
        </header>
    )
}

export default Header;