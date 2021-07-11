import React from 'react';
import InputBar from '../InputBar/inputBar';
import TaskList from '../TaksList/tasklist';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      inputValue: "",
      taskList: []
    }
    this.inputBarStateLift = this.inputBarStateLift.bind(this);
    this.addToTaskList = this.addToTaskList.bind(this);
    this.deleteButtonStateLift = this.deleteButtonStateLift.bind(this);
    this.handleDoneStateLift = this.handleDoneStateLift.bind(this);
  }

  inputBarStateLift(str){
    this.setState({
      inputValue:str 
    })
  }

  deleteButtonStateLift(arrOfObj){
    this.setState({
      taskList:arrOfObj
    })
  }

  addToTaskList(value){
    if (value != false){
      let temp = [...this.state.taskList, {id:Math.random()*100000, content:value, doneState:false}]
      this.setState({
        taskList: temp
      })
      console.log(this.state.taskList);
    }
  }

  handleDoneStateLift(arrOfObj) {
    this.setState({
      taskList: arrOfObj
    })
  }

  render() {
    return (
      <div className="App">
        <InputBar inputBarStateLift={this.inputBarStateLift} addToTaskList={this.addToTaskList}/>
        <TaskList list={this.state.taskList} deleteButtonStateLift={this.deleteButtonStateLift} handleDoneStateLift={this.handleDoneStateLift}/>
      </div>
    );
  }
}

export default App;
