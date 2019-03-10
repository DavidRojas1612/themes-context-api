import React, { Component } from 'react';
import { ThemeContext, UserContext, themes } from './providers/themes';
import './App.css';
import Toolbar from './components/Toolbar';
import ThemeTogglerButton from './components/ThemeTogglerButton';
import UserProfile from './components/UserProfile';

class App extends Component {
  componentDidMount = () => {
    console.log(this.state)
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  };

  changeUser = (newUser) => {
    this.setState({
      user: newUser
    })
  }
  state = {
    theme: themes.light,
    toggleTheme: this.toggleTheme,
    user: 'David Rojas Herrera'
  };

  render() {
    return (
      <div>
        <ThemeContext.Provider value={this.state}>
          <UserContext.Provider value={{ user: this.state.user }}>
            <UserProfile />
          </UserContext.Provider>
          <ThemeTogglerButton />
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>
      </div>
    );
  }
}

export default App;
