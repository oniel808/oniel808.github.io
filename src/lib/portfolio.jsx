import '../App.css';
import React from 'react';
import { Grid, Tabs, Tab, Typography, Paper, Button, withWidth } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';

import bgForest from '../arts/forest_background-Trees.svg'
import fgForest from '../arts/forest_foreground-Trees.svg'
import wolf1 from '../arts/forest_wolf-howling.svg'

const styles = theme => ({
	wolfForest: {
		position: 'absolute',
		height: '100vh',
		width: 600,
		right: 0,
		top: 0
	},
	wolfForestin: {
		display: 'flex',
		opacity: 1,
	},
	wolfForestout: {
		animationFillMode: 'forwards',
		animation: `$hide 5s  ${theme.transitions.easing.easeInOut}`,
	},
	'@keyframes hide': {
		'0%': {
			opacity: 1
		},
		'50%': {
			opacity: 1,
		},
		'100%': {
			opacity: 0,
			display: 'none'
		}
	},
	bgForest: {
		position: 'absolute',
		bottom: -150,
		right: -120,
		height: 700,
		animation: `$swaytrees 40s  ${theme.transitions.easing.easeInOut} infinite`,
	},
	fgForest1: {
		position: 'absolute',
		bottom: 0,
		right: 230,
		zIndex: -1,
		height: 400,
		opacity: 0.9,
		animation: `$swaytrees 10s  ${theme.transitions.easing.easeInOut} infinite`,
	},
	fgForest2: {
		position: 'absolute',
		bottom: 100,
		right: -100,
		zIndex: -1,
		height: 500,
		animation: `$swaytrees 20s  ${theme.transitions.easing.easeInOut} infinite`,
	},
	wolf1: {
		position: 'absolute',
		bottom: -30,
		right: -50,
		height: 350,
	},
	'@keyframes swaytrees': {
		'0%': {
			transform: 'skew(1deg, 0deg)',
		},
		'50%': {
			transform: 'skew(-1deg, 0deg)',
		},
		'100%': {
			transform: 'skew(1deg, 0deg)',
		}
	},
	Forestin: {
		animationFillMode: 'forwards',
		animation: `$slideLeft 3s  ${theme.transitions.easing.easeInOut}`,
	},
	Forestin1: {
		animationFillMode: 'forwards',
		animation: `$slideLeft 2.3s  ${theme.transitions.easing.easeInOut}`,
	},
	Forestout: {
		animationFillMode: 'forwards',
		animation: `$slideRight 1s  ${theme.transitions.easing.easeInOut}`,
	},
	Forestout1: {
		animationFillMode: 'forwards',
		animation: `$slideRight 2s  ${theme.transitions.easing.easeInOut}`,
	},
	'@keyframes slideLeft': {
		'0%': {
			transform: 'translate(700px, 0px)'
		},
		'100%': {
			transform: 'translate(0px,0px)'
		}
	},
	'@keyframes slideRight': {
		'0%': {
			transform: 'translate(0px, 0px)'
		},
		'100%': {
			transform: 'translate(700px,0px)'
		}
	},
	wolfIn: {
		animationFillMode: 'forwards',
		animation: `$slideUp 1s  ${theme.transitions.easing.easeInOut}`,
	},
	wolfOut: {
		animationFillMode: 'forwards',
		animation: `$slideDown 2s  ${theme.transitions.easing.easeInOut}`,
	},
	'@keyframes slideUp': {
		'0%': {
			transform: 'translate(0px, 400px)'
		},
		'100%': {
			transform: 'translate(0px,0px)'
		}
	},
	'@keyframes slideDown': {
		'0%': {
			transform: 'translate(0px, 0px)'
		},
		'100%': {
			transform: 'translate(0px,400px)'
		}
	},
	portfolioContainerIn: {
		animationFillMode: 'forwards',
		animation: `$portfolioContainerIn 2s  ${theme.transitions.easing.easeInOut}`,
	},
	portfolioContainerOut: {
		animationFillMode: 'forwards',
		animation: `$portfolioContainerOut 2s  ${theme.transitions.easing.easeInOut}`,
	},
	'@keyframes portfolioContainerIn': {
		'0%': {
			transform: 'translate(-1500px,0px)',
			opacity: 0,
            display:'block'
		},
		'50%': {
			transform: 'translate(0px,0px)',
			opacity: 1
		},
		'100%': {
			transform: 'translate(0px,0px)',
			opacity: 1
		}
	},
	'@keyframes portfolioContainerOut': {
		'0%': {
			transform: 'translate(0px,0px)',
			opacity: 1
		},
		'50%': {
			transform: 'translate(-1500px,0px)',
			opacity: 0
		},
		'100%': {
			transform: 'translate(-1500px,0px)',
			opacity: 0,
            display:'none'
		}
	}

})
class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		this.state = { display: false, rendered: false, viewSize: props.viewSize }
	}
	componentDidUpdate() {
		if (this.props.sideBarValue == 1 && !this.state.rendered) {
			this.setState({ display: true })
			this.setState({ rendered: true })
		}
	}
	componentWillUpdate(prevProps, prevState, snapshot) {
		if (prevProps.viewSize != prevState.viewSize)
			this.setState({ viewSize: prevProps.viewSize });
	}
	hideDisplay(e) {
		if (this.display)
			this.setState({ display: e })
	}
	render() {
		const classes = this.props.classes
		// const p = this.props.sideBarValue
		const p = this.props.sideBarValue == 1 ? true : false
		return this.state.display ? <PortfolioComponent classes={classes} p={p} display={this.props.display} hideDisplay={this.hideDisplay} viewSize={this.state.viewSize} /> : null
	}
}
class PortfolioComponent extends React.Component {
	constructor(props) {
		super(props)
		this.state = { tabValue: 0, viewSize: props.viewSize }
	}
	componentWillUpdate(prevProps, prevState, snapshot) {
		if (prevProps.viewSize != prevState.viewSize)
			this.setState({ viewSize: prevProps.viewSize });
	}
	handleChangeTab(e, ne) {
		this.setState({ tabValue: ne })
	}
	HideElem(el, time = 1000) {
		setTimeout(() => {
			if (document.getElementsByClassName(el)[0]) {
				document.getElementsByClassName(el)[0].style.display = "none"
			}
		}, 2000)

		return el
	}
	ShowElem(el, time = 1) {
		setTimeout(() => {
			if (document.getElementsByClassName(el)[0]) {
				document.getElementsByClassName(el)[0].style.display = "flex"
			}
		}, 500)
		return el
	}
	render() {
		const classes = this.props.classes
		const p = this.props.p
		console.log('portfolio withwidth', this.state.viewSize)
		const smallView = ['sm', 'xs']

		// status 
		// 0-planned 1-launched 2-ongoing
		const portfolio = [
			{
				title: 'ServiceRocket Philppines',
				img: require('../arts/sr.png'),
				content: <Typography style={{ whiteSpace: "pre-wrap" }}>Collaborated closely with cross-functional software engineering
					teams to conceptualize, plan, and implement the seamless
					integration of cutting-edge technologies into the NetSuite
					platform.
					<br />
					<br />
					Actively engaged in the customization of NetSuite workflows and
					scripts, tailoring the platform to exploit fully the capabilities of the
					integrated technologies, thereby enhancing user experiences and
					system performance.
					<br />
					<br />
					Played a pivotal role in the entire integration lifecycle, from initial
					ideation to execution, ensuring alignment with organizational
					goals and industry best practices.
				</Typography>,
				link: "https://www.servicerocket.com/",
				status: [1],
			}, {
				title: 'Ceana Technology',
				img: require('../arts/ceana.png'),
				content: <Typography>
					Efficiently collaborate with senior developers to skilfully design
					and implement NetSuite customizations, workflows, and scripts,
					aiming for tailored solutions that optimize business performance.
					<br />
					<br />
					Conduct thorough testing and precise debugging of NetSuite
					applications to ensure flawless functionality and peak
					performance, ensuring a seamless user experience.
					<br />
					<br />
					Proactively provide support and adeptly troubleshoot existing
					NetSuite solutions, ensuring smooth maintenance and swift
					resolution of challenges to sustain uninterrupted operations.
				</Typography>,
				link: "https://ceanatech.com/",
				status: [1],
			}, {
				title: 'Skinis',
				img: require('../arts/skinis.jpg'),
				content: "Skinis Medical Aesthetics is a somehow little assistant which organize and mail schedule clients through Squareup, which also sell cosmetic products through Squareup. This also organize consultation forms which filled up by clients before entering the establishment.",
				link: "https://skinismedicalaesthetics.com/",
				status: [1],
			}, {
				title: 'Yumihiro Canada',
				content: "Yumihiro Canada was just starting up on canada so we made a basic business launch phase which attracts customers by the products from other branches of Yumihiro Japan",
				link: "https://yumuhirocanada.com/",
				status: [2],
			}, {
				title: 'KoalaCare',
				content: "KoalaCare is a WebApp which helps health care agenies to track and record their caregiver's timesheet through GPS, and organize some schedule given to caregiver",
				link: "localhost:3000",
				status: [0, 2],
			}]
		let isSmall = smallView.includes(this.state.viewSize)
		return (
			<>
				<div className={`${classes.wolfForest} ${p ? classes.wolfForestin : classes.wolfForestout}`} onAnimationEnd={() => { this.props.hideDisplay(false) }}>
					<img src={bgForest} className={`${classes.bgForest} ${p ? classes.Forestin1 : classes.Forestout1}`} />
					<img src={fgForest} className={`${classes.fgForest1} ${p ? classes.Forestin : classes.Forestout}`} />
					<img src={fgForest} className={`${classes.fgForest2} ${p ? classes.Forestin : classes.Forestout}`} />
					<img src={wolf1} className={`${classes.wolf1} ${p ? classes.wolfIn : classes.wolfOut}`} />
				</div>
				<Grid container className={`${p ? classes.portfolioContainerIn : classes.portfolioContainerOut}`} direction="row" justifyContent="flex-start" alignItems="flex-start" style={isSmall ? { marginTop: 200 } : { marginBottom: 200, position: 'absolute', bottom: 0, height: '30%', left: 0 }}>
					<Grid item md={7} xs={12}>
						<Grid container component={Paper} spacing={5} style={{ padding: '30px 10px' }}>
							<Grid item md={3} xs={12}>
								<Tabs
									value={this.state.tabValue}
									orientation={isSmall ? "horizontal" : "vertical"}
									onChange={this.handleChangeTab.bind(this)}
								>
									<Tab label='ServiceRocket Philppines' />
									<Tab label="Ceana Technology" />
									<Tab label="Skinis" />
									<Tab label="Yumihiro Canada" />
									<Tab label="KoalaCare" />
								</Tabs>
							</Grid>
							<Grid item md={9} xs={12} style={{ position: 'relative' }}>
								{portfolio[this.state.tabValue].img ? <img src={portfolio[this.state.tabValue].img} style={{ maxHeight: 95, borderRadius: 20 }} /> : <Typography variant="h5" align="center" style={{ paddingBottom: 20 }}> {portfolio[this.state.tabValue].title}</Typography>}
								<Typography variant="body1" style={{ maxHeight: 200, overflow: 'auto' }}>{portfolio[this.state.tabValue].content}</Typography>
								<Button href={portfolio[this.state.tabValue].link} target="_blank" style={{ position: 'absolute', bottom: -20, right: 20 }}>Visit Website</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</>
		)
	}
}
export default withStyles(styles)(Portfolio)