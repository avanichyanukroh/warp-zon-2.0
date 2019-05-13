import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

class GridGallery extends PureComponent {
    render() {
        return (
            <div>
                <Grid container spacing={16} style={{ marginBottom:'8px' }}>
					<Grid item xs={12} sm={4} md={4} style={{ height: '200px' }}>
						<div style={{ height: '100%', width: '100%', background: 'blue' }}>1</div>
					</Grid>
					<Grid item xs={12} sm={4} md={4} style={{ height: '200px' }}>
						<div style={{ height: '100%', width: '100%', background: 'blue' }}>2</div>
					</Grid>
					<Grid item xs={12} sm={4} md={4} style={{ height: '200px' }}>
						<div style={{ height: '100%', width: '100%', background: 'blue' }}>3</div>
					</Grid>
				</Grid>
				<Grid container spacing={16}>
					<Grid item xs={12} sm={12} md={8} style={{ height: '400px' }}>
						<div style={{ height: '100%', width: '100%', background: 'blue' }}>4</div>
					</Grid>
					<Grid item xs={12} sm={12} md={4}>
						<Grid container spacing={16}>
							<Grid item xs={12} sm={6} md={12} style={{ height: '200px' }}>
								<div style={{ height: '100%', width: '100%', background: 'blue' }}>5</div>
							</Grid>
							<Grid item xs={12} sm={6} md={12} style={{ height: '200px' }}>
								<div style={{ height: '100%', width: '100%', background: 'blue' }}>6</div>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
            </div>
        );
    }
}


GridGallery.propTypes = {
    
};


export default GridGallery;
