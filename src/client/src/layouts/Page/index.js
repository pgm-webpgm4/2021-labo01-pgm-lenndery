import React from 'react';
import './index.scss'

const Page = ({children}) => {
    return (
        <div className="layout layout--page">
            { children }
        </div>
    )
}

export {
    Page
}