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
          <select onChange={(e) => this.pickClass(e)} defaultValue="Pick a Class">
            <option disabled>Pick a Class</option>
            <option value="1">Barbarian</option>
            <option value="2">Bard</option>
            <option value="3">Cleric</option>
          </select>
        </form>
      </div>
    );
  }
}

export default App;
