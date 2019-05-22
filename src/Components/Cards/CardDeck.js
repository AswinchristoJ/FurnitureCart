import React from 'react';

const cardDeck = (props) => {
    return (
        <div 
            style={{display:"flex",
                    flexWrap:"wrap",
                    justifyContent:"center"}}>
                    
            {props.children}
        </div>
    );
};

export default cardDeck;