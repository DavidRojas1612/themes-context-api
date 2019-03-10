import React from 'react'

export const themes = {
    light: {
        foreground: '#000000',
        background: '#eeeeee',
    },
    dark: {
        foreground: '#ffffff',
        background: '#222222',
    }
}  // but also a toggleTheme function from the context
export const ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { console.log('hola themes') },
})

export const UserContext = React.createContext('David Rojas Herrera')