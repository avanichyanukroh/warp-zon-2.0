import React, { Component } from 'react';
import moment from 'moment';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const styles = {
    itemContainer: {
        display: 'flex',
        justifyContent: 'flex-start',
        marginTop: '8px',
        marginBottom: '8px'
    },
    backgroundImage: {
        objectFit: 'cover',
        width: '40px',
        height: 'auto'
    },
    backgroundImageAlt: {
        objectFit: 'cover',
        width: '40px',
        height: '40px',
        background: 'linear-gradient(to bottom, #c31432, #240b36)'
    },
    titleDescWrapper: {
        display: 'inline-block',
        marginLeft: '4px'
    }
}
export class GridListItem extends Component {
    render() {
        const { item } = this.props;
        return (
            <div style={styles.itemContainer}>
                {item.cover
                    ? <img
                        src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${item.cover.image_id}.jpeg`}
                        alt='game screenshot'
                        style={styles.backgroundImage}
                    />
                    : <div style={styles.backgroundImageAlt} />
                }
                <div style={styles.titleDescWrapper}>
                    <Typography variant="body1">
                        <Link
                            to={`/game-profile?name=${item.name}&id=${item.id}`}
                            style={{ textDecoration: 'none', color: '#009fff', fontWeight: 600 }}
                        >
                            {item.name}
                        </Link>
                    </Typography>
                    <Typography variant="caption">
                        {item.first_release_date
                            ? moment.unix(item.first_release_date).utc().format('MMMM Do YYYY')
                            : item.release_dates
                                ? item.release_dates[0].date
                                    ? moment.unix(item.release_dates[0].date).utc().format('MMMM Do YYYY')
                                    : 'TBD'
                                : 'TBD'
                        }
                    </Typography>
                </div>
            </div>
        );
    }
}

export default GridListItem;
