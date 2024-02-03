import '../App.css';
import React from 'react';
import { Grid, Tabs, Tab, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import Moon from '../arts/artmoon.svg'
import Moon1 from '../arts/moonflare.svg'
import cloud1 from '../arts/cloud1.svg'
import cloud2 from '../arts/cloud2.svg'
import stars1 from '../arts/stars1.svg'
import stars2 from '../arts/stars2.svg'


export const Style = theme => ({
	moonCloud: {
		height: 400,
		width: 600,
		position: 'absolute',
		right: 10,
		top: 200
	},
	moon: {
		height: '100%',
	},
	moonflare: {
		position: 'absolute',
	},
	moon1: {
		height: 440,
		width: 640,
		right: 80,
		top: -20,
		opacity: 0.4,
		animation: `$moonflareanimate 7s ${theme.transitions.easing.easeInOut} infinite`
	},
	moon2: {
		height: 460,
		width: 660,
		right: 70,
		top: -30,
		opacity: 0.4,
		animation: `$moonflareanimate 12s ${theme.transitions.easing.easeInOut} infinite`
	},
	'@keyframes moonflareanimate': {
		"0%": {
			transform: "scale(1.05,1.05)"
		}, "50%": {
			transform: "scale(1,1)"
		}, "100%": {
			transform: "scale(1.05,1.05)"
		},
	},
	cloud1: {
		height: '40%',
		right: 50,
		top: 10,
		animation: `$cloud1kf 15s ${theme.transitions.easing.easeInOut} infinite`,
	},
	stars: {
		height: 400,
		width: 600,
		position: 'absolute',
		right: 10,
		top: 200
	},
	stars1: {
		height: '100%',
		right: 500,
		top: '-100px',
		animation: `$cloud1kf 50s ${theme.transitions.easing.easeInOut} infinite`,
	},
	stars2: {
		height: '100vh',
		right: 500,
		top: '-300px',
		animation: `$cloud1kf 360s ${theme.transitions.easing.easeInOut} infinite`,
	},
	cloud3: {
		height: '40%',
		right: 360,
		top: 10,
		transform: "rotate(180deg)",
		zIndex: '-1',
		animation: `$cloud1kf 25s ${theme.transitions.easing.easeInOut} infinite`,
	},
	cloud2: {
		height: '30%',
		right: 450,
		top: 250,
		animation: `$cloud1kf 20s ${theme.transitions.easing.easeInOut} infinite`,
	},
	clouds: {
		position: 'absolute',
		opacity: 0.6,
	},
	webdeveloperbar: {
		backgroundColor: '#CC0D0D',
		height: 2,
		width: 50,
		transform: 'translate(-20px,0px)',
		animation: `$webbar  ${theme.transitions.easing.easeInOut} infinite `,
		animationDuration: ' 5s'
	},
	'@keyframes webbar': {
		'0%': {
			width: 50,
			transform: "translate(-20px,0px)"
		},
		'50%': {
			width: 20,
			transform: "translate(30px,0px)"
		},
		'100%': {
			width: 50,
			transform: "translate(-20px,0px)"
		}
	},
	'@keyframes cloud1kf': {
		'0%': {
			transform: "translate(-50px,0px)"
		},
		'50%': {
			transform: "translate(0px,0px)"
		},
		'100%': {
			transform: "translate(-50px,0px)"
		},
	},
	'@keyframes cloud2kf': {
		'0%': {
			transform: "translate(0px,0px)"
		},
		'50%': {
			transform: "translate(-10px,0px)"
		},
		'100%': {
			transform: "translate(0px,0px)"
		},
	},
	moonCloudAnimateOut: {
		animationFillMode: 'forwards',
		animation: `$slideUp  ${theme.transitions.easing.easeInOut}`,
		animationDuration: '2s'
	},
	'@keyframes slideUp': {
		'0%': {
			transform: "translate(0px,0px)"
		},
		'40%': {
			transform: "translate(0px,30px)"
		},
		'100%': {
			transform: "translate(0px,-1000px)",
			display: 'none',
		},
	},
	moonCloudAnimateIn: {
		animationFillMode: 'forwards',
		animation: `$slideDown 2s  ${theme.transitions.easing.easeInOut}`,
	},
	'@keyframes slideDown': {
		'0%': {
			transform: "translate(0px,-1000px)"
		},
		'40%': {
			transform: "translate(0px,30px)"
		},
		'100%': {
			transform: "translate(0px,-0px)",
		},
	},
	nameIn: {
		animationFillMode: 'forwards',
		animation: `$slideIn  ${theme.transitions.easing.easeInOut}`,
		animationDuration: '2s'
	},
	nameOut: {
		animationFillMode: 'forwards',
		animation: `$fadeOut ${theme.transitions.easing.easeInOut}`,
		animationDuration: '2s'
	},
	'@keyframes fadeOut': {
		'0%': {
			opacity: 1,
			transform: 'translate(0px,0px)'
		},
		'20%': {
			transform: 'translate(30px,0px)'
		},
		'99%': {
			opacity: 0,
			transform: 'translate(-500px,0px)'
		},
		'100%': {
			opacity: 0,
			display: 'none',
		},
	},
	'@keyframes fadeIn': {
		'0%': {
			opacity: 0,
			transform: 'translate(-500px,0px)'
		},
		'20%': {
			transform: 'translate(30px,0px)'
		},
		'100%': {
			transform: 'translate(0px,0px)',
			opacity: 1,
		},
	},
})
class AboutMe extends React.Component {
	constructor(props) {
		super(props)
	}
	// componentWillMount(){
	// 	this.props.hideShow('aboutMe',true)
	// }
	HideElem(el) {
		console.log('HideElem', this.props.sideBarValue)
		setTimeout(() => {
			if (document.getElementsByClassName(el)[0]) {
				document.getElementsByClassName(el)[0].style.display = "none"
			}
		}, 2000)

		return el
	}
	ShowElem(el) {
		console.log('HideElem', this.props.sideBarValue)
		setTimeout(() => {
			if (document.getElementsByClassName(el)[0]) {
				document.getElementsByClassName(el)[0].style.display = "flex"
			}
		}, 1000)
		return el
	}
	render() {
		const classes = this.props.classes
		console.log('this.props.sideBarValue', this.props.sideBarValue)
		return (
			<>
				<div className={`${classes.moonCloud} ${this.props.sideBarValue == 0 ? this.ShowElem(classes.moonCloudAnimateIn) : this.HideElem(classes.moonCloudAnimateOut)}`}>
					<img src={Moon} className={classes.moon} />
					<img src={Moon1} className={`${classes.moonflare} ${classes.moon1}`} />
					<img src={Moon1} className={`${classes.moonflare} ${classes.moon2}`} />
					<img src={cloud1} className={`${classes.cloud1} ${classes.clouds}`} />
					<img src={cloud2} className={`${classes.cloud2} ${classes.clouds}`} />
					<img src={cloud1} className={`${classes.cloud3} ${classes.clouds}`} />
					<img src={stars1} className={`${classes.stars1} ${classes.stars}`} />
					<img src={stars2} className={`${classes.stars2} ${classes.stars}`} />
				</div>
				<Grid container className={`${this.props.sideBarValue == 0 ? this.ShowElem(classes.nameIn) : this.HideElem(classes.nameOut)}`} direction="row" justifyContent="flex-start" alignItems="flex-end" style={{ height: '100vh' }}>
					<Grid item>
						<Typography variant="h2">Cornello</Typography>
						<Typography variant="h2" style={{ marginBottom: '10%' }}>Engreso</Typography>
						<Typography variant="h5" style={{ marginBottom: '100%' }}>Software Engineer
							<div className={classes.webdeveloperbar}></div>
						</Typography>
					</Grid>
				</Grid>
			</>
		)
	}
}
export default withStyles(Style)(AboutMe)