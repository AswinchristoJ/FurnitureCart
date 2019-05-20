import React from 'react';

import Navigationbar from '../Navbar/Navbar'

const layout = (props) => {

    return (
        <div>
            <Navigationbar />
            <main>
                {props.children}
            </main>
        </div>
            

    )

}

export default layout;