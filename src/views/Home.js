import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

import SectionHeader from '../components/common/SectionHeader';
import GridGallery from '../components/gallery/GridGallery';
import Carousel from '../components/gallery/Carousel';
import Spacer from '../components/common/Spacer';
import BoxContainer from '../components/layout/BoxContainer';
import heroImage from '../images/battlefield-5-banner.jpg';
import ParallaxHero from '../components/common/ParallaxHero';

class Home extends Component {
    render() {
        const { popularGames } = this.props;
        return (
            <div>
                <ParallaxHero
                    background={heroImage}
                    height="500px"
                    textLine1="Welcome!"
                    textLine2="Find the right game for the right price here, at Warp Zone."
                />
                <Spacer />
                <BoxContainer>
                    <SectionHeader title="Popular Games Right Now" />
                    <GridGallery items={popularGames} />
                </BoxContainer>
                <Spacer />
                <Carousel items={popularGames} />
                <Spacer />
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    popularGames: [
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
            {
                "id": 4,
                "name": "Fighting"
            }
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
            {
                "id": 6,
                "abbreviation": "PC"
            },
            {
                "id": 7,
                "abbreviation": "PS4"
            }
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
            {
                "id": 268601,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r95",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r95.jpg",
                "width": 1920
            },
            {
                "id": 268602,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r96",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r96.jpg",
                "width": 1920
            },
            {
                "id": 268603,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r97",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r97.jpg",
                "width": 1920
            },
            {
                "id": 268604,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r98",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r98.jpg",
                "width": 1920
            },
            {
                "id": 268605,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r99",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r99.jpg",
                "width": 1920
            },
            {
                "id": 268606,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9a",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9a.jpg",
                "width": 1920
            },
            {
                "id": 268607,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9b",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9b.jpg",
                "width": 1920
            },
            {
                "id": 298938,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enu",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enu.jpg",
                "width": 1920
            },
            {
                "id": 298939,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6env",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6env.jpg",
                "width": 1920
            },
            {
                "id": 298940,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enw",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enw.jpg",
                "width": 1920
            },
            {
                "id": 298941,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enx",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enx.jpg",
                "width": 1920
            },
            {
                "id": 298942,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6eny",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6eny.jpg",
                "width": 1920
            }
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
    },
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
            {
                "id": 4,
                "name": "Fighting"
            }
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
            {
                "id": 268601,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r95",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r95.jpg",
                "width": 1920
            },
            {
                "id": 268602,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r96",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r96.jpg",
                "width": 1920
            },
            {
                "id": 268603,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r97",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r97.jpg",
                "width": 1920
            },
            {
                "id": 268604,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r98",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r98.jpg",
                "width": 1920
            },
            {
                "id": 268605,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r99",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r99.jpg",
                "width": 1920
            },
            {
                "id": 268606,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9a",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9a.jpg",
                "width": 1920
            },
            {
                "id": 268607,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9b",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9b.jpg",
                "width": 1920
            },
            {
                "id": 298938,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enu",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enu.jpg",
                "width": 1920
            },
            {
                "id": 298939,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6env",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6env.jpg",
                "width": 1920
            },
            {
                "id": 298940,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enw",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enw.jpg",
                "width": 1920
            },
            {
                "id": 298941,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enx",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enx.jpg",
                "width": 1920
            },
            {
                "id": 298942,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6eny",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6eny.jpg",
                "width": 1920
            }
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
    },
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
            {
                "id": 4,
                "name": "Fighting"
            }
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
            {
                "id": 268601,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r95",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r95.jpg",
                "width": 1920
            },
            {
                "id": 268602,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r96",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r96.jpg",
                "width": 1920
            },
            {
                "id": 268603,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r97",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r97.jpg",
                "width": 1920
            },
            {
                "id": 268604,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r98",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r98.jpg",
                "width": 1920
            },
            {
                "id": 268605,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r99",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r99.jpg",
                "width": 1920
            },
            {
                "id": 268606,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9a",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9a.jpg",
                "width": 1920
            },
            {
                "id": 268607,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9b",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9b.jpg",
                "width": 1920
            },
            {
                "id": 298938,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enu",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enu.jpg",
                "width": 1920
            },
            {
                "id": 298939,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6env",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6env.jpg",
                "width": 1920
            },
            {
                "id": 298940,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enw",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enw.jpg",
                "width": 1920
            },
            {
                "id": 298941,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enx",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enx.jpg",
                "width": 1920
            },
            {
                "id": 298942,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6eny",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6eny.jpg",
                "width": 1920
            }
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
    },
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
            {
                "id": 4,
                "name": "Fighting"
            }
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
            {
                "id": 268601,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r95",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r95.jpg",
                "width": 1920
            },
            {
                "id": 268602,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r96",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r96.jpg",
                "width": 1920
            },
            {
                "id": 268603,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r97",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r97.jpg",
                "width": 1920
            },
            {
                "id": 268604,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r98",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r98.jpg",
                "width": 1920
            },
            {
                "id": 268605,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r99",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r99.jpg",
                "width": 1920
            },
            {
                "id": 268606,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9a",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9a.jpg",
                "width": 1920
            },
            {
                "id": 268607,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9b",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9b.jpg",
                "width": 1920
            },
            {
                "id": 298938,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enu",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enu.jpg",
                "width": 1920
            },
            {
                "id": 298939,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6env",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6env.jpg",
                "width": 1920
            },
            {
                "id": 298940,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enw",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enw.jpg",
                "width": 1920
            },
            {
                "id": 298941,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enx",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enx.jpg",
                "width": 1920
            },
            {
                "id": 298942,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6eny",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6eny.jpg",
                "width": 1920
            }
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
    },
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
            {
                "id": 4,
                "name": "Fighting"
            }
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
            {
                "id": 268601,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r95",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r95.jpg",
                "width": 1920
            },
            {
                "id": 268602,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r96",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r96.jpg",
                "width": 1920
            },
            {
                "id": 268603,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r97",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r97.jpg",
                "width": 1920
            },
            {
                "id": 268604,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r98",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r98.jpg",
                "width": 1920
            },
            {
                "id": 268605,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r99",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r99.jpg",
                "width": 1920
            },
            {
                "id": 268606,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9a",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9a.jpg",
                "width": 1920
            },
            {
                "id": 268607,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9b",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9b.jpg",
                "width": 1920
            },
            {
                "id": 298938,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enu",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enu.jpg",
                "width": 1920
            },
            {
                "id": 298939,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6env",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6env.jpg",
                "width": 1920
            },
            {
                "id": 298940,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enw",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enw.jpg",
                "width": 1920
            },
            {
                "id": 298941,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enx",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enx.jpg",
                "width": 1920
            },
            {
                "id": 298942,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6eny",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6eny.jpg",
                "width": 1920
            }
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
    },
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
            {
                "id": 4,
                "name": "Fighting"
            }
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
            {
                "id": 268601,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r95",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r95.jpg",
                "width": 1920
            },
            {
                "id": 268602,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r96",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r96.jpg",
                "width": 1920
            },
            {
                "id": 268603,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r97",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r97.jpg",
                "width": 1920
            },
            {
                "id": 268604,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r98",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r98.jpg",
                "width": 1920
            },
            {
                "id": 268605,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r99",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r99.jpg",
                "width": 1920
            },
            {
                "id": 268606,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9a",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9a.jpg",
                "width": 1920
            },
            {
                "id": 268607,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc5r9b",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc5r9b.jpg",
                "width": 1920
            },
            {
                "id": 298938,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enu",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enu.jpg",
                "width": 1920
            },
            {
                "id": 298939,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6env",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6env.jpg",
                "width": 1920
            },
            {
                "id": 298940,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enw",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enw.jpg",
                "width": 1920
            },
            {
                "id": 298941,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6enx",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6enx.jpg",
                "width": 1920
            },
            {
                "id": 298942,
                "alpha_channel": false,
                "animated": false,
                "game": 112916,
                "height": 1080,
                "image_id": "sc6eny",
                "url": "//images.igdb.com/igdb/image/upload/t_thumb/sc6eny.jpg",
                "width": 1920
            }
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

export default connect(mapStateToProps)(Home);
