import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { StarRate } from '@material-ui/icons';

const styles = {
    itemContainer: {
        height: '100%',
        width: '100%',
        position: 'relative'
    },
    smallFrame: {
        height: '200px'
    },
    largeFrame: {
        height: '400px'
    },
    backgroundImage: {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    },
    itemDescriptionContainer: {
        position: 'absolute',
        width: '100%',
        bottom: 0,
        left: 0,
        zIndex: 20
    },
    itemDescriptionText: {
        position: 'relative',
        top: '10px',
        color: 'white',
        paddingLeft: '14px',
        textShadow: '2px 2px 2px black'
    },
    itemRatingValue: {
        position: 'relative',
        color: 'white',
        bottom: '4px',
        textShadow: '2px 2px 2px black'
    },
    starIcon: {
        position: 'relative',
        top: '10px',
        left: 0
    },
    smallFrameOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        background: 'linear-gradient(45deg, rgba(0, 159, 255, 0.35), rgba(0,0,0,0.1))',
        zIndex: 10
    },
    largeFrameOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        background: 'linear-gradient(45deg, rgba(236, 47, 75, 0.35), rgba(0,0,0,0.1))',
        zIndex: 10
    },
    smallFrameOverlayActive: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        background: 'linear-gradient(45deg, rgba(0, 159, 255, 0.6), rgba(0,0,0,0.2))',
        zIndex: 10
    },
    largeFrameOverlayActive: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        background: 'linear-gradient(45deg, rgba(236, 47, 75, 0.6), rgba(0,0,0,0.2))',
        zIndex: 10
    },
    linkOverlay: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        bottom: 0,
        left: 0,
        zIndex: 30,
        cursor: 'pointer'
    }
}

class GridGalleryItem extends Component {
    state = {
        isActive: false
    }

    handleOnMouseEnter = () => {
        this.setState({isActive: true });
    }

    handleOnMouseLeave = () => {
        this.setState({isActive: false });
    }

    render() {
        const { item, frame, xs, sm, md } = this.props;
        const { isActive } = this.state;

        return (
            <Grid item xs={xs} sm={sm} md={md} style={frame === 'large' ? styles.largeFrame : styles.smallFrame}>
                <div style={styles.itemContainer} onMouseEnter={this.handleOnMouseEnter} onMouseLeave={this.handleOnMouseLeave}>
                    <div style={styles.linkOverlay} />
                    <div
                        style={
                            frame === 'large' 
                            ? (isActive ? styles.largeFrameOverlayActive : styles.largeFrameOverlay) 
                            : (isActive ? styles.smallFrameOverlayActive : styles.smallFrameOverlay)
                        }
                    />
                    <img
                        src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${item.screenshots[0].image_id}.jpeg`}
                        alt='game screenshot'
                        style={styles.backgroundImage}
                    />
                    <div style={styles.itemDescriptionContainer}>
                        <Typography variant="h6" style={styles.itemDescriptionText}>{item.name}</Typography>
                        <Grid container spacing={0} justify="space-between">
                            <Grid item xs={6} sm={6} md={6}>
                                <Typography variant="caption" style={styles.itemDescriptionText}>
                                    {item.genres.length <= 2
                                    ? item.genres.map((genre, index) => {
                                        if (index === 0) {
                                            return genre.name;
                                        }
                                        else {
                                            return `, ${genre.name}`;
                                        }
                                    })
                                    : `${item.genres[0].name}, ${item.genres[1].name}`
                                }
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} style={{ textAlign: 'right' }}>
                                <Typography variant="h6" style={styles.itemRatingValue}>
                                    {(Math.floor(item.rating) / 10)}
                                    <StarRate color="primary" fontSize="large" style={styles.starIcon} />
                                </Typography>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Grid>
        );
    }
}

GridGalleryItem.defaultProps = {
    frame: 'small'
};

GridGalleryItem.propTypes = {
    item: PropTypes.object.isRequired,
    frame: PropTypes.string,
    xs: PropTypes.number.isRequired,
    sm: PropTypes.number.isRequired,
    md: PropTypes.number.isRequired
};

export default GridGalleryItem;
