import React, { Component } from 'react';
import Search from '../components/search';

class SearchContainer extends Component {
	state = {
		value: 'Hola',
	}
	handleSubmit = event => {
		event.preventDefault();

	}
	setInputRef = element => {
		this.input = element;
	}
	handleInputChangue = event => {
		this.setState({
			value: event.target.value.replace(' ','-')
		})
	}
	render() {
		return (
			<Search
				setRef={this.setInputRef}
				handleSubmit={this.handleSubmit}
				handleChange={this.handleInputChangue}
				value={this.state.value}
			/>
		)
	}
}

export default SearchContainer;