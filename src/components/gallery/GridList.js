import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import SectionHeader from '../common/SectionHeader';

import { getComingSoons, getHighRatings, getMostAnticipated } from '../../redux/actions';
import GridListItem from './GridListItem';

export class GridList extends Component {
    
    componentDidMount() {
        // this.props.dispatch(getComingSoons());
        // this.props.dispatch(getHighRatings());
        // this.props.dispatch(getMostAnticipated());
    }

    render() {
        const { comingSoons, highRatings, mostAnticipated } = this.props;
        console.log(comingSoons);
        return (
            <Grid container spacing={16}>
                
                <Grid item xs={12} sm={12} md={4}>
                    <SectionHeader title="Coming Soon" />
                    {comingSoons
                        ? comingSoons.map((item, index) => <GridListItem key={index} item={item} />)
                        : null
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <SectionHeader title="Recent High Ratings" />
                    {highRatings
                        ? highRatings.map((item, index) => <GridListItem key={index} item={item} />)
                        : null
                    }
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <SectionHeader title="Most Anticipated" />
                    {mostAnticipated
                        ? mostAnticipated.map((item, index) => <GridListItem key={index} item={item} />)
                        : null
                    }
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => ({
    comingSoons: state.comingSoons,
    highRatings: state.highRatings,
    mostAnticipated: state.mostAnticipated
});

export default connect(mapStateToProps)(GridList);
