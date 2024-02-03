import './App.css';
import React from 'react';
import NavBar from './AppBar';
import Home from './homePage';
import withWidth from '@material-ui/core/withWidth';

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			viewSize: this.props.width
		}
		console.log(props)
	}
	componentWillUpdate(prevProps, prevState, snapshot) {
		if (prevProps.width != prevState.viewSize)
			this.setState({ viewSize: prevProps.width });
	}
	render() {
		console.log('current | state', this.state)
		return (
			<React.Fragment>
				<NavBar viewSize={this.state.viewSize} />
				<Home viewSize={this.state.viewSize} />
			</React.Fragment>
		)
	}
}
export default withWidth()(App);
