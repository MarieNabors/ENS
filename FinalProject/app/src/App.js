//importing components to the app.js
import React, { Component } from 'react';
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import Title from "./components/Title";
import Nav from "./components/Nav";

import './App.css';

//drop down menu
let Dropdown = require('react-simple-dropdown');
let DropdownTrigger = Dropdown.DropdownTrigger;
let DropdownContent = Dropdown.DropdownContent;

class App extends Component {
  state = {

  };

  render() {
    return (

        <Wrapper>
        <Jumbotron
        />


              <Nav
              />

        <Title
        />
        <Footer
        />
        </Wrapper>


    );
  }
}

export default App;
