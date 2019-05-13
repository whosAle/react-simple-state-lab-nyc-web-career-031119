import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    // ...define initial state with a key of 'color' set to the 'value' prop
    this.state = {color: this.props.value}
  }

  changeColor = () => {
    this.setState({
      color: "#333"
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}></div>
    );
  }

}

// Don't forget your default props!
Cell.defaultProps = {
  values: "#FFF"
}