import React, { Component, PropTypes } from 'react'
import { observable } from 'mobx'
import { observer } from 'mobx-react'

class Todo {
  id = Math.random();
  @observable title = ''
  constructor(title) {
      this.title = title;
  }
}

@observer
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e){
    this.setState({
      inputValue: e.target.value
    });
  }
  handleClick(){
    this.props.todoList.todoList.push(
      new Todo(this.state.inputValue)
    );
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
        <button onClick={this.handleClick}>添加</button>
        {this.props.todoList.todoList.map(todo => <ListView key={todo.id} title={todo.title}/>)}
      </div>
    );
  }
}

const ListView = (props) => {
  let title = props.title;
  console.log(props);
  return (
    <div>{title}</div>
    )
}

const propTypes = {
  todoList: PropTypes.array.isRequired
};

App.defaultProps = {
  todoList: [1,2]
}

export default App