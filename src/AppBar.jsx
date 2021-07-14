import React from 'react';
import { AppBar, Toolbar,Container, IconButton, Typography, Button, Grid } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import nameBar from "./arts/namebar.svg"

import MenuIcon  from '@material-ui/icons/Menu'
const styles = theme=>({
	navigationBar:{
		color:'#DEDEDE',
		boxShadow:'0px 0px 0px black',
		paddingTop:theme.spacing(4)
	},
	navName:{
		transition:'1s',
    [theme.breakpoints.up('md')]: {
      marginLeft: theme.spacing(5),
    },
	},
	borgir:{
		marginRight:theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing(5),
    },
	},
	nameBarStyle:{
		height:2,
		width:80,
		backgroundColor:'#CC0D0D',
		borderRadius:'50px',
		transform:'translate(190px, 0px)',
	}
})
class NavBar extends React.Component{
	constructor(props){
		super(props)
		this.state={color:this.props.color}
	}
	render(){
		const { classes } = this.props
		return (
			<AppBar position="fixed" color={this.props.color} className={classes.navigationBar}>
				<Toolbar>
					<Container>
						<Grid container direction="row" justify="space-between">
							<Grid item md={5}>
								<Typography variant="h5" className={classes.navName}>
									Cornello Engreso
								</Typography>
								<div className={classes.nameBarStyle}/>
							</Grid>
							<Grid item>
								<IconButton edge="start" color="inherit" aria-label="menu">
									<MenuIcon />
								</IconButton>
							</Grid>
						</Grid>
					</Container>
				</Toolbar>
			</AppBar>
		)
	}
}

export default withStyles(styles)(NavBar)