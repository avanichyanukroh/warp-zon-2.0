import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const styles = {
    sectionHeader: {
        textAlign: 'left',
        margin: '0 auto',
        maxWidth: '1200px'
    },
    underline: {
        background: 'linear-gradient(to right, #009fff, #ec2f4b)',
        height: '3px',
        width: '85px',
        display: 'inline-block',
        marginBottom: '8px',
        borderRadius: '15px'
    }
}
class SectionHeader extends PureComponent {
    render() {
        return (
            <div style={styles.sectionHeader}>
                <Typography variant="h5" align="left">
                    <b>{this.props.title}</b>
                </Typography>
                <div
                    style={styles.underline}
                />
            </div>
        );
    }
}


SectionHeader.propTypes = {
    title: PropTypes.string.isRequired
};


export default SectionHeader;
