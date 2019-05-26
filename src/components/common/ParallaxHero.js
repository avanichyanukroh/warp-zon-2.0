import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Parallax } from 'react-parallax';
import Typography from '@material-ui/core/Typography';

const styles = (height) => ({
	parallaxInnerContainer: {
		display: 'flex',
		flexDirection: 'column',
		height: height,
        justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.3)'
	},
	parallaxTitle: {
		textShadow: '1px 1px 3px black',
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
					<Typography variant="h5" align="center" style={styles().parallaxTitle}>
                        <div className="brand-text" style={{ fontSize: '38px', color: '#f9ca24', fontWeight: 600, marginBottom: '8px' }}>Warp Zone</div>
                        <div style={{ fontStyle: 'italic' }}>{this.props.text}</div>
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
