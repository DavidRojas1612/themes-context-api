import React, { Component } from 'react';
import {ThemeContext, themes} from './providers/themes';
import './App.css';
import Toolbar from './components/Toolbar';

class App extends Component {
  state = {
    theme: themes.light,
  };

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
