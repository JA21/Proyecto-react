import React from 'react';
import './App.css';


// /*function Hellowordl (props){
// return( 
// <div id="hello">
// <h3>{props.subindice}</h3>
//   {props.texto}
//   </div>
// )};**/

class Hellowordl extends React.Component{
  
  state={
    show:true
  }

  mostrar=()=>{
    this.setState({show: !this.state.show})
  }

  render(){
    if(this.state.show){
    return(
    <div id="hello">
 <h3>{this.props.subindice}</h3>
  {this.props.texto}
  <button onClick={this.mostrar} >Quitar texto</button>
 </div>
    )
  }else{
    return (
    <div>
      <h1>No hay elementos</h1>
      <button onClick={this.mostrar}>Mostrar texto</button>
    </div>
    )
  }
  }
}

function App() {
  return (
   <div>
     Este es mi componente:
      <Hellowordl texto="saludo jorge" subindice="AMO" />
      <Hellowordl texto="saludo Andres"/>
      <Hellowordl texto="saludo K"/>
   </div>
  );
}

export default App;
