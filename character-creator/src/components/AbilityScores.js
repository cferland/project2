import React, { Component } from 'react';

class AbilityScores extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <ul className="scores">
        <div>
          <h6>Strength</h6>
          <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'str', 0)}>-</button>{this.props.abilities.str}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'str', 0)}>+</button></li>
        </div>
        <div>
          <h6>Dexterity</h6>
          <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'dex', 1)}>-</button>{this.props.abilities.dex}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'dex', 1)}>+</button></li>
        </div>
        <div>
          <h6>Constitution</h6>
          <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'con', 2)}>-</button>{this.props.abilities.con}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'con', 2)}>+</button></li>
        </div>
        <div>
          <h6>Intelligence</h6>
          <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'int', 3)}>-</button>{this.props.abilities.int}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'int', 3)}>+</button></li>
        </div>
        <div>
          <h6>Wisdom</h6>
          <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'wis', 4)}>-</button>{this.props.abilities.wis}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'wis', 4)}>+</button></li>
        </div>
        <div>
          <h6>Charisma</h6>
          <li ><button onClick={(e) => this.props.abilityButton(e, 'minus', 'cha', 5)}>-</button>{this.props.abilities.cha}<button onClick={(e) => this.props.abilityButton(e, 'plus', 'cha', 5)}>+</button></li>
        </div>
      </ul>
    )
  }
}

export default AbilityScores;