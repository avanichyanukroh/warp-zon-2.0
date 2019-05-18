import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Grid, Typography } from '@material-ui/core';
import { StarRate } from '@material-ui/icons';

const styles = {
    gameCoverContainer: {
        height: '100%',
        width: '100%',
        padding: '8px'
    },
    gameCoverImage: {
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        borderRadius: '10px',
        boxShadow: '1px 1px 2px lightgray'
    },
    gameDescriptionContainer: {
        height: '100%',
        width: '100%',
        padding: '8px'
    },
    platform: {
        border: '1px solid gray',
        borderRadius: '3px',
        padding: '2px 6px',
        marginRight: '5px',
        fontSize: '12px'
    },
    itemRatingValue: {
        display: 'inline',
        position: 'relative',
        marginLeft: '5px'
    },
    starIcon: {
        position: 'relative',
        top: '6px',
        left: 0
    }
}

class SearchResultItem extends PureComponent {
    render() {
        const { gameSearchResult } = this.props;

        return (
            <Grid container spacing={0} style={{ marginBottom:'8px' }}>
                <Grid item xs={3} sm={3} md={3}>
                    <div style={styles.gameCoverContainer}>
                        <img
                            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${gameSearchResult.cover.image_id}.jpg`}
                            alt="game cover"
                            style={styles.gameCoverImage}
                        />
                    </div>
                </Grid>
                <Grid item xs={9} sm={9} md={9}>
                    <div style={styles.gameDescriptionContainer}>
                        <Typography variant="subtitle1" gutterBottom>
                            <span style={{ cursor: 'pointer' }}>
                                {gameSearchResult.name} ({moment(gameSearchResult.first_release_date).format('YYYY')})
                            </span>
                        </Typography>
                        <Typography variant="body1">
                            <span>{gameSearchResult.involved_companies[0].company.name}</span>
                        </Typography>
                        {gameSearchResult.platforms.map((platform, index) => (
                            <span
                                style={styles.platform}
                                key={index}
                            >
                                {platform.abbreviation}
                            </span>
                        ))}

                        <Typography variant="body1" style={styles.itemRatingValue}>
                            {(Math.floor(gameSearchResult.rating) / 10)}
                            <StarRate color="primary" style={styles.starIcon} />
                        </Typography>

                        <Typography variant="body1" style={{ marginTop: '16px' }}>
                            {gameSearchResult.summary.slice(0, 350)} ...<a href="#"> Read more</a>
                        </Typography>

                    </div>
                </Grid>
            </Grid>
        );
    }
}


SearchResultItem.propTypes = {
    gameSearchResult: PropTypes.object
};


export default SearchResultItem;
