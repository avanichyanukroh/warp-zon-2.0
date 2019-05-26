import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import { Grid, Typography } from '@material-ui/core';
import { StarRate } from '@material-ui/icons';
import { Link } from 'react-router-dom';

const styles = {
    gameCoverContainer: {
        height: '100%',
        width: '100%',
        padding: '8px'
    },
    gameCoverImage: {
        objectFit: 'cover',
        width: '100%',
        height: 'auto',
        borderRadius: '4px',
        boxShadow: '1px 1px 2px lightgray'
    },
    gameDescriptionContainer: {
        height: '100%',
        width: '100%',
        padding: '8px'
    },
    platform: {
        border: '1px solid gray',
        borderRadius: '4px',
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
        left: 0,
        color: '#f9ca24'
    }
}

class SearchResultItem extends PureComponent {
    render() {
        const { gameSearchResult } = this.props;

        return (
            <Grid container spacing={0} style={{ marginBottom:'8px' }}>
                <Grid item xs={3} sm={3} md={3}>
                    <div style={styles.gameCoverContainer}>
                        <Link to={`/game-profile?name=${gameSearchResult.name}&id=${gameSearchResult.id}`}>
                        {
                            gameSearchResult.cover
                            ? <img
                                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${gameSearchResult.cover.image_id}.jpg`}
                                alt="game cover"
                                style={styles.gameCoverImage}
                            />
                            : <div
                                style={{
                                    background: 'linear-gradient(to right, #485563, #29323c)',
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: '4px',
                                    boxShadow: '1px 1px 2px lightgray'
                                }}
                            />
                        }
                        </Link>
                    </div>
                </Grid>
                <Grid item xs={9} sm={9} md={9}>
                    <div style={styles.gameDescriptionContainer}>
                        <Typography variant="subtitle1" gutterBottom>
                            <Link
                                to={`/game-profile?name=${gameSearchResult.name}&id=${gameSearchResult.id}`}
                                style={{ textDecoration: 'none', color: 'black' }}
                            >

                                {gameSearchResult.name}
                                {
                                    gameSearchResult.release_dates
                                    ? <span> ({moment.unix(gameSearchResult.release_dates[0].date).format('YYYY')})</span>
                                    : null
                                }
                            </Link>
                        </Typography>
                        <Typography variant="body1">
                            <span>{gameSearchResult.involved_companies
                                ? gameSearchResult.involved_companies[0].company.name
                                : 'Not Available'}</span>
                        </Typography>
                        {gameSearchResult.platforms
                            ? gameSearchResult.platforms.map((platform, index) => (
                                <span
                                    style={styles.platform}
                                    key={index}
                                >
                                    {platform.abbreviation}
                                </span>
                            ))
                            : <span
                            style={styles.platform}
                        >
                            N/A
                        </span>}

                        <Typography variant="body1" style={styles.itemRatingValue}>
                            {
                                gameSearchResult.rating
                                ? (Math.floor(gameSearchResult.rating) / 10)
                                : "NR"
                            }
                            <StarRate style={styles.starIcon} />
                        </Typography>

                        <Typography variant="body1" style={{ marginTop: '16px' }}>
                            {gameSearchResult.summary
                                ? gameSearchResult.summary.slice(0, 350)
                                : null}
                            {gameSearchResult.summary
                                ? <span>...
                                        <Link
                                            to={`/game-profile?name=${gameSearchResult.name}&id=${gameSearchResult.id}`}
                                            style={{ textDecoration: 'none', color: '#f9ca24', fontWeight: 600 }}
                                        >
                                            Read more
                                        </Link>
                                    </span>
                                : null} 
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
