import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';


class Footer extends PureComponent {
    render() {
        return (
            <div style={{ background: '#212121' }}>
                <Grid container spacing={16} style={{ margin:'8px', height: '100px' }}>
					<Grid item xs={12} sm={4} md={4}>
						<span style={{ color: 'white' }}>Github</span>
					</Grid>
					<Grid item xs={12} sm={4} md={4}>
						<span style={{ color: 'white' }}>Links</span>
					</Grid>
					<Grid item xs={12} sm={4} md={4}>
						<span style={{ color: 'white' }}>Copy Right</span>
					</Grid>
				</Grid>
            </div>
        );
    }
}


Footer.propTypes = {
    
};


export default Footer;
