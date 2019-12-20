import React, { Component } from 'react';

import axios from 'axios';
import { Route, Link, Redirect } from 'react-router-dom';

import Alignment from './Alignment';
import Proficiencies from './Proficiencies';
import AbilityScores from './AbilityScores';
import CharacterSheet from './CharacterSheet';

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      races: [],
      classes: [],
      alignment: '',
      race: {},
      class: {},
      level: {},
      proficiencies: [],
      abilities: {
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0
      },
      points: 0,
      character: {}
    }

    this.handleCheck = this.handleCheck.bind(this);
    this.handleRadio = this.handleRadio.bind(this);
    this.abilityButton = this.abilityButton.bind(this);
    this.reroll = this.reroll.bind(this);
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
        str: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + newRace.data.ability_bonuses[0],
        dex: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + newRace.data.ability_bonuses[1],
        con: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + newRace.data.ability_bonuses[2],
        int: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + newRace.data.ability_bonuses[3],
        wis: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + newRace.data.ability_bonuses[4],
        cha: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + newRace.data.ability_bonuses[5]
      },
      points: 0
    })
  }

  async pickClass(e) {
    let newClass = await axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/${e.target.value}`);
    let name = newClass.data.name;
    let level = await axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/${name.toLowerCase()}/level/1`);
    this.setState({
      class: newClass.data,
      level: level.data
    })
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

  handleRadio(e) {
    this.setState({
      alignment: e.target.value
    })
  }

  abilityButton(e, operator, ability, index) {
    e.preventDefault();
    let score = this.state.abilities[ability];
    let points = this.state.points;
    if (operator === 'minus' && score > 0) {
      score--;
      points++;
    }
    if (operator === 'plus' && score < (18 + this.state.race.ability_bonuses[index]) && points > 0) {
      score++;
      points--;
    }
    this.setState(prevState => ({
      abilities: {
        ...prevState.abilities,
        [ability]: score
      },
      points: points
    }))
  }

  reroll(e) {
    e.preventDefault();
    this.setState({
      abilities: {
        str: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + this.state.race.ability_bonuses[0],
        dex: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + this.state.race.ability_bonuses[1],
        con: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + this.state.race.ability_bonuses[2],
        int: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + this.state.race.ability_bonuses[3],
        wis: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + this.state.race.ability_bonuses[4],
        cha: (Math.floor(Math.random() * (18 - 6 + 1)) + 6) + this.state.race.ability_bonuses[5]
      },
      points: 0
    })
  }

  createCharacter(e) {
    let proficiencies = this.state.proficiencies;
    this.state.class.proficiencies.forEach((proficiency) => proficiencies.push(proficiency.name));
    this.state.race.starting_proficiencies.forEach((proficiency) => proficiencies.push(proficiency.name));
    let savingThrows = this.state.class.saving_throws;
    this.state.class.saving_throws.forEach((save) => savingThrows.push(save.name));
    let modifiers = {
      str: Math.floor((this.state.abilities.str - 10) / 2),
      dex: Math.floor((this.state.abilities.dex - 10) / 2),
      con: Math.floor((this.state.abilities.con - 10) / 2),
      int: Math.floor((this.state.abilities.int - 10) / 2),
      wis: Math.floor((this.state.abilities.wis - 10) / 2),
      cha: Math.floor((this.state.abilities.cha - 10) / 2)
    }
    let features = this.state.level.features;
    this.state.level.feature_choices.forEach((feature) => features.push(feature));
    let character = {
      name: this.state.name,
      alignment: this.state.alignment,
      hitDie: this.state.class.hit_die,
      proficiencies: proficiencies,
      abilities: this.state.abilities,
      modifiers: modifiers,
      savingThrows: savingThrows,
      race: this.state.race.name,
      class: this.state.class.name,
      languages: this.state.race.languages,
      traits: this.state.race.traits,
      features: features
    }
    this.setState({
      character: character,
      name: '',
      alignment: '',
      race: {},
      class: {},
      level: {},
      proficiencies: []
    })

  }

  render() {
    return (
      <div>
        <Route exact path="/" render={(props) =>
          <form>
            <div className="instructions">
              <p>Welcome to the Dungeons & Dragons Character Creator!</p>
              <p>
                Begin by entering a name, selecting your preferred race and class, then choosing your character's alignment.
                From there, you will be able to modify their attributes and select any relevant proficiencies.
                Once you are finished, click the button that appears to generate your character sheet.
              </p>
            </div>
            <input className="name-input" type="text" onChange={(e) => this.setState({ name: e.target.value })} placeholder="Character Name" />
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
                  return (<option key={index} name={option.name} value={index + 1}>{option.name}</option>)
                })}
              </select>}
            {this.state.race.alignment &&
              <Alignment alignment={this.state.race.alignment} handleRadio={this.handleRadio} />
            }
            {this.state.race.ability_bonuses &&
              <AbilityScores points={this.state.points} abilities={this.state.abilities} abilityButton={this.abilityButton} reroll={this.reroll} />
            }
            <div className="proficiencies">
              {this.state.class.proficiency_choices && this.state.class.proficiency_choices.map((choiceSet, index) => {
                return (<Proficiencies key={index} class={this.state.class.name} choiceSet={choiceSet} handleCheck={this.handleCheck} />)
              })}
            </div>
            {this.state.race.name && this.state.class.name && this.state.alignment !== '' &&
              <Link to="/character" onClick={(e) => this.createCharacter(e)}>
                <button className="create">Finish</button>
              </Link>
            }
          </form>
        } />
        <Route path="/character" render={(props) =>
          this.state.character.abilities ? <CharacterSheet character={this.state.character} /> : <Redirect to="/" />
        } />
      </div>
    )
  }
}

export default Form;