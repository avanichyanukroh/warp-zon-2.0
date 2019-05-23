import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';

import { Grid } from '@material-ui/core';

const styles = {
    resultText : {
        fontSize: '14px',
        marginBottom: '8px'
    }
}

class Info extends PureComponent {
    render() {
        const { name, result, results } = this.props;
        return (
            <Grid container spacing={16}>

                <Grid item xs={6} sm={6} md={6}>
                    <div style={styles.resultText}>
                        <b>{name}: </b>
                    </div>
                </Grid>
                <Grid item xs={6} sm={6} md={6}>
                    {results
                        ? (
                            results.map((result, index) => (
                            <div style={styles.resultText} key={index}>
                                <span>{result.name}</span>
                            </div>
                            ))
                        )
                        : (
                            <div style={styles.resultText}>
                                <span>{result}</span>
                            </div>
                    )}
                </Grid>
            </Grid>
        );
    }
}


Info.propTypes = {
    
};


export default Info;
