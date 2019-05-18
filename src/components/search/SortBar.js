import React, { Component } from 'react';
import Icon from '@material-ui/core/Icon';


const styles = {
    sortBarContainer: {
        padding: '8px'
    },
    sortBy: {
        padding: '8px',
        cursor: 'pointer',
        userSelect: 'none',
    },
    arrowIcon: {
        position: 'relative',
        top: '6px',
        left: 0
    }
}

class SortBar extends Component {
    render() {
        const { propertyNames, propertyDisplayNames, handleSortBySelection, sortBy, isAscending } = this.props;

        return (
            <div style={styles.sortBarContainer}>
                {propertyDisplayNames.map((propertyDisplayName, index) => (
                    <span key={index}>
                        <span
                            onClick={() => handleSortBySelection(propertyNames[index])}
                            style={styles.sortBy}
                        >
                            {propertyDisplayName} 
                                {sortBy !== propertyNames[index]
                                    ? null
                                    : (
                                        isAscending && sortBy === propertyNames[index]
                                        ? <Icon style={styles.arrowIcon}>arrow_drop_up</Icon>
                                        : <Icon style={styles.arrowIcon}>arrow_drop_down</Icon>
                                    )
                                }
                        </span>
                        <span>|</span>
                    </span>
                ))}

                {/* Icon below is used to maintain height upon appending arrow icon */}
                <Icon></Icon>
            </div>
        );
    }
}

export default SortBar;
