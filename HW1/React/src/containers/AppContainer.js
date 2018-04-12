import React, { Component } from 'react';
import App from '../components/App';
import axios from 'axios';

class AppContainer extends Component {
	constructor() {
		super();

		this.state = {
			filterText: '',
			addText: '',
			isLoading: false,
			hasError: false,
			todos: []
		};
	}

	handleIsDoneToggle = async (id, isDone) => {
		this.setState({ isLoading: true });
		try {
			await axios.put(`https://react.axilis.com/fcar/todo`, {
				id, 
				isDone
			});
			this.setState({
				todos: this.state.todos.map((todo) => {
					if (todo.id === id) {
						return { ...todo, isDone };
					} else {
						return todo;
					}
				})
			});
		} catch (err) {
			this.setState({ hasError: true });
		} finally {
			this.setState({
				isLoading: false,
				filterText: '',
				addText: ''
			});
		}
	};

	onFilterTextChanged = (text) => {
		this.setState({
			filterText: text
		});
	};

	onAddTextChanged = (text) => {
		this.setState({
			addText: text
		});
	};

	handleAddClicked = async () => {
		if (this.state.addText.trim().length <= 0) {
			return;
		}
		this.setState({ isLoading: true });
		try {
			let resp = await axios.post('https://react.axilis.com/fcar/todo', { text: this.state.addText });
			this.setState({
				todos: [...this.state.todos, resp.data],
				addText: '' //text is deleted only when the operation is successful
			});
		} catch (err) {
			this.setState({ hasError: true });
		} finally {
			this.setState({
				isLoading: false,
				filterText: ''
			});
		}
	};

	handleTrashClicked = async (todoId) => {
		this.setState({ isLoading: true });
		try {
			await axios.delete(`https://react.axilis.com/fcar/todo/${todoId}`);
			this.setState({
				todos: this.state.todos.filter((t) => t.id !== todoId)
			});
		} catch (err) {
			this.setState({ hasError: true });
		} finally {
			this.setState({
				isLoading: false,
				filterText: '',
				addText: ''
			});
		}
	};

	async componentDidMount() {
		this.setState({ isLoading: true });
		try {
			let resp = await axios.get('https://react.axilis.com/fcar/todos');
			this.setState({
				todos: resp.data
			});
		} catch (err) {
			this.setState({ hasError: true });
		} finally {
			this.setState({ isLoading: false });
		}
	}

	filter = (todos, filter) => {
		if (filter && filter.trim().length > 0) {
			return todos.filter((t) => t.text.indexOf(filter) > -1);
		}
		return todos;
	};

	render() {
		return (
			<App
				filterText={this.state.filterText}
				addText={this.state.addText}
				isLoading={this.state.isLoading}
				hasError={this.state.hasError}
				todos={this.filter(this.state.todos, this.state.filterText)}
				handleIsDoneToggle={this.handleIsDoneToggle}
				handleTrashClicked={this.handleTrashClicked}
				handleAddClicked={this.handleAddClicked}
				onFilterTextChanged={this.onFilterTextChanged}
				onAddTextChanged={this.onAddTextChanged}
			/>
		);
	}
}

export default AppContainer;
