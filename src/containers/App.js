import React, {Component} from 'react';
import CardList from '../components/CardList';
import Searchbox from '../components/Searchbox';
import Scroll from '../components/Scroll';
import './App.css'



class App extends Component {
	constructor (){

		super()
		this.state={
			robots:[],
			searchfields: " "
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();
		})
		.then(users=>{
			this.setState({robots: users});
		})
		
	}
		onSearchChange=(event)=>{
			this.setState({searchfields: event.target.value})
			
			
		}
	render (){
		const {robots,searchfields}=this.state;
		const filteredRobots =robots.filter(robot=>{
				return robot.name.toLowerCase().includes(searchfields.toLowerCase());
			})


	return(
		<div className="tc">
		<h1 className='f1'>Robofriends</h1>
		<Searchbox searchChange={this.onSearchChange}/>
		<Scroll>
   <CardList robots={filteredRobots}/>
   		</Scroll>
   	</div>
		);
}
}

export default App;