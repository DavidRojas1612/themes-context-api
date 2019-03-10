import React from 'react';
import { ThemeContext } from '../providers/themes';

class ThemedButton extends React.Component {
  render() {
    let props = this.props;
    let theme = this.context;
    return (
      <button
        {...props}
        style={{backgroundColor: theme.background}}
      >
        theme
      </button>
    );
  }
}
ThemedButton.contextType = ThemeContext;
/* 
   a la propiedad contextType en una clase se le puede asignar un objeto de contexto creado por React.createContext (). 
   Esto le permite consumir el valor actual más cercano de ese tipo de contexto usando this.context. 
*/
export default ThemedButton;