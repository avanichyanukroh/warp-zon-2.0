import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Modal from '@material-ui/core/Modal';
import navbarLogo from '../../images/navbar-logo.png';

import { getGameSearchResults } from '../../redux/actions';

const styles = theme => ({
	root: {
        width: '100%',
	},
	grow: {
		flexGrow: 1,
	},
	paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(4),
        outline: 'none',
    },
    toolBar: {
        border: '1px solid green'
    },
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25),
		},
		marginRight: theme.spacing.unit * 2,
        marginLeft: '13px',
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing.unit * 3,
			width: 'auto',
		},
	},
	searchIcon: {
		width: '50px',
		height: '100%',
		position: 'absolute',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputRoot: {
		color: 'inherit',
		width: '100%',
	},
	inputInput: {
		paddingTop: theme.spacing.unit,
		paddingRight: theme.spacing.unit,
		paddingBottom: theme.spacing.unit,
        paddingLeft: '50px',
		transition: theme.transitions.create('width'),
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: 600,
		},
	},
	sectionDesktop: {
		display: 'none',
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	},
	sectionMobile: {
		display: 'flex',
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	},
});

class Navbar extends React.Component {
	state = {
		anchorEl: null,
        mobileMoreAnchorEl: null,
        searchQuery: '',
        redirectToSearchResults: false,
        isSignedIn: false
	};

	handleProfileMenuOpen = event => {
		this.setState({ anchorEl: event.currentTarget });
	};

	handleMenuClose = () => {
		this.setState({ anchorEl: null });
		this.handleMobileMenuClose();
	};

	handleMobileMenuOpen = event => {
		this.setState({ mobileMoreAnchorEl: event.currentTarget });
	};

	handleMobileMenuClose = () => {
		this.setState({ mobileMoreAnchorEl: null });
	};

    handleInputChange = event => {
		this.setState({
			searchQuery: event.target.value
		})
    };

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.dispatch(getGameSearchResults(this.state.searchQuery, 25));
        this.setState({
            redirectToSearchResults: true
        });
    }
    
    handleRedirectToSearchResults = () => {
        if (this.state.redirectToSearchResults) {
            this.setState({redirectToSearchResults: false})
            return <Redirect to={`/search-results?search=${this.state.searchQuery}`} />
        }
    }

    handleOpen = () => {
        this.setState({isSignedIn: true});
      };
    
    handleClose = () => {
        this.setState({isSignedIn: false});
      };

	render() {
		const { anchorEl, mobileMoreAnchorEl, searchQuery, isSignedIn } = this.state;
		const { classes } = this.props;
		const isMenuOpen = Boolean(anchorEl);
		const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

		const renderMenu = (
			<Menu
				anchorEl={anchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMenuOpen}
				onClose={this.handleMenuClose}
			>
				<MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
			</Menu>
		);

		const renderMobileMenu = (
			<Menu
				anchorEl={mobileMoreAnchorEl}
				anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
				transformOrigin={{ vertical: 'top', horizontal: 'right' }}
				open={isMobileMenuOpen}
				onClose={this.handleMenuClose}
			>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Sign in</p>
                </MenuItem>
                <MenuItem onClick={this.handleProfileMenuOpen}>
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                    <p>Profile</p>
                </MenuItem>
			</Menu>
		);
        
		return (
			<div className={classes.root}>
                {this.handleRedirectToSearchResults()}
				<AppBar position="static" style={{background: '#2C3A47'}}>
                    <div style={{margin: '0 auto 0', maxWidth: '1200px', width: '100%'}}>
					<Toolbar variant="dense" className={styles.toolBar} disableGutters>
                        <Link to="/" style={{ textDecoration: 'none', color: 'white', marginTop: 'auto' }}>
                            <img
                                src={navbarLogo}
                                alt="navbar logo"
                                style={{
                                    height: '30px',
                                    width: 'auto',
                                    marginLeft: '4px',
                                    marginRight: '4px',
                                    position: 'relative',
                                    top: '-4px'
                                }}
                            />
                        </Link>
						<div className={classes.search}>
							<div className={classes.searchIcon}>
								<SearchIcon />
							</div>
                            <form onSubmit={this.handleOnSubmit}>
							<InputBase
								placeholder="Search For Video Game…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput,
                                }}
                                value={searchQuery}
                                onChange={this.handleInputChange}
							/>
                            </form>
						</div>
						<div className={classes.grow} />
						<div className={classes.sectionDesktop}>
                            <Button style={{color: 'white' }} onClick={this.handleOpen}>Sign in</Button>
							<IconButton
								aria-owns={isMenuOpen ? 'material-appbar' : undefined}
								aria-haspopup="true"
								onClick={this.handleOpen}
								color="inherit"
							>
								<AccountCircle />
							</IconButton>
						</div>
						<div className={classes.sectionMobile}>
							<IconButton aria-haspopup="true" onClick={this.handleOpen} color="inherit">
								<MoreIcon />
							</IconButton>
						</div>
					</Toolbar>
                    <Modal
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        open={isSignedIn}
                        onClose={this.handleClose}
                        
                    >
                        <div
                            className={classes.paper}
                            style={{
                                borderRadius: '3px',
                                left: '50%',
                                top: '25%',
                                transform: 'Translate(-50%, -50%)',
                                padding: '16px'
                            }}
                        >
                            <Typography variant="h6" id="modal-title" align="center">
                                Personal Profile
                            </Typography>
                            <Typography variant="subtitle1" id="simple-modal-description" align="center">
                                Coming Soon!
                            </Typography>
                        </div>
                    </Modal>
                    </div>
				</AppBar>
				{renderMenu}
				{renderMobileMenu}
			</div>
		);
	}
}

const mapStateToProps = state => ({

});

Navbar.propTypes = {
	classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(withStyles(styles)(Navbar));