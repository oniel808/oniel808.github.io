import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Grid, Tabs, Tab, Typography} from '@material-ui/core'
import NavBar from './AppBar';
import { withStyles } from '@material-ui/core/styles';
import AboutMe from './aboutMe'
import Portfolio from './portfolio'

const styles = theme=>({
	sideBar:{
		[theme.breakpoints.up('md')]: {
			marginTop:'auto',
			marginBottom:'auto',
			position:"absolute",
			bottom:80
		},
		"& .MuiTabs-scrollable .MuiTabs-indicator":{
			background:'#CC0D0D'
		},
		zIndex:999
	},
	sideBarContainer:{
		position:'relative',
	},
})
class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			sideBarValue:0,
			aboutMe:true,
			portfolio:false,
			expertise:false,
			contact:false,
			gaming:false,
		}
	}
	componentWillMount(){
		setTimeout(()=>{
			document.body.style.background = "linear-gradient(#000426 42%, #00010a 100%)"
			document.body.style.backgroundRepeat="no-repeat"
			document.body.style.backgroundAttachment="fixed"
			document.body.style.transition = "3s"
			document.body.style.color="#DEDEDE"
			document.body.style.overflow="hidden"
		},500)
	}
	sideBarClick(e,ne){
		this.setState({sideBarValue:ne})
	}
	hideShow = (el,val) => {
		this.setState({[el]:val})
	}
	render(){
		const classes = this.props.classes
		return (
		<React.Fragment>
			<Grid container style={{height:'100vh'}}>
				<Grid md={2} className={classes.sideBarContainer}>
					<Tabs
						inkBarStyle={{ background: "#000"}}
						orientation="vertical"
						variant="scrollable"
						value={this.state.sideBarValue}
						onChange={this.sideBarClick.bind(this)}
						className={classes.sideBar}
					>
						<Tab label="About Me"/>
						<Tab label="Portfolios"/>
						<Tab label="Expertise"/>
						<Tab label="Contact"/>
						<Tab label="Gaming"/>
					</Tabs>
				</Grid>
				<Grid item md={10} style={{position:'relative'}}>

					<AboutMe sideBarValue={this.state.sideBarValue}/>
					<Portfolio sideBarValue={this.state.sideBarValue} active={this.state.portfolio} delay={3000}/>
					
				</Grid>
			</Grid>
		</React.Fragment>
		)
	}
}

export default withStyles(styles)(Home)