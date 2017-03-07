import React, { Component, PropTypes } from 'react'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: ""
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
    this.setState({
      inputValue: e.target.value
    });
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
        
      </div>
    );
  }
}

const propTypes = {
  listData: PropTypes.array.isRequired
};

App.defaultProps = {
  listData: [1,2]
}

export default App