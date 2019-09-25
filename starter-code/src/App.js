import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';
import ContactList from './ContactList';


const firstBatch = contacts.slice(0, 5)


class App extends Component {

  state = {
    celebs: firstBatch
  }



  handleClick = () => {
    let randomContact = contacts[Math.floor(Math.random() * contacts.length)];
    while (this.state.celebs.includes(randomContact)) {
      randomContact = contacts[Math.floor(Math.random() * contacts.length)];
      console.log("rerun");
    }
    this.setState({
      celebs: [randomContact, ...this.state.celebs]
    });
  };

  sortByName = () => {
    const compare = (a, b) => {
      if (a.name < b.name) return -1;
      else if (a.name > b.name) return 1;
      return 0;
    };

    this.setState({
      celebs: [...this.state.celebs].sort(compare)
    });
  };

  sortByPop = () => {
    const compare = (a, b) => {
      if (b.popularity < a.popularity) return -1;
      else if (b.popularity > a.popularity) return 1;
      return 0;
    };

    this.setState({
      celebs: [...this.state.celebs].sort(compare)
    });
  };

  deleteContact = (id) => {
    console.log(id)
    const filtered = this.state.celebs.filter(contact => {
      if (contact.id !== id) return true;
    })
    this.setState({
      celebs: filtered
    });
  };


  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Add Random Contact</button>
        <button onClick={this.sortByName}>Sort by Name</button>
        <button onClick={this.sortByPop}>Sort by Popularity</button>
        <h1>IronContacts</h1>
        <ContactList
          deleteContact={this.deleteContact}
          contacts={this.state.celebs} />
      </div>
    );
  }
}

export default App;
