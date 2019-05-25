import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Grid, Hidden, Divider } from '@material-ui/core';
import BoxContainer from '../components/layout/BoxContainer';
import backgroundImage from '../images/breath-of-the-wild-wallpaper.jpg';
import SearchResultItem from '../components/search/SearchResultItem';
import SortBar from '../components/search/SortBar';
import Filter from '../components/search/Filter';  
import { ClipLoader } from 'react-spinners';

const styles = {
    backgroundImage: {
        position: 'absolute',
        top: '45px',
        left: 0,
        zIndex: '-20',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    backgroundImageEffectOverlay: {
        position: 'absolute',
        top: '45px',
        left: 0,
        zIndex: '-10',
        height: '56.25vw',
        width: '99vw',
        background: 'linear-gradient(rgba(250,250,250, .6), rgba(250,250,250, 1))',
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
    },
    gridWrapper: {
        background: 'white',
        borderRadius: '4px',
        padding: '8px',
        boxShadow: '0 0 1px gray'
    }
}
class SearchResult extends Component {
    state = {
        sortBy: null,
        isAscending: null
    }

    sortBy = (gameSearchResults) => {
        if (this.state.sortBy === null) {
            return gameSearchResults;
        }
        else {
            if (this.state.isAscending) {
                return gameSearchResults.sort((a, b) => {
                    return a[this.state.sortBy] - b[this.state.sortBy];
                })
            }
            else {
                return gameSearchResults.sort((a, b) => {
                    return b[this.state.sortBy] - a[this.state.sortBy];
                })
            }
        }
    }

    handleSortBySelection = (propertyName) => {
        if (this.state.sortBy === propertyName) {
            this.setState(prevState => ({
                isAscending: !prevState.isAscending
            }));
        }
        else {
            this.setState({
                sortBy: propertyName,
                isAscending: true
            });
        }
    }

    render() {
        const { gameSearchResults } = this.props;
        const { sortBy, isAscending } = this.state;

        if (!gameSearchResults) {
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
                    <img
                        src={backgroundImage}
                        alt="breath of the wild background"
                        style={styles.backgroundImage}
                    />
                    <div style={styles.backgroundImageEffectOverlay} />
                </div>
            );
        }
        else {
            return (
                <div style={{ minHeight: '100vh', marginTop: '80px' }}>
                    <BoxContainer>
                        <Grid container spacing={16} style={{ marginBottom:'8px' }}>
                            <Grid item xs={12} sm={12} md={8}>
                                <div style={styles.gridWrapper}>
                                    <SortBar
                                        propertyNames={['name', 'rating', 'first_release_date']}
                                        propertyDisplayNames={['TITLE', 'RATING', 'RELEASE DATE']}
                                        handleSortBySelection={this.handleSortBySelection}
                                        sortBy={sortBy}
                                        isAscending={isAscending}
                                    />
                                    <Divider variant="middle" />
                                    <div style={{ padding: '8px' }}>
                                        {`${gameSearchResults.length} results for "Query Placeholder"`}
                                    </div>
                                    {this.sortBy(gameSearchResults).map((gameSearchResult, index) => (
                                        <SearchResultItem
                                            gameSearchResult={gameSearchResult}
                                            key={index}
                                        />
                                    ))}
                                </div>
                            </Grid>
                            <Hidden smDown>
                                <Grid item xs={12} sm={4} md={4}>
                                    <div style={styles.gridWrapper}>
                                        <div style={{ margin: '8px 8px 0px', padding: '8px' }}>Games ({gameSearchResults.length})</div>
                                        <Divider variant="middle" />
                                        <Filter />
                                    </div>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </BoxContainer>
                    <img
                        src={backgroundImage}
                        alt="breath of the wild background"
                        style={styles.backgroundImage}
                        class="fade-in"
                    />
                    <div style={styles.backgroundImageEffectOverlay} />
                </div>
            );
        }
        
    }
}

const mapStateToProps = state => ({
    gameSearchResults: state.gameSearchResults
});

export default connect(mapStateToProps)(SearchResult);
