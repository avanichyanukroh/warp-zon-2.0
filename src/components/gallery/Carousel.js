import React, { PureComponent } from 'react';
import moment from 'moment';
// import PropTypes from 'prop-types';

import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { Typography, Grid, Hidden } from '@material-ui/core';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';


const styles = {
    slideContainer: {
        height: '400px',
        verticalAlign: 'middle'
    },
    itemDescriptionText: {
        color: 'white'
    },
    backgroundImage: {
        position: 'relative',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        zIndex: 10
    },
    contentContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '1200px',
        width: '100%',
        paddingLeft: '20px',
        paddingRight: '20px',
        zIndex: 30
    },
    effectOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        background: 'rgba(0, 0, 0, 0.6)',
        zIndex: 15
    },
    iFrameContainer: {
        position: 'relative',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        height: '240px',
        width: '100%',
        background: 'white'
    },
    iFrame: {
        position: 'absolute',
        top: 0,
        left: '-40px',
        width: '100%',
        height: '100%'
    }
}
class Carousel extends PureComponent {
	render() {
        const { items } = this.props;
        console.log(moment(items[0].first_release_date).format('MMMM Do YYYY'))
		return (
			<ResponsiveCarousel
				showThumbs={false}
				showStatus={false}
				// useKeyboardArrows
				className="presentation-mode"
			>
                {items.map((item, index) => (
                    <div style={styles.slideContainer} key={index}>
                        <div style={styles.effectOverlay} />
                        <img
                            src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${item.screenshots[0].image_id}.jpeg`}
                            alt='game screenshot'
                            style={styles.backgroundImage}
                        />
                        <div style={styles.contentContainer}>
                            <Grid container spacing={16}>
                                <Grid item xs={12} sm={8} md={8} style={{ textAlign: 'left' }}>
                                    <div style={{height: '200px', paddingRight: '20px', color: 'white'}}>
                                        <Typography variant="h4" style={styles.itemDescriptionText}>{item.name}</Typography>
                                        <p style={styles.itemDescriptionText}>{item.summary.slice(0, 250)} ...<a href="#"> Read more</a></p>
                                        <p>
                                            <b>Genre: </b>
                                            {item.genres.map((genre, index) => {
                                                if (index === 0) {
                                                    return genre.name;
                                                }
                                                else {
                                                    return `, ${genre.name}`;
                                                }
                                            })}
                                        </p>
                                        <p>
                                            <b>Platform: </b>
                                            {item.platforms.map((platform, index) => (
                                                <span
                                                    style={{
                                                        border: '2px solid white',
                                                        borderRadius: '3px',
                                                        padding: '3px 5px 3px',
                                                        marginRight: '5px'
                                                    }}
                                                >
                                                    {platform.abbreviation}
                                                </span>
                                            ))}
                                        </p>
                                        <p>
                                            <b>Release Date: </b>
                                            {moment(item.first_release_date).format('MMMM Do YYYY')}
                                        </p>
                                    </div>
                                </Grid>
                                <Hidden only={['xs', 's']}>
                                    <Grid item xs={12} sm={4} md={4} style={{ textAlign: 'left' }}>
                                        <div style={styles.iFrameContainer}>
                                            <iframe 
                                                title="breath of the wild"
                                                allowFullScreen="allowfullscreen"
                                                src="https://www.youtube.com/embed/zw47_q9wbBE?autoplay=1&mute=1"
                                                frameBorder="0"
                                                autoFocus
                                                style={styles.iFrame}
                                            >
                                            </iframe>
                                        </div>
                                    </Grid>
                                </Hidden>
                            </Grid>
                        </div>
                    </div>
                ))}

			</ResponsiveCarousel>
		);
	}
}


Carousel.propTypes = {
		
};


export default Carousel;
