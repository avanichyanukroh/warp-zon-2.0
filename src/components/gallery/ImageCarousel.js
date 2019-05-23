import React, { PureComponent } from 'react';
import moment from 'moment';
// import PropTypes from 'prop-types';

import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';
import { Typography, Grid, Hidden } from '@material-ui/core';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';


const styles = {
    backgroundImage: {
        position: 'relative',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        zIndex: 10
    }
}
class ImageCarousel extends PureComponent {
	render() {
        const { items } = this.props;

		return (
			<ResponsiveCarousel
				showThumbs={true}
                showStatus={false}
                showIndicators={false}
                thumbWidth="30px"
				className="presentation-mode"
			>
                {items.map((item, index) => (
                    <div style={styles.slideContainer} key={index}>
                        <img
                            src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${item.image_id}.jpeg`}
                            alt='game screenshot'
                            style={styles.backgroundImage}
                        />
                    </div>
                ))}

			</ResponsiveCarousel>
		);
	}
}


ImageCarousel.propTypes = {
		
};


export default ImageCarousel;
