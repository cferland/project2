import React, { Component } from 'react';

class AbilityScores extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <ul>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'str')}>-</button>STR: {this.props.abilities.str}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'str')}>+</button></li>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'dex')}>-</button>DEX: {this.props.abilities.dex}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'dex')}>+</button></li>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'con')}>-</button>CON: {this.props.abilities.con}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'con')}>+</button></li>
        <li >INT: {this.props.abilities.int}</li>
        <li >WIS: {this.props.abilities.wis}</li>
        <li >CHA: {this.props.abilities.cha}</li>
      </ul>
    )
  }
}

export default AbilityScores;