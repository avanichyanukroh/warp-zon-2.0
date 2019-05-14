import React from 'react';

import Typography from '@material-ui/core/Typography';
import Spacer from '../components/common/Spacer';
import Grid from '@material-ui/core/Grid';
import BoxContainer from '../components/layout/BoxContainer';
import backgroundImage from '../images/breath-of-the-wild-wallpaper.jpg';

const GameProfile = () => {
    return (
        <div style={{ minHeight: '100vh' }}>
            <BoxContainer>
                <Typography variant="h3" align="left">
                    <b>The Legend of Zelda: Breath of the Wild</b>
                </Typography>
                <div
                    style={{
                        background: 'linear-gradient(to right, #009fff, #ec2f4b)',
                        height: '3px',
                        width: '185px',
                        display: 'inline-block',
                        marginBottom: '8px',
                        borderRadius: '15px'
                    }}
                />
                <Spacer />
                <Grid container spacing={16} style={{ }}>
                    <Grid item xs={12} sm={8} md={8} style={{ }}>
                        <div style={{ position: 'relative', height: '480px', width: '100%', background: 'white' }}>
                            <iframe 
                                title="breath of the wild"
                                allowFullScreen="allowfullscreen"
                                src="https://www.youtube.com/embed/zw47_q9wbBE?autoplay=1&mute=1"
                                frameborder="0"
                                autoFocus
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            >
                            </iframe>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} style={{ }}>
                        <div style={{ height: '100%', width: '100%', background: 'white' }}>2</div>
                    </Grid>
                </Grid>
                <Grid container spacing={16} style={{ }}>
                    <Grid item xs={12} sm={8} md={8} style={{ }}>
                        <div style={{ height: '100%', width: '100%', background: 'white' }}>
                            3
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={4} md={4} style={{ }}>
                        <div style={{ height: '100%', width: '100%', background: 'white' }}>4</div>
                    </Grid>
                </Grid>
            </BoxContainer>
            <img
                src={backgroundImage}
                alt="breath of the wild background"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: '-10',
                    width: '100%',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    WebkitMaskImage:'-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0)))',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))'
                }}
            />
        </div>
    );
}

export default GameProfile;
