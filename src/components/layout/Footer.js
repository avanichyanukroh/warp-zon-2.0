import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

const styles = {
    githubLogo: {
        display: 'inline-block',
        height: '30px',
        width: 'auto',
        filter: 'invert(100%)',
    }
}
class Footer extends PureComponent {
    render() {
        return (
            <div style={{ background: '#212121', padding: '8px' }}>
                <Grid container spacing={16} style={{ padding: '8px' }}>
					<Grid item xs={12} sm={4} md={4}>
                    <a href="https://github.com/avanichyanukroh/warp-zone-2.0" rel="noopener noreferrer" target="_blank">
                        <img
                            style={styles.githubLogo}
                            src="http://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png"
                            alt="github link"
                        />
                    </a>
					</Grid>
					<Grid item xs={12} sm={4} md={4}>
						<span style={{ color: 'white' }}>Powered By: &nbsp;
                            <a
                                style={{ textDecoration: 'none', color: '#f9ca24' }}
                                href="https://api-docs.igdb.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                IGDB.com
                            </a>
                        </span>
					</Grid>
					<Grid item xs={12} sm={4} md={4}>
						<span style={{ color: 'white' }}>Copyrights &copy; 2019 Anawin Vanichyanukroh. All Rights Reserved</span>
					</Grid>
				</Grid>
            </div>
        );
    }
}


Footer.propTypes = {
    
};


export default Footer;
