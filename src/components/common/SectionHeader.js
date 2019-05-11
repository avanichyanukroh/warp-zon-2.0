import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

class SectionHeader extends PureComponent {
    render() {
        return (
            <div style={{textAlign: "left"}}>
                    <Typography variant="h5" align="left">
                        <b>Popular Games Right Now</b>
                    </Typography>
                    <div
                    style={{
                        background: 'linear-gradient(to right, #009fff, #ec2f4b)',
                        height: '3px',
                        width: '85px',
                        display: 'inline-block',
                        marginBottom: '8px',
                        borderRadius: '15px'
                    }}
                />
            </div>
        );
    }
}


SectionHeader.propTypes = {
    classes: PropTypes.object.isRequired
};


export default SectionHeader;
