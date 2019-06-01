import React from 'react';

import Navigationbar from '../Navbar/Navbar'

const layout = (props) => {

    return (
        <div>
            <div style={{
                position:"sticky",
                top:"0",
                zIndex:"1",
            }}><Navigationbar /></div>
            <main style={{
                backgroundImage: "linear-gradient(to top, #accbee 0%, #e7f0fd 100%)"
            }}>
                {props.children}
            </main>
        </div>
            

    )

}

export default layout;