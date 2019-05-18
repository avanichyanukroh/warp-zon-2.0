import React, { Component } from 'react';

import Checkbox from '@material-ui/core/Checkbox';

const styles = {
    filterContainer: {
        padding: '8px'
    },
    checkBoxDescription: {
        fontSize: '14px'
    }
}
class Filter extends Component {
    state = {
        checkedA: true,
        checkedB: true
      };
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
      };

    render() {
        return (
            <div style={styles.filterContainer}>
                <div>
                    <Checkbox
                        checked={this.state.checkedA}
                        onChange={this.handleChange('checkedA')}
                        value="checkedA"
                        color="primary"
                    />
                    <span style={styles.checkBoxDescription}>Include Editions</span>
                </div>
                <div>
                    <Checkbox
                        checked={this.state.checkedB}
                        onChange={this.handleChange('checkedB')}
                        value="checkedB"
                        color="primary"
                    />
                    <span style={styles.checkBoxDescription}>Include DLCs/Bundles</span>
                </div>
            </div>
        );
    }
}

export default Filter;
