import React, { Component } from 'react';

class AbilityScores extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strength: 10 + props.abilities[0],
      dexterity: 10 + props.abilities[1],
      constitution: 10 + props.abilities[2],
      intellect: 10 + props.abilities[3],
      wisdom: 10 + props.abilities[4],
      charisma: 10 + props.abilities[5]
    }
  }

  render() {
    return (
      <ul>
        <li>STR: {this.state.strength}</li>
        <li>DEX: {this.state.dexterity}</li>
        <li>CON: {this.state.constitution}</li>
        <li>INT: {this.state.intellect}</li>
        <li>WIS: {this.state.wisdom}</li>
        <li>CHA: {this.state.charisma}</li>
      </ul>
    )
  }
}

export default AbilityScores;