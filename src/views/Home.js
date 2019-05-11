import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import SectionHeader from '../components/common/SectionHeader';
import GridGallery from '../components/gallery/GridGallery';
import Carousel from '../components/gallery/Carousel';

const styles = theme => ({
	root: {
		flexGrow: 1,
		margin: '0 auto',
		maxWidth: '1200px',
		paddingLeft: '20px',
		paddingRight: '20px'
	},
	paper: {
		padding1: theme.spacing.unit * 2,
		textAlign: 'center',
		color: theme.palette.text.secondary,
	},
});

const Home = (props) => {
	const { classes } = props;

	return (
		<div>
			<Parallax
				blur={.8}
				bgImage={require('../images/battlefield-5-banner.jpg')}
				bgImageAlt="battlefield 5"
				strength={-200}
			>
				<div style={{ display: 'flex', flexDirection: 'column', height: '500px', border: '1px solid black', justifyContent: 'center' }}>
					<Typography variant="h4" align="center" style={{ textShadow: '5px 5px 5px black', color: 'white' }}>
						<b>Welcome!</b><br />
						<b>Find the right game for the right price here, at Warp Zone.</b>
					</Typography>
				</div>
			</Parallax>
			
			<div style={{ height: '100px' }} />

			<div className={classes.root}>
			<SectionHeader title="Popular Games Right Now" />
			<GridGallery />
			</div>
			<div style={{ height: '100px' }} />

			<Carousel />

			<div style={{ height: '100px' }} />
		</div>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
