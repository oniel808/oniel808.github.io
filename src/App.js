import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Grid, Tabs, Tab} from '@material-ui/core'
import NavBar from './AppBar';
import Home from './homePage';




class TabPanel extends React.Component{
	constructor(props){
		super(props)
		this.state = {id:props}
		console.log(props)
	}
	render(){
		return(
			<React.Fragment>
				<div id={this.props.id}>
				</div>
			</React.Fragment>
		)
	}
}
class App extends React.Component {
	render(){
		return(
			<React.Fragment>
				<NavBar color="transparent"/>
				<Home/>
			</React.Fragment>
		)
	}  
}
export default App;
