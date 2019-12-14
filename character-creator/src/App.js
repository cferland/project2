import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Proficiencies from './components/Proficiencies';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      race: {},
      class: {},
      character: {}
    }
  }

  async pickRace(e) {
    let newRace = await axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/races/${e.target.value}`);
    this.setState({
      race: newRace.data
    })
    console.log(this.state.race);
  }

  async pickClass(e) {
    let newClass = await axios.get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/classes/${e.target.value}`);
    this.setState({
      class: newClass.data
    })
    console.log(this.state.class);
  }

  createCharacter(e) {
    e.preventDefault();
    let character = {
      hitDie: this.state.class.hit_die,
      strength: 10 + this.state.race.ability_bonuses[0],
      dexterity: 10 + this.state.race.ability_bonuses[1],
      constitution: 10 + this.state.race.ability_bonuses[2],
      intellect: 10 + this.state.race.ability_bonuses[3],
      wisdom: 10 + this.state.race.ability_bonuses[4],
      charisma: 10 + this.state.race.ability_bonuses[5],
      race: this.state.race.name,
      class: this.state.class.name
    }
    this.setState({
      character: character

    })
    console.log(this.state.character)
  }

  render() {
    return (
      <div className="App">
        <form>
          <select onChange={(e) => this.pickRace(e)} defaultValue="Pick a Race">
            <option disabled>Pick a Race</option>
            <option value="1">Dwarf</option>
            <option value="2">Elf</option>
            <option value="3">Halfling</option>
          </select>
          <select onChange={(e) => this.pickClass(e)} defaultValue="Pick a Class">
            <option disabled>Pick a Class</option>
            <option value="1">Barbarian</option>
            <option value="2">Bard</option>
            <option value="3">Cleric</option>
          </select>
          {this.state.class.proficiency_choices && this.state.class.proficiency_choices.map((choiceSet, index) => {
            return (<Proficiencies key={index} choiceSet={choiceSet} />)
          })}
          <button onClick={(e) => this.createCharacter(e)}>Create Character</button>
        </form>
      </div>
    );
  }
}

export default App;
