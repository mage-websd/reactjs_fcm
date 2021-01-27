import React from 'react';

const Layout = (props) => {
    return <>
        <div className="layout-content">
            {props.children}
        </div>
    </>
}

export default Layout;
