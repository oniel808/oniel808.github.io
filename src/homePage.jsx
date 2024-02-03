import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Grid, Tabs, Tab, Hidden} from '@material-ui/core'
import NavBar from './AppBar';
import { withStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import AboutMe from './lib/aboutMe'
import Portfolio from './lib/portfolio'
import Expertise from './lib/expertise'
import Contact from './lib/contact'


const styles = theme => ({
	sideBar: {
		[theme.breakpoints.up('xs')]: {
			marginTop: 'auto',
			marginBottom: 'auto',
			position: "absolute",
			bottom: 80
		},
		"& .MuiTabs-scrollable .MuiTabs-indicator": {
			background: '#CC0D0D'
		},
		zIndex: 999
	},
	sideBarContainer: {
		position: 'relative',
	},
})
class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			viewSize: props.viewSize,
			sideBarValue: 0,
			aboutMe: true,
			portfolio: false,
			expertise: false,
			contact: false,
			gaming: false,
		}
	}
	componentWillUpdate(prevProps, prevState, snapshot) {
		if (prevProps.viewSize != prevState.viewSize)
			this.setState({ viewSize: prevProps.viewSize });
	}
	sideBarClick(e, ne) {
		this.setState({ sideBarValue: ne })
	}
	hideShow = (el, val) => {
		this.setState({ [el]: val })
	}
	render() {
		const classes = this.props.classes
		console.log('Home', this.state.viewSize)

		return (
			<React.Fragment>
				<Grid container style={{ height: '100vh' }}>

					<Hidden smDown>
						<Grid item xs={3} md={2} className={classes.sideBarContainer}>
							<Tabs
								inkBarStyle={{ background: "#000" }}
								orientation="vertical"
								variant="scrollable"
								value={this.state.sideBarValue}
								onChange={this.sideBarClick.bind(this)}
								className={classes.sideBar}
							>
								<Tab label="About Me" />
								<Tab label="Portfolios" />
								<Tab label="Expertise" />
								<Tab label="Contact" />
								{/* <Tab label="Hobby"/> */}
							</Tabs>
						</Grid>
					</Hidden>
					<Grid item xs={12} md={10} style={{ position: 'relative' }}>

						<AboutMe sideBarValue={this.state.sideBarValue} viewSize={this.state.viewSize} />
						<Portfolio sideBarValue={this.state.sideBarValue} active={this.state.portfolio} delay={3000} viewSize={this.state.viewSize} />
						<Expertise sideBarValue={this.state.sideBarValue} active={this.state.expertise} delay={3000} viewSize={this.state.viewSize} />
						<Contact sideBarValue={this.state.sideBarValue} active={this.state.contact} delay={3000} viewSize={this.state.viewSize} />

					</Grid>
				</Grid>
			</React.Fragment>
		)
	}
}

export default withStyles(styles)(Home)