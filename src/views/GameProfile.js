import React, { Component } from 'react';
import { connect } from 'react-redux';

import Typography from '@material-ui/core/Typography';
import Spacer from '../components/common/Spacer';
import Grid from '@material-ui/core/Grid';
import BoxContainer from '../components/layout/BoxContainer';
import backgroundImage from '../images/breath-of-the-wild-wallpaper.jpg';

class GameProfile extends Component {

    render() {
        return (
            <div style={{ minHeight: '100vh' }}>
                <BoxContainer>
                    <Typography variant="h3" align="left">
                        <b>The Legend of Zelda: Breath of the Wild</b>
                    </Typography>
                    <div
                        style={{
                            background: 'linear-gradient(to right, #009fff, #ec2f4b)',
                            height: '3px',
                            width: '185px',
                            display: 'inline-block',
                            marginBottom: '8px',
                            borderRadius: '15px'
                        }}
                    />
                    <Spacer />
                    <Grid container spacing={16} style={{ }}>
                        <Grid item xs={12} sm={8} md={8} style={{ }}>
                            <div style={{ position: 'relative', height: '480px', width: '100%', background: 'white' }}>
                                <iframe 
                                    title="breath of the wild"
                                    allowFullScreen="allowfullscreen"
                                    src="https://www.youtube.com/embed/zw47_q9wbBE?autoplay=1&mute=1"
                                    frameborder="0"
                                    autoFocus
                                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                >
                                </iframe>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} style={{ }}>
                            <div style={{ height: '100%', width: '100%', background: 'white' }}>2</div>
                        </Grid>
                    </Grid>
                    <Grid container spacing={16} style={{ }}>
                        <Grid item xs={12} sm={8} md={8} style={{ }}>
                            <div style={{ height: '100%', width: '100%', background: 'white' }}>
                                3
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} style={{ }}>
                            <div style={{ height: '100%', width: '100%', background: 'white' }}>4</div>
                        </Grid>
                    </Grid>
                </BoxContainer>
                <img
                    src={backgroundImage}
                    alt="breath of the wild background"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        zIndex: '-10',
                        width: '100%',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center center',
                        WebkitMaskImage:'-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,0.5)), to(rgba(0,0,0,0)))',
                        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0))'
                    }}
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
                23688,
                23691
            ],
            "aggregated_rating": 81.4,
            "aggregated_rating_count": 13,
            "alternative_names": [
                23479
            ],
            "artworks": [
                6401,
                6722,
                6723
            ],
            "category": 0,
            "collection": 22,
            "cover": 70935,
            "created_at": 1543881600,
            "external_games": [
                1686154,
                1698319
            ],
            "first_release_date": 1555977600,
            "game_engines": [
                351
            ],
            "game_modes": [
                1,
                2
            ],
            "genres": [
                4
            ],
            "hypes": 8,
            "involved_companies": [
                77358,
                77359,
                77360
            ],
            "keywords": [
                109,
                1308
            ],
            "name": "Mortal Kombat 11",
            "platforms": [
                6,
                48,
                49,
                130
            ],
            "player_perspectives": [
                4
            ],
            "popularity": 1603.812780046162,
            "pulse_count": 805,
            "rating": 79.75413072437209,
            "rating_count": 12,
            "release_dates": [
                161924,
                161925,
                161926,
                161937
            ],
            "screenshots": [
                268601,
                268602,
                268603,
                268604,
                268605,
                268606,
                268607,
                298938,
                298939,
                298940,
                298941,
                298942
            ],
            "similar_games": [
                54775,
                76064,
                96217,
                101608,
                103282,
                103288,
                103369,
                106987,
                109277,
                112589
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
                1,
                17
            ],
            "total_rating": 80.57706536218605,
            "total_rating_count": 25,
            "updated_at": 1557619200,
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