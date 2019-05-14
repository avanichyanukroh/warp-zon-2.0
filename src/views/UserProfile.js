import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import ParallaxHero from '../components/common/ParallaxHero';
import heroImage from '../images/battlefield-5-banner.jpg';
import { Avatar, Hidden } from '@material-ui/core';
import BoxContainer from '../components/layout/BoxContainer';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
    overlapContainer: {
        position: 'relative',
        left: 0,
        top: '-150px',
        zIndex: 100
    },
    avatar: {
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
                    
                    {/* Desktop View */}
                    <Hidden smDown>
                        <Grid container spacing={0} alignItems="center" style={{ }}>
                            <Grid item md={2}>
                                <Avatar alt="Avatar Image" src="" className={classes.avatar} />
                            </Grid>
                            <Grid item md={4}>
                                <Typography variant="h3" align="left" style={{ color: 'white' }}>
                                    <span style={{ background: 'rgba(0, 0, 0, 0.75)' }}>Gamer1</span>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Hidden>

                    {/* Mobile View */}
                    <Hidden mdUp>
                        <Grid container spacing={8} alignItems="center" style={{ }}>
                            <Grid item xs={12} sm={12}>
                                <Typography variant="h4" align="left" style={{ color: 'white' }}>
                                    <span style={{ background: 'rgba(0, 0, 0, 0.75)' }}>Gamer1</span>
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Avatar alt="Avatar Image" src="" className={classes.avatar} />
                            </Grid>
                        </Grid>
                    </Hidden>

                    <Grid container spacing={0} style={{ }}>
                        <Grid item xs={12} sm={8} md={8} style={{ border: '1px solid blue' }}>
                        <Typography variant="h3" align="left">Profile Summary</Typography>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} style={{ border: '1px solid blue' }}>
                            <Typography variant="h3" align="left">Platform, Genre of Interest</Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={0} style={{ }}>
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
