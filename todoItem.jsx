import React from 'react';

export default class TodoItem extends React.Component {
	static propTypes = {
		id: React.PropTypes.number.isRequired,
    todo: React.PropTypes.string.isRequired,
    done: React.PropTypes.bool.isRequired
  };    
  static defaultProps = {
  	id: -1,
    todo: 'Undefined Todo Item',
    done: false
  };
	constructor(props) {
		super()
		this.state = {
	  	id: props.id,
	    todo: props.todo,
	    done: props.done,
	  };
	  this._finishTodo = () => this.props.finishTodo(this.props.id);
	}
	render() {

		return (
			<li className={"todo-item " + (this.props.done ? 'todo-done' : '')} onClick={this._finishTodo}>
				{this.props.todo}
			</li>
		);
	}
}