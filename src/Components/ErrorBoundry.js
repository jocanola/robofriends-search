import React, {Component} from 'react';

class ErrorBoundry extends Component{
	constructor(){
		super();
		this.state ={
			errorOcurred:false,
		}
	}

	componentDidCatch(error,info){
		this.setState({errorOcurred:true})
	}

	render(){
		if(this.state.errorOcurred){
			return <h1>Oooooops, There is error in connection</h1>
		}

		return this.props.children
	}
}

export default ErrorBoundry;