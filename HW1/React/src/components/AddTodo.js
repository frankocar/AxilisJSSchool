import React, { Component } from 'react';

class AddTodo extends Component {
  onInputChanged = (e) => {
    this.props.onAddTextChanged(e.target.value);
  };

	render() {
		return (
			<div className="pb-2">
				<div className="row">
					<div className="col">
						<input
							value={this.props.inputText}
							type="text"
							placeholder=""
							className="form-control"
							onChange={this.onInputChanged}
						/>
					</div>
					<div className="col">
						<button className="btn btn-dark" onClick={() => this.props.handleAddClicked()}> Add Todo</button>
					</div>
				</div>
			</div>
		);
	}
}

export default AddTodo;
