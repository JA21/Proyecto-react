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

    borrandoinfo=(id)=>{
      const nuevoinfo=this.state.info.filter(info=>info.id!==id);
      this.setState({info: nuevoinfo});
    }

    estadoinfo=(id)=>{
      const nuevoestado=this.state.info.map(
        info=>{
          if(info.id===id){
            info.estado=!info.estado
          }
          return info;
        });
        this.setState({info: nuevoestado});
    }

  render() {

    return (
      <div>
        <Infoformulario Agregandoinfo={this.Agregandoinfo} />
        <Info info={this.state.info} borrandoinfo={this.borrandoinfo} estadoinfo={this.estadoinfo}/>
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
