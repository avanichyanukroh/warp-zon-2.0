import React from 'react';

import Grid from '@material-ui/core/Grid';
import { Hidden } from '@material-ui/core';
import BoxContainer from '../components/layout/BoxContainer';
import backgroundImage from '../images/breath-of-the-wild-wallpaper.jpg';

const SearchResult = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <BoxContainer>
                <Grid container spacing={16} style={{ marginBottom:'8px' }}>
                    <Grid item xs={12} sm={8} md={8} style={{ height: '200px' }}>
                        <div style={{ height: '100%', width: '100%', background: 'white' }}>1</div>
                    </Grid>
                    <Hidden only={['xs', 's']}>
                        <Grid item xs={12} sm={4} md={4} style={{ height: '200px' }}>
                            <div style={{ height: '100%', width: '100%', background: 'white' }}>2</div>
                        </Grid>
                    </Hidden>
                </Grid>
            </BoxContainer>
            <img
                src={backgroundImage}
                alt="breath of the wild background"
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    zIndex: '-10',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center'
                }}
            />
        </div>
    );
}

export default SearchResult;
