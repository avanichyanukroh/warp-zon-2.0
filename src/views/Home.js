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
                    <GridGallery />
                </BoxContainer>
                <Spacer />
                <Carousel />
                <Spacer />
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    popularGames: [
        {
            "id": 112916,
            "name": "Mortal Kombat 11",
            "popularity": 1603.812780046162
        },
        {
            "id": 114455,
            "name": "Pacify",
            "popularity": 1056.781980616416
        },
        {
            "id": 55036,
            "name": "Anno 1800",
            "popularity": 888.6266637083227
        },
        {
            "id": 102060,
            "name": "Imperator: Rome",
            "popularity": 875.5830838431194
        },
        {
            "id": 20910,
            "name": "World War Z",
            "popularity": 810.8073397667711
        },
        {
            "id": 19561,
            "name": "Days Gone",
            "popularity": 741.3889655689097
        },
        {
            "id": 79134,
            "name": "Ancient Cities",
            "popularity": 366.2089878737771
        },
        {
            "id": 22422,
            "name": "Sexy Beach 3",
            "popularity": 345.5160132745395
        },
        {
            "id": 110737,
            "name": "The Watson-Scott Test",
            "popularity": 306.1113063249277
        },
        {
            "id": 22472,
            "name": "Artificial Academy 2",
            "popularity": 299.7273035230352
        }
    ]
});

export default connect(mapStateToProps)(Home);
