import React from 'react';
import PropTypes from 'prop-types';
import { Parallax, Background } from 'react-parallax';
import { withStyles } from '@material-ui/core/styles';

import SectionHeader from '../components/common/SectionHeader';
import Grid from '@material-ui/core/Grid';

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
		<div style={{height: '1500px'}}>
			<Parallax
				blur={.5}
				bgImage={require('../images/battlefield-5-banner.jpg')}
				bgImageAlt="battlefield 5"
				strength={-200}
			>
				{/* Welcome! 
				Find the right game for the right price here, at Warp Zone. */}
				<div style={{ height: '500px' }} />
			</Parallax>
			
			<div style={{height: '200px'}} />
			<div className={classes.root}>
			<SectionHeader/>
				<Grid container spacing={16} style={{marginBottom:'8px'}}>
					<Grid item xs={12} sm={4} md={4} style={{height: '200px'}}>
						<div style={{height: '100%', width: '100%', background: 'blue'}}>1</div>
					</Grid>
					<Grid item xs={12} sm={4} md={4} style={{height: '200px'}}>
						<div style={{height: '100%', width: '100%', background: 'blue'}}>2</div>
					</Grid>
					<Grid item xs={12} sm={4} md={4} style={{height: '200px'}}>
						<div style={{height: '100%', width: '100%', background: 'blue'}}>3</div>
					</Grid>
				</Grid>
				<Grid container spacing={16}>
					<Grid item xs={12} sm={12} md={8} style={{height: '400px'}}>
						<div style={{height: '100%', width: '100%', background: 'blue'}}>4</div>
					</Grid>
					<Grid item xs={12} sm={12} md={4} style={{height: '200px'}}>
						<Grid container spacing={16}>
							<Grid item xs={12} sm={6} md={12} style={{height: '200px'}}>
								<div style={{height: '100%', width: '100%', background: 'blue'}}>5</div>
							</Grid>
							<Grid item xs={12} sm={6} md={12} style={{height: '200px'}}>
								<div style={{height: '100%', width: '100%', background: 'blue'}}>6</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

Home.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
