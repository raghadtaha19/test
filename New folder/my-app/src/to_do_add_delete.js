// TodoList.js

import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      newTask: '',
    };
  }

  // Function to handle input change for adding tasks
  handleInputChange = (event) => {
    this.setState({ newTask: event.target.value });
  };

  // Function to add a new task to the list
  addTask = () => {
    if (this.state.newTask.trim() !== '') {
      this.setState({
        tasks: [...this.state.tasks, this.state.newTask],
        newTask: '',
      });
    }
  };

  // Function to delete a task from the list
  deleteTask = (index) => {
    const newTasks = [...this.state.tasks];
    newTasks.splice(index, 1);
    this.setState({ tasks: newTasks });
  };

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input className='input' type="text" placeholder="Add a new task" value={this.state.newTask} onChange={this.handleInputChange} />
          <button className='button' onClick={this.addTask}>Add</button>
        </div>
        <ul>
          {this.state.tasks.map((task, index) => (
            <li key={index}>
              {task}{' '}
              <button className='button' onClick={this.deleteTask(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default TodoList;
