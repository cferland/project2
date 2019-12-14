import React, { Component } from 'react';

class Proficiencies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: 0,
      limit: props.choiceSet.choose
    }
  }

  handleCheck = (event) => {
    if (event.target.defaultChecked === false) {
      if (this.state.checked < this.state.limit) {
        this.setState({
          checked: this.state.checked + 1
        })
        event.target.defaultChecked = true;
      } else {
        event.preventDefault();
        alert(
          `You can only choose ${this.state.limit} proficiencies from this category!`
        );
      }
    } else if (event.target.defaultChecked === true) {
      if (this.state.checked <= this.state.limit) {
        this.setState({
          checked: this.state.checked - 1
        })
        event.target.defaultChecked = false;
      }
    }
  }

  render() {
    return (
      <div key={this.props.index}>
        <h5>Choose {this.props.choiceSet.choose}</h5>
        {this.props.choiceSet.from.map((option, index) => {
          return (
            <div key={index}>
              <input
                type="checkbox"
                onClick={(event) => this.handleCheck(event)}
                name={option.type}
                value={option.url}
              />
              {option.name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Proficiencies;