import React, { Component } from 'react';
import RegularEror from '../components/regular-error';

class HandleError extends Component {
	state = {
		handleError: false,
	}
	componentDidCatch(error, info) {
		this.setState({
			handleError:true,
		})
	}
	render() {
		if (this.state.handleError) {
			return (
				<RegularEror />
			)
		}
		return this.props.children
	}
}

export default HandleError