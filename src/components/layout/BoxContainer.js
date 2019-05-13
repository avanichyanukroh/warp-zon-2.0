import React from 'react';

const styles = {
    margin: '25px auto 25px',
    maxWidth: '1200px',
    paddingLeft: '20px',
    paddingRight: '20px'
}
const BoxContainer = (props) => {
    return (
        <div style={styles}>
            {props.children}
        </div>
    );
}

export default BoxContainer;
