import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';
import { Typography } from '@material-ui/core';
import BoxContainer from '../layout/BoxContainer';

const styles = {
    slideContainer: {
        height: '400px'
    },
    itemDescriptionText: {
        // position: 'relative',
        // top: '10px',
        color: 'white',
        // paddingLeft: '14px',
        // textShadow: '2px 2px 2px black'
    },
    backgroundImage: {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    }
}
class Carousel extends PureComponent {
	render() {
        const { items } = this.props;

		return (
			<ResponsiveCarousel
				showThumbs={false}
				showStatus={false}
				useKeyboardArrows
				className="presentation-mode"
			>
                {items.map((item, index) => (
                    <div style={styles.slideContainer} key={index}>
                        <img
                            src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${item.screenshots[0].image_id}.jpeg`}
                            alt='game screenshot'
                            style={styles.backgroundImage}
                        />
                        <BoxContainer>
                        <div>
                            <Typography variant="h6" style={styles.itemDescriptionText}>{item.name}</Typography>
                        </div>
                        </BoxContainer>
                    </div>
                ))}

			</ResponsiveCarousel>
		);
	}
}


Carousel.propTypes = {
		
};


export default Carousel;
