import React from 'react';
// import PropTypes from 'prop-types';

import SectionHeader from '../components/common/SectionHeader';
import GridGallery from '../components/gallery/GridGallery';
import Carousel from '../components/gallery/Carousel';
import Spacer from '../components/common/Spacer';
import BoxContainer from '../components/layout/BoxContainer';
import heroImage from '../images/battlefield-5-banner.jpg';
import ParallaxHero from '../components/common/ParallaxHero';

const Home = () => {

	return (
		<div>
            <ParallaxHero
                background={heroImage}
                height="500px"
                textLine1="Welcome!"
                textLine2="Find the right game for the right price here, at Warp Zone."
            />
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
