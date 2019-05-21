import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import { Grid, Typography } from '@material-ui/core';
import Spacer from '../components/common/Spacer';
import BoxContainer from '../components/layout/BoxContainer';
import backgroundImage from '../images/breath-of-the-wild-wallpaper.jpg';
import { StarRate } from '@material-ui/icons';

const styles = {
    gridWrapper: {
        background: 'white',
        borderRadius: '4px',
        padding: '8px',
        boxShadow: '0 0 1px gray'
    },
    headerUnderline: {
        background: 'linear-gradient(to right, #009fff, #ec2f4b)',
        height: '3px',
        width: '185px',
        display: 'inline-block',
        marginBottom: '8px',
        borderRadius: '15px'
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
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: '-10',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        WebkitMaskImage:'-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0)))',
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))'
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
        fontSize: '40'
    },
    resultText : {
        fontSize: '14px',
        marginBottom: '8px'
    }

}

class GameProfile extends Component {

    render() {
        const { gameProfile } = this.props;

        return (
            <div style={{ minHeight: '100vh', marginTop: '80px' }}>
                <BoxContainer>
                    <Typography variant="h3" align="left">
                        <b>The Legend of Zelda: Breath of the Wild</b>
                    </Typography>
                    <div
                        style={styles.headerUnderline}
                    />
                    <Spacer />
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={3} md={3}>
                            <div style={styles.gridWrapper}>
                                <div style={styles.gameCoverContainer}>
                                    <img
                                        src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${gameProfile[0].cover.image_id}.jpg`}
                                        alt="game cover"
                                        style={styles.gameCoverImage}
                                    />
                                </div>
                                <div style={styles.gameCoverDescriptionContainer}>
                                    <Typography variant="body1" style={styles.itemRatingValue}>
                                        {(Math.floor(gameProfile[0].rating) / 10)}
                                        <StarRate color="primary" style={styles.starIcon} />
                                    </Typography>
                                    <div style={styles.resultText}>
                                        <b>Genre: </b>
                                        {gameProfile[0].genres.map((genre, index) => {
                                            if (index === 0) {
                                                return <span>{genre.name}</span>
                                            }
                                            else {
                                                return <span>, {genre.name}</span>
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
                                        <span>{moment(gameProfile[0].first_release_date).format('MMMM Do YYYY')}</span>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={9} md={9}>
                            <div style={styles.iFrameContainer}>
                                <iframe 
                                    title="breath of the wild"
                                    allowFullScreen="allowfullscreen"
                                    src="https://www.youtube.com/embed/zw47_q9wbBE?autoplay=1&mute=1"
                                    frameBorder="0"
                                    autoFocus
                                    style={styles.iFrame}
                                >
                                </iframe>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16}>
                        <Grid item xs={12} sm={8} md={8}>
                        <div style={styles.gridWrapper}>
                            <div style={styles.resultText}>
                                <b>Summary: </b>
                                <span>{gameProfile[0].summary}</span>
                            </div>
                        </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                        <div style={styles.gridWrapper}>
                            
                            <div style={styles.resultText}>
                                <b>Developers: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                            <div style={styles.resultText}>
                                <b>Player Perspective: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                            <div style={styles.resultText}>
                                <b>Game Modes: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                            <div style={styles.resultText}>
                                <b>Genres: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                            <div style={styles.resultText}>
                                <b>Themes: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                            <div style={styles.resultText}>
                                <b>Game Engine: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                            <div style={styles.resultText}>
                                <b>Series: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                            <div style={styles.resultText}>
                                <b>Franchise: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                            <div style={styles.resultText}>
                                <b>Release Dates: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                            <div style={styles.resultText}>
                                <b>Age Rating: </b>
                                <span>{gameProfile[0].involved_companies[0].company.name}</span>
                            </div>
                        </div>

                        </Grid>
                    </Grid>
                </BoxContainer>
                <img
                    src={backgroundImage}
                    alt="breath of the wild background"
                    style={styles.backgroundImage}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    gameProfile: [
        {
            "id": 112916,
            "age_ratings": [
                {
                    "id": 23688
                },
                {
                    "id": 23691
                }
            ],
            "aggregated_rating": 81.2727272727273,
            "aggregated_rating_count": 15,
            "alternative_names": [
                23479
            ],
            "artworks": [
                6401,
                6722,
                6723,
                7181
            ],
            "category": 0,
            "collection": {
                "id": 22,
                "name": "Mortal Kombat"
            },
            "cover": {
                "id": 70935,
                "image_id": "co1iqf"
            },
            "created_at": 1543881600,
            "external_games": [
                1686154,
                1698319
            ],
            "first_release_date": 1555977600,
            "game_engines": [
                {
                    "id": 351,
                    "name": "Unreal Engine 3"
                }
            ],
            "game_modes": [
                {
                    "id": 1,
                    "name": "Single player"
                },
                {
                    "id": 2,
                    "name": "Multiplayer"
                }
            ],
            "genres": [
                {
                    "id": 4,
                    "name": "Fighting"
                }
            ],
            "hypes": 8,
            "involved_companies": [
                {
                    "id": 77358,
                    "company": {
                        "id": 48,
                        "name": "NetherRealm Studios"
                    }
                },
                {
                    "id": 77359,
                    "company": {
                        "id": 2546,
                        "name": "Shiver Games"
                    }
                },
                {
                    "id": 77360,
                    "company": {
                        "id": 14055,
                        "name": "Warner Bros. Interactive Entertainment"
                    }
                }
            ],
            "keywords": [
                109,
                1308
            ],
            "name": "Mortal Kombat 11",
            "platforms": [
                {
                    "id": 6,
                    "abbreviation": "PC"
                },
                {
                    "id": 48,
                    "abbreviation": "PS4"
                },
                {
                    "id": 49,
                    "abbreviation": "XONE"
                },
                {
                    "id": 130,
                    "abbreviation": "switch"
                }
            ],
            "player_perspectives": [
                {
                    "id": 4,
                    "name": "Side view"
                }
            ],
            "popularity": 1616.663442375351,
            "pulse_count": 811,
            "rating": 79.8042214128625,
            "rating_count": 15,
            "release_dates": [
                {
                    "id": 161924,
                    "date": 1555977600,
                    "platform": 48
                },
                {
                    "id": 161925,
                    "date": 1555977600,
                    "platform": 49
                },
                {
                    "id": 161926,
                    "date": 1555977600,
                    "platform": 6
                },
                {
                    "id": 161937,
                    "date": 1555977600,
                    "platform": 130
                }
            ],
            "screenshots": [
                {
                    "id": 268601,
                    "image_id": "sc5r95"
                },
                {
                    "id": 268602,
                    "image_id": "sc5r96"
                },
                {
                    "id": 268603,
                    "image_id": "sc5r97"
                },
                {
                    "id": 268604,
                    "image_id": "sc5r98"
                },
                {
                    "id": 268605,
                    "image_id": "sc5r99"
                },
                {
                    "id": 268606,
                    "image_id": "sc5r9a"
                },
                {
                    "id": 268607,
                    "image_id": "sc5r9b"
                },
                {
                    "id": 298938,
                    "image_id": "sc6enu"
                },
                {
                    "id": 298939,
                    "image_id": "sc6env"
                },
                {
                    "id": 298940,
                    "image_id": "sc6enw"
                },
                {
                    "id": 298941,
                    "image_id": "sc6enx"
                },
                {
                    "id": 298942,
                    "image_id": "sc6eny"
                }
            ],
            "similar_games": [
                {
                    "id": 54775,
                    "cover": 68196,
                    "first_release_date": 1535587200,
                    "name": "Shadows: Awakening",
                    "rating": 48.5714285714286
                },
                {
                    "id": 56967,
                    "cover": 29725,
                    "first_release_date": 1508198400,
                    "name": "Game of Thrones: Conquest",
                    "rating": 90
                },
                {
                    "id": 76064,
                    "cover": 69213,
                    "first_release_date": 1546214400,
                    "name": "KurtzPel"
                },
                {
                    "id": 96217,
                    "cover": 72919,
                    "first_release_date": 1551744000,
                    "name": "Eternity: The Last Unicorn",
                    "rating": 60
                },
                {
                    "id": 101608,
                    "cover": 69296,
                    "first_release_date": 1529366400,
                    "name": "ANIMA: GATE OF MEMORIES - THE NAMELESS CHRONICLES",
                    "rating": 60
                },
                {
                    "id": 103282,
                    "cover": 69738,
                    "first_release_date": 1577750400,
                    "name": "Sekiro: Shadows Die Twice - Collector's Edition"
                },
                {
                    "id": 103288,
                    "cover": 69084,
                    "first_release_date": 1550188800,
                    "name": "Jump Force",
                    "rating": 41.4285714285714
                },
                {
                    "id": 103369,
                    "cover": 66496,
                    "first_release_date": 1564012800,
                    "name": "Kill la Kill the Game: If"
                },
                {
                    "id": 106987,
                    "cover": 67685,
                    "first_release_date": 1577750400,
                    "name": "Torchlight Frontiers"
                },
                {
                    "id": 112589,
                    "cover": 71463,
                    "first_release_date": 1552521600,
                    "name": "Blade Arcus Rebellion from Shining"
                }
            ],
            "slug": "mortal-kombat-11",
            "summary": "Mortal Kombat is back and better than ever in the next evolution of the iconic franchise. \n \nThe all new Custom Character Variations give you unprecedented control of your fighters to make them your own. The new graphics engine showcases every skull-shattering, eye-popping moment, bringing you so close to the fight you can feel it. Featuring a roster of new and returning Klassic Fighters, Mortal Kombat's best-in-class cinematic story mode continues the epic saga over 25 years in the making.",
            "tags": [
                1,
                17,
                268435460,
                536871021,
                536872220
            ],
            "themes": [
                {
                    "id": 1,
                    "name": "Action"
                },
                {
                    "id": 17,
                    "name": "Fantasy"
                }
            ],
            "total_rating": 80.5384743427949,
            "total_rating_count": 30,
            "updated_at": 1558310400,
            "url": "https://www.igdb.com/games/mortal-kombat-11",
            "videos": [
                23616,
                24253,
                24254,
                24255,
                24256,
                24257,
                24961,
                25300,
                25655,
                25747,
                25790,
                25801
            ],
            "websites": [
                95220,
                95221,
                95222,
                95223,
                95224,
                98300
            ]
        }
    ]
});

export default connect(mapStateToProps)(GameProfile);