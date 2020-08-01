import React, { Component } from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
// import { robots } from './robot';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry'


class App extends Component {
	constructor(){
		super()
		this.state = {
			robots:[],
			searchField:''
		}	
	}


	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users').then(respond =>{
			return respond.json()
		}).then(users =>{

			this.setState({robots:users})
		})
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})	
	}
	
	render(){
		const filterRobots = this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes((this.state.searchField).toLowerCase())
		});

		return(
		<div className="tc">
			<h1 className="head"> Robo Friend App</h1>
				<div>
					<SearchBox searchChange={this.onSearchChange}/>
				</div>

				<Scroll>
					<ErrorBoundry>
						<CardList robots={filterRobots} />
					</ErrorBoundry>
				</Scroll>
		</div>
		)
	}
	
}

export default App;