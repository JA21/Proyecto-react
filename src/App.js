import React, { Component } from 'react';
import './App.css';
import info from './sample/info.json';

//Importando 
import Info from './Components/Info.js';
import Infoformulario from './Components/Infoformulario';
class App extends Component {
  state = {
    info: info
  }

  Agregandoinfo = (title, descr) => {
    const newinfo = {
      title: title,
      descr: descr,
      id: this.state.info.length
    }
    this.setState({
      info: [...this.state.info, newinfo]
    })
  }

  render() {

    return (
      <div>
        <Infoformulario Agregandoinfo={this.Agregandoinfo} />
        <Info info={this.state.info} />
      </div>)

  }
}
// function App() {
//   return (
//    <div>
//      Este es mi componente:
//       <Hellowordl texto="saludo jorge" subindice="AMO" />
//       <Hellowordl texto="saludo Andres"/>
//       <Hellowordl texto="saludo K"/>
//    </div>
//   );
// }

export default App;
