import React from 'react';
import {Link} from 'react-router-dom'

const Layout =({children}) =>{
    return(
        <>
        <div style={{"paddingBottom": "20px", "background": "red"}}>
            <Link to="/">
                <span>Home</span>
            </Link>
            <Link to="/share">
                <span>Share</span>
            </Link>
            <Link to="/firebase/firestore">
                <span>firebase firestore</span>
            </Link>
            <Link to="/firebase/analytics">
                <span>firebase analytics</span>
            </Link>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;