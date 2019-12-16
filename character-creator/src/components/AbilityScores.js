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
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'str', 0)}>-</button>STR: {this.props.abilities.str}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'str', 0)}>+</button></li>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'dex', 1)}>-</button>DEX: {this.props.abilities.dex}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'dex', 1)}>+</button></li>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'con', 2)}>-</button>CON: {this.props.abilities.con}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'con', 2)}>+</button></li>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'int', 3)}>-</button>INT: {this.props.abilities.int}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'int', 3)}>+</button></li>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'wis', 4)}>-</button>WIS: {this.props.abilities.wis}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'wis', 4)}>+</button></li>
        <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'cha', 5)}>-</button>CHA: {this.props.abilities.cha}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'cha', 5)}>+</button></li>
      </ul>
    )
  }
}

export default AbilityScores;