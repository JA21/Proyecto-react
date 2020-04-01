import React,{Component} from 'react';
import './App.css';
import info from './sample/info'


class App extends Component{
  state = {
    info:info

  }

  render() {
 return (
      <div>
        {this.state.info.map(e=> <p key={e.id}>
          <h1>Nombre : {e.Nombre}</h1>
        <h2>Rango: {e.rango}</h2>
        <p>{e.descripcion}</p>
        </p>)}
      </div>
    );
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
