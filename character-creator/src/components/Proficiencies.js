import React, { Component } from 'react';

class Proficiencies extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: 0,
      limit: props.choiceSet.choose
    }
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Proficiencies;