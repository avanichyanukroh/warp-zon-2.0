import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ParallaxHero from '../components/common/ParallaxHero';
import heroImage from '../images/battlefield-5-banner.jpg';
import { Avatar } from '@material-ui/core';
import BoxContainer from '../components/layout/BoxContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    overlapContainer: {
        position: 'relative',
        left: 0,
        top: '-100px',
        zIndex: 100
    },
    avatar: {
        margin: 10,
        width: 160,
        height: 160
    }
  };

const UserProfile = (props) => {
    const { classes } = props;
    return (
        <div>
            <ParallaxHero
                background={heroImage}
                height="300px"
            />
            <div
                style={styles.overlapContainer}
            >
                <BoxContainer>
                    <Grid container spacing={16} style={{ }}>
                        <Grid item xs={12} sm={8} md={8} style={{ border: '1px solid blue' }}>
                            <Avatar alt="Avatar Image" src="" className={classes.avatar} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} style={{ border: '1px solid blue' }}>
                            <Typography variant="h3" align="left">Gamer1</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} style={{ }}>
                        <Grid item xs={12} sm={8} md={8} style={{ border: '1px solid blue' }}>
                        <Typography variant="h3" align="left">Wish List</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} style={{ border: '1px solid blue' }}>
                            <Typography variant="h3" align="left">Currently Playing</Typography>
                        </Grid>
                    </Grid>
                </BoxContainer>
            </div>
            
        </div>
    );
}

export default withStyles(styles)(UserProfile);
