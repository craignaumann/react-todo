import TodoItem from './todoItem'
import React from 'react'
import update from 'immutability-helper'

export default class TodoApp extends React.Component {
	static propTypes = {
    title: React.PropTypes.string.isRequired
  };    
  static defaultProps = {
    title: 'Todo App'
  };

  state = {
    todoItems: [
    	{id: 0, todo: 'Buy Groceries', done: false}, 
    	{id: 1, todo: 'Take out the trash', done: false}, 
    	{id: 2, todo: 'Clean the kitchen', done: false}
    ]
  };
	constructor() {
		super()
		this._finishTodo = (id) => this.finishTodo(id);
		this._addTodo = () => this.addTodo();
	}
	finishTodo(id) {
		const newTodos = [
			...this.state.todoItems.slice(0, id),
			{...this.state.todoItems[id], done: !this.state.todoItems[id].done},
			...this.state.todoItems.slice(id+1, this.state.todoItems.length)
		];

		this.setState({todoItems: newTodos});
	}
	addTodo(){
		const newTodo = $('#new-todo-item').val();
		const newState = {todoItems: [...this.state.todoItems, {id: this.state.todoItems.length, todo: newTodo, done: false}]}
		this.setState(newState);
	}
	render() {
		var todoRows = [];
		for (var i = 0; i < this.state.todoItems.length; i++){
			todoRows.push(
				<TodoItem 
					id={i} 
					todo={this.state.todoItems[i].todo} 
					done={this.state.todoItems[i].done} 
					finishTodo={this._finishTodo}
				/>
			);
		}
		return (
			<div className="container todo-app">
	      <div className="row todo-title">
	      	  <h1>{this.props.title}</h1>
	      </div>
	      <div className="row todo-list-row">
	      	<ul className="todo-list">
	      		{todoRows}
	      	</ul>
	      </div>
	      <div className="row todo-add-item-row">
	      	<div className="col-md-6 col-md-offset-3">
		      	<input className="form-control" type="text" id="new-todo-item"/>
		      	<button className="btn btn-primary" id="add-todo" onClick={this._addTodo}>Add todo</button>
	      	</div>
	      </div>
	    </div>
    );
	}
}