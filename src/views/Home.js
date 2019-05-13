import React from 'react';
import PropTypes from 'prop-types';
import { Parallax } from 'react-parallax';

import Typography from '@material-ui/core/Typography';
import SectionHeader from '../components/common/SectionHeader';
import GridGallery from '../components/gallery/GridGallery';
import Carousel from '../components/gallery/Carousel';
import Spacer from '../components/common/Spacer';
import BoxContainer from '../components/layout/BoxContainer';

const styles = {
	parallaxInnerContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: '500px',
		justifyContent: 'center'
	},
	parallaxTitle: {
		textShadow: '5px 5px 5px black',
		color: 'white'
	}
}
const Home = (props) => {

	return (
		<div>
			<Parallax
				blur={.8}
				bgImage={require('../images/battlefield-5-banner.jpg')}
				bgImageAlt="battlefield 5"
				strength={-200}
			>
				<div
					style={styles.parallaxInnerContainer}
				>
					<Typography variant="h4" align="center" style={styles.parallaxTitle}>
						<b>Welcome!</b><br />
						<b>Find the right game for the right price here, at Warp Zone.</b>
					</Typography>
				</div>
			</Parallax>
			<Spacer />
			<BoxContainer>
				<SectionHeader title="Popular Games Right Now" />
				<GridGallery />
			</BoxContainer>
			<Spacer />
			<Carousel />
			<Spacer />
			
		</div>
	);
}

Home.propTypes = {

};

export default Home;
