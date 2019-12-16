import React, { Component } from 'react';

import axios from 'axios';
import { Route, Link } from 'react-router-dom';

import Proficiencies from './Proficiencies';
import AbilityScores from './AbilityScores';
import CharacterSheet from './CharacterSheet';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      races: [],
      classes: [],
      race: {},
      class: {},
      proficiencies: [],
      abilities: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
      },
      character: {}
    }

    this.handleCheck = this.handleCheck.bind(this);
    this.abilityButton = this.abilityButton.bind(this);
  }

  async componentDidMount() {
    let races = await axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/races/`);
    let classes = await axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/`);
    this.setState({
      races: races.data.results,
      classes: classes.data.results
    })
  }

  async pickRace(e) {
    let newRace = await axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/races/${e.target.value}`);
    this.setState({
      race: newRace.data,
      abilities: {
        str: 8 + newRace.data.ability_bonuses[0],
        dex: 8 + newRace.data.ability_bonuses[1],
        con: 8 + newRace.data.ability_bonuses[2],
        int: 8 + newRace.data.ability_bonuses[3],
        wis: 8 + newRace.data.ability_bonuses[4],
        cha: 8 + newRace.data.ability_bonuses[5]
      } 
    })
    console.log(this.state.race);
    console.log(this.state.abilities);
  }

  async pickClass(e) {
    let newClass = await axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/${e.target.value}`);
    this.setState({
      class: newClass.data
    })
    console.log(this.state.class);
  }

  handleCheck(e) {
    let proficiency = e.target.name;
    let proficiencies = this.state.proficiencies;
    if (e.target.defaultChecked === true) {
      proficiencies.push(proficiency);
    }
    if (e.target.defaultChecked === false) {
      if (proficiencies.indexOf(proficiency) !== -1) {
        proficiencies.splice(proficiencies.indexOf(proficiency), 1);
      }
    }
    this.setState({
      proficiencies: proficiencies
    })
  }

  abilityButton(e, operator, ability, index) {
    e.preventDefault();
    let score = this.state.abilities[ability];
    if (operator === 'minus' && score > 0) {
      score--;
    }
    if (operator === 'plus' && score < (18 + this.state.race.ability_bonuses[index])) {
      score++;
    }
    this.setState(prevState =>({
      abilities: {
        ...prevState.abilities,
        [ability]: score 
      },
    }))
  }

  createCharacter(e) {
    let character = {
      hitDie: this.state.class.hit_die,
      proficiencies: this.state.proficiencies,
      abilities: this.state.abilities,
      race: this.state.race.name,
      class: this.state.class.name
    }
    this.setState({
      character: character
    })
    
  }

  render() {
    return (
      <div>
        <Route exact path="/" render={(props) =>
          <form>
            {this.state.races.length > 0 &&
              <select onChange={(e) => this.pickRace(e)} defaultValue="Pick a Race">
                <option disabled>Pick a Race</option>
                {this.state.races.map((option, index) => {
                  return (<option key={index} value={index + 1}>{option.name}</option>)
                })}
              </select>}
            {this.state.classes.length > 0 &&
              <select onChange={(e) => this.pickClass(e)} defaultValue="Pick a Class">
                <option disabled>Pick a Class</option>
                {this.state.classes.map((option, index) => {
                  return (<option key={index} value={index + 1}>{option.name}</option>)
                })}
              </select>}
            {this.state.class.proficiency_choices && this.state.class.proficiency_choices.map((choiceSet, index) => {
              return (<Proficiencies key={index} choiceSet={choiceSet} handleCheck={this.handleCheck} />)
            })}
            {this.state.race.ability_bonuses &&
              <AbilityScores abilities={this.state.abilities} abilityButton={this.abilityButton} />
            }
            <Link to="/character" onClick={(e) => this.createCharacter(e)}>
              <button>Create Character</button>
            </Link>
          </form>
        } />
        <Route path="/character" render={(props) => 
          <CharacterSheet character={this.state.character} />
        } />
      </div>
    )
  }
}

export default Form;