import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
        </form>
      </div>
    );
  }
}

export default App;
