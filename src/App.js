import React,{Component} from 'react';
import './App.css';
import info from './sample/info.json'
import Info from './Components/Info.js'

class App extends Component{
  state = {
    info:info

  }
//sad
  render() {
 return (
      <div>
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
