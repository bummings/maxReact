import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { name: 'faux', age: 31 },
      { name: 'loro', age: 28 },
      { name: 'graf', age: 14 }
    ],
    otherState: 'some value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 31 },
        { name: 'loro', age: 28 },
        { name: 'graf', age: 14 }
      ]
    })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'faux', age: 31 },
        { name: event.target.value, age: 28 },
        { name: 'graf', age: 14 }
      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            click={this.switchNameHandler.bind(this, 'FAUX')} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            changed={this.nameChangedHandler} />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} />
        </div>
      );
    }
  
    return (
      <div className="App">
        <h1>this is a header</h1>
        <button
          onClick={this.togglePersonsHandler}>Toggle persons</button>
        
        {persons}

      </div>
    );
  }
}

export default App;
