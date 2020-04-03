import React,{Component} from 'react';
import './App.css';
import info from './sample/info.json';

//Importando 
import Info from './Components/Info.js';
import Infoformulario from './Components/Infoformulario';
class App extends Component{
  state = {
    info:info
}

 Agregandoinfo=()=>{
  console.log('agrando nueva info');
 }

  render() {
    
 return (
      <div>
        <Infoformulario addinfo={this.Agregandoinfo}/>
       <Info info={this.state.info}/>
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
