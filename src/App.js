import React, { Component } from 'react';
import Title from './components/Title';
import Task from './components/Task';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      newTask: '',
      tasks: [],
    };
  }

  handleTaskChange = (event) => {
    this.setState({
      newTask: event.target.value,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    
    let newTasks = this.state.tasks;
    newTasks.push(this.state.newTask);
    this.setState({
      newTasks: "",
      tasks: newTasks
    })
  }

  render() {
    return (
      <div>
        <Title />
        <form onSubmit={this.handleSubmit}>        
          <input 
            value={this.state.newTask}
            onChange={this.handleTaskChange}
            type="text"
            className="new-task"
          />
        </form>
        <form>          
          {
            this.state.tasks.map(task => <Task />)
          }
        </form> 
        
      </div>
    );
  }
}


export default App;
