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
import { ClipLoader } from 'react-spinners';

import { getPopularGames, getNewReleases } from '../redux/actions';
import GridList from '../components/gallery/GridList';

class Home extends Component {

    componentDidMount() {
        this.props.dispatch(getPopularGames());
        this.props.dispatch(getNewReleases());
    }

    render() {
        const { popularGames, newReleases } = this.props;

        if (!popularGames || !newReleases) {
            return (
                <div>
                    <ParallaxHero
                        background={heroImage}
                        height="500px"
                        text="DISCOVER YOUR NEXT GAME"
                    />
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
                <div>
                    <ParallaxHero
                        background={heroImage}
                        height="500px"
                        text="Discover your next game"
                    />
                    <Spacer />
                    <BoxContainer>
                        <SectionHeader title="Popular Games Right Now" />
                        <GridGallery items={popularGames} />
                    </BoxContainer>
                    <Spacer />
                    <SectionHeader title="New Releases" />
                    <Carousel items={newReleases} />
                    <Spacer />
                    <BoxContainer>
                        <GridList />
                    </BoxContainer>
                </div>
            );
        }
    }
}

const mapStateToProps = state => ({
    popularGames: state.popularGames,
    newReleases: state.newReleases
});

export default connect(mapStateToProps)(Home);
