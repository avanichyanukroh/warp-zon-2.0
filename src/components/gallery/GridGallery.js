import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import GridGalleryItem from './GridGalleryItem';

class GridGallery extends PureComponent {
    render() {
        const { items } = this.props;
        return (
            <div>
                <Grid container spacing={16} style={{ marginBottom:'8px' }}>
                    {items.slice(0, 3).map((item, index) => (
                        <GridGalleryItem item={item} frame="small" xs={12} sm={4} md={4} key={index} />
                    ))}
				</Grid>
				<Grid container spacing={16}>
                    <GridGalleryItem item={items[3]} frame="large" xs={12} sm={12} md={8} />
					<Grid item xs={12} sm={12} md={4}>
						<Grid container spacing={16}>
                            {items.slice(4, 6).map((item, index) => (
                                <GridGalleryItem item={item} frame="small" xs={12} sm={6} md={12} key={index} />
                            ))}
						</Grid>
					</Grid>
				</Grid>
            </div>
        );
    }
}


GridGallery.propTypes = {
    items: PropTypes.array.isRequired
};


export default GridGallery;
