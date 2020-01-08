import React, { PureComponent } from 'react';

import BoxContainer from './BoxContainer';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const styles = {
    container: {
        margin: '8px auto 8px',
        maxWidth: '1200px'
    },
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

                <Grid container spacing={16} style={styles.container}>
					<Grid item xs={12} sm={4} md={4}>
                    {/* <a href="https://github.com/avanichyanukroh/warp-zone-2.0" rel="noopener noreferrer" target="_blank">
                        <img
                            style={styles.githubLogo}
                            src="http://www.stickpng.com/assets/images/5847f98fcef1014c0b5e48c0.png"
                            alt="github link"
                        />
                    </a> */}
                    	<Typography variant="caption">Powered By: &nbsp;
                            <a
                                style={{ textDecoration: 'none', color: '#009fff' }}
                                href="https://api-docs.igdb.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                IGDB.com
                            </a>
                        </Typography>
					</Grid>
					<Grid item xs={12} sm={4} md={4}>
						{/* <Typography variant="caption">Powered By: &nbsp;
                            <a
                                style={{ textDecoration: 'none', color: '#009fff' }}
                                href="https://api-docs.igdb.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                IGDB.com
                            </a>
                        </Typography> */}
					</Grid>
					<Grid item xs={12} sm={4} md={4}>
						<Typography variant="caption">Copyrights &copy; 2020 Anawin Vanichyanukroh. All Rights Reserved</Typography>
					</Grid>
				</Grid>
        );
    }
}


Footer.propTypes = {
    
};


export default Footer;
