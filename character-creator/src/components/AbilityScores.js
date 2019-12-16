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
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'int')}>-</button>INT: {this.props.abilities.int}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'int')}>+</button></li>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'wis')}>-</button>WIS: {this.props.abilities.wis}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'wis')}>+</button></li>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'cha')}>-</button>CHA: {this.props.abilities.cha}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'cha')}>+</button></li>
      </ul>
    )
  }
}

export default AbilityScores;