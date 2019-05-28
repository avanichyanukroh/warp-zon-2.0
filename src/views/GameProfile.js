import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import queryString from 'query-string';

import { Grid, Typography } from '@material-ui/core';
import BoxContainer from '../components/layout/BoxContainer';
import { StarRate } from '@material-ui/icons';
import Info from '../components/gameProfile/Info';
import ImageCarousel from '../components/gallery/ImageCarousel';
import SectionHeader from '../components/common/SectionHeader';
import { ClipLoader } from 'react-spinners';

import { loadGameProfile, getGameProfile } from '../redux/actions';

const styles = {
    gridWrapperCover: {
        background: 'white',
        borderRadius: '4px',
        padding: '8px',
        boxShadow: '0 0 1px gray'
    },
    gridWrapper: {
        background: 'white',
        borderRadius: '4px',
        padding: '16px',
        boxShadow: '0 0 1px gray'
    },
    gameTitleHeader: {
        color: 'white',
        fontWeight: 600,
        padding: '8px',
        textAlign: 'center',
        textShadow: '4px 4px 5px black',
        margin: '0 auto 16px'
    },
    iFrameContainer: {
        position: 'relative',
        minHeight: '240px',
        height: '100%',
        width: '100%',
        background: 'black',
        borderRadius: '4px',
        padding: '8px',
        boxShadow: '0 0 1px gray'
    },
    iFrame: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '-10',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        WebkitMaskImage:'-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))'
    },
    backgroundOverlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: '-9',
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0))'
    },
    gameCoverContainer: {
        position: 'relative',
        left: '-8px',
        top: '-8px',
        height: 'auto',
        width: 'calc(100% + 16px)',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    gameCoverImage: {
        objectFit: 'cover',
        width: '100%',
        height: 'auto',
        borderRadius: '4px 4px 0 0'
    },
    gameCoverDescriptionContainer: {
        fontSize: '14px'
    },
    itemRatingValue: {
        display: 'inline-block',
        position: 'relative',
        marginTop: '-18px',
        marginBottom: '4px',
        marginLeft: '5px',
        fontSize: '24px',
        fontWeight: 600
    },
    starIcon: {
        position: 'relative',
        top: '10px',
        left: 0,
        fontSize: '40',
        color: '#f9ca24'
    },
    resultText : {
        fontSize: '14px',
        marginBottom: '8px'
    },
    ageRatingImage: {
        height: '120px',
        widght: 'auto'
    },
    iFrameAltImage: {
        objectFit: 'cover',
        width: '100%',
        height: '100%'
    }
}

const ageRatingURL = {
	1: "http://www.askaboutgames.com/wp-content/uploads/2017/09/age-3-black.jpg",
	2: "http://www.askaboutgames.com/wp-content/uploads/2017/09/age-7-black-1.jpg",
	3: "http://www.askaboutgames.com/wp-content/uploads/2017/09/age-12-black.jpg",
	4: "http://www.askaboutgames.com/wp-content/uploads/2017/09/age-16-black.jpg",
    5: "http://www.askaboutgames.com/wp-content/uploads/2017/09/age-18-black.jpg",
	6: "http://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/b/b5/ESRB-ver2013_RP.png",
	7: "http://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/8/8a/ESRB-ver2013_eC.png/240px-ESRB-ver2013_eC.png",
	8: "http://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/6/63/ESRB-ver2013_E.png/240px-ESRB-ver2013_E.png",
	9: "http://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/a/a3/ESRB-ver2013_E10-Plus.png/240px-ESRB-ver2013_E10-Plus.png",
	10: "http://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/b/bf/ESRB-ver2013_T.png/240px-ESRB-ver2013_T.png",
	11: "http://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/d/d5/ESRB-ver2013_M.png/240px-ESRB-ver2013_M.png",
	12: "http://oyster.ignimgs.com/mediawiki/apis.ign.com/ratings/thumb/f/f9/ESRB-ver2013_Ao.png/240px-ESRB-ver2013_Ao.png"
};

class GameProfile extends Component {

    componentDidMount() {
        const parsed = queryString.parse(this.props.location.search);
        const gameId = parsed.id;
        this.props.dispatch(getGameProfile(gameId));
    }

    componentWillUnmount() {
        this.props.dispatch(loadGameProfile(null));
    }

    render() {
        const { gameProfile } = this.props;
        if (!gameProfile) {
            return (
                <div style={{ minHeight: '100vh', marginTop: '80px' }}>
                    <div
                        style={{
                            display: 'block',
                            margin: '20px auto',
                            textAlign: 'center'
                        }}
                    >
                        <ClipLoader
                            sizeUnit={"px"}
                            size={36}
                            color={'#4547E6'}
                        />
                    </div>
                </div>
            );
        }
        else {
            return (
                <div style={{ minHeight: '100vh', marginTop: '80px', padding: '8px' }}>
                    <BoxContainer>
                        <Typography variant="h3" align="center">
                            <div className="header-text" style={styles.gameTitleHeader}>{gameProfile[0].name}</div>
                        </Typography>
                        <Grid container spacing={16} style={{ marginBottom: '8px' }}>
                            <Grid item xs={12} sm={3} md={3}>
                                <div style={styles.gridWrapperCover}>
                                    <div style={styles.gameCoverContainer}>
                                        <img
                                            src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${gameProfile[0].cover.image_id}.jpg`}
                                            alt="game cover"
                                            style={styles.gameCoverImage}
                                        />
                                    </div>
                                    <div style={styles.gameCoverDescriptionContainer}>
                                        <Typography variant="body1" style={styles.itemRatingValue}>
                                        {
                                            gameProfile[0].rating
                                            ? (Math.floor(gameProfile[0].rating) / 10)
                                            : "NR"
                                        }
                                            <StarRate style={styles.starIcon} />
                                        </Typography>
                                        <div style={styles.resultText}>
                                            <b>Genre: </b>
                                            {gameProfile[0].genres.map((genre, index) => {
                                                if (index === 0) {
                                                    return <span key={index}>{genre.name}</span>
                                                }
                                                else {
                                                    return <span key={index}>, {genre.name}</span>
                                                }
                                            })}
                                        </div>
                                        <div style={styles.resultText}>
                                            <b>Platform: </b>
                                            {gameProfile[0].platforms.map((platform, index) => {
                                                if ((gameProfile[0].platforms.length - 1) === index) {
                                                    return (
                                                        <span
                                                            key={index}
                                                        >
                                                            {platform.abbreviation}
                                                        </span>
                                                    )
                                                }
                                                else {
                                                    return (
                                                        <span
                                                            key={index}
                                                        >
                                                            {platform.abbreviation},&nbsp;
                                                        </span>
                                                    )
                                                }
                                                
                                            })}
                                        </div>
                                        <div style={styles.resultText}>
                                            <b>Release Date: </b>
                                            <span>{moment.unix(gameProfile[0].first_release_date).format('MMMM Do YYYY')}</span>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={9} md={9}>
                                <div style={styles.iFrameContainer}>
                                    {
                                        gameProfile[0].videos
                                            ? <iframe 
                                                title="breath of the wild"
                                                allowFullScreen="allowfullscreen"
                                                src={`https://www.youtube.com/embed/${gameProfile[0].videos[0].video_id}?autoplay=1&mute=1`}
                                                frameBorder="0"
                                                autoFocus
                                                style={styles.iFrame}
                                            >
                                            </iframe>
                                            : (
                                                gameProfile[0].screenshots
                                                ? <img
                                                    src={`https://images.igdb.com/igdb/image/upload/t_screenshot_med_2x/${gameProfile[0].screenshots[0].image_id}.jpeg`}
                                                    alt='game screenshot'
                                                    style={styles.iFrameAltImage}
                                                />
                                                : <div style={{ height: '100%', width: '100%', color: 'lightgray', textAlign: 'center' }}>No video available</div>
                                            )
                                    }
                                    
                                </div>
                            </Grid>
                        </Grid>
                        <Grid container spacing={16}>
                            <Grid item xs={12} sm={8} md={8}>
                            <div style={styles.gridWrapper}>
                                <div style={styles.resultText}>
                                    {gameProfile[0].summary.split('\n').map((item, key) => {
                                        return <span key={key}>{item}<br/></span>
                                    })}
                                </div>
                                <div style={{ marginBottom: '25px' }} />
                                <SectionHeader title="Media" />
                                {
                                    gameProfile[0].screenshots
                                    ? <ImageCarousel items={gameProfile[0].screenshots} />
                                    : <div>No Media Currently Available</div>
                                }
                                
                            </div>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <div style={styles.gridWrapper}>
                                    <Info
                                        name="Developers"
                                        result={gameProfile[0].involved_companies
                                            ? gameProfile[0].involved_companies[0].company.name
                                            : 'Unavailable'}
                                    />
                                    <Info
                                        name="Player Perspective"
                                        results={gameProfile[0].player_perspectives
                                            ? gameProfile[0].player_perspectives
                                            : [{name: 'Unavailable'}]}
                                    />
                                    <Info
                                        name="Game Modes"
                                        results={gameProfile[0].game_modes
                                            ? gameProfile[0].game_modes
                                            : [{name: 'Unavailable'}]}
                                    />
                                    <Info
                                        name="Genres"
                                        results={gameProfile[0].genres
                                            ? gameProfile[0].genres
                                            : [{name: 'Unavailable'}]}
                                    />
                                    <Info
                                        name="Themes"
                                        results={gameProfile[0].themes
                                            ? gameProfile[0].themes
                                            : [{name: 'Unavailable'}]}
                                    />
                                    <Info
                                        name="Game Engine"
                                        results={gameProfile[0].game_engines
                                            ? gameProfile[0].game_engines
                                            : [{name: 'Unavailable'}]}
                                    />
                                    <Info
                                        name="Series"
                                        result={gameProfile[0].collection
                                            ? gameProfile[0].collection.name
                                            : 'None'}
                                    />
                                    {/* <Info name="Franchise" result={gameProfile[0].franchise.name} /> */}
                                    <Grid container spacing={16}>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <div style={styles.resultText}>
                                                <b>Release Dates: </b>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6}>
                                            {gameProfile[0].release_dates.map((releaseDate, index) => (
                                                <div style={styles.resultText} key={index}>
                                                    <span>{moment.unix(releaseDate.date).format('MMM Do YYYY')} - {releaseDate.platform.abbreviation}</span>
                                                </div>
                                            ))}
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={16}>
                                        <Grid item xs={6} sm={6} md={6}>
                                            <div style={styles.resultText}>
                                                <b>Age Rating: </b>
                                            </div>
                                        </Grid>
                                        <Grid item xs={6} sm={6} md={6}>
                                            {gameProfile[0].age_ratings
                                            ? gameProfile[0].age_ratings.map((age_rating, index) => (
                                                <div style={styles.resultText} key={index}>
                                                    <img src={ageRatingURL[age_rating.rating]} alt="Age Rating" style={styles.ageRatingImage} />
                                                </div>
                                            ))
                                            : <div style={styles.resultText}>
                                            <img src={ageRatingURL[6]} alt="Age Rating" style={styles.ageRatingImage} />
                                        </div>}
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                        </Grid>
                    </BoxContainer>
                    {
                        gameProfile[0].screenshots
                        ? <img
                            src={`https://images.igdb.com/igdb/image/upload/t_1080p/${gameProfile[0].screenshots[0].image_id}.jpeg`}
                            alt="breath of the wild background"
                            style={styles.backgroundImage}
                            className="fade-in"
                        />
                        : null
                    }
                    
                    <div style={styles.backgroundOverlay} />
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    gameProfile: state.gameProfile
});

export default connect(mapStateToProps)(GameProfile);