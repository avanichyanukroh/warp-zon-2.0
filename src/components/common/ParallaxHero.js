import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Parallax } from 'react-parallax';
import Typography from '@material-ui/core/Typography';

const styles = (height) => ({
	parallaxInnerContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: height,
		justifyContent: 'center'
	},
	parallaxTitle: {
		textShadow: '5px 5px 5px black',
		color: 'white'
	}
})

class ParallaxHero extends PureComponent {
    render() {
        return (
			<Parallax
				blur={.8}
				bgImage={this.props.background}
				bgImageAlt="battlefield 5"
				strength={-200}
			>
				<div
					style={styles(this.props.height).parallaxInnerContainer}
				>
					<Typography variant="h4" align="center" style={styles().parallaxTitle}>
						<b>{this.props.textLine1}</b>
                        <br />
						<b>{this.props.textLine2}</b>
					</Typography>
				</div>
			</Parallax>
        );
    }
}


ParallaxHero.propTypes = {
    background: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    textLine1: PropTypes.string,
    textLine2: PropTypes.string
};


export default ParallaxHero;
