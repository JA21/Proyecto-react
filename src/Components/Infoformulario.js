import React,{Component} from 'react';

export default class Infoformulario extends Component{

    state={
        title:'',
        descr:''
    }

     enviando =e=>{
         this.props.Agregandoinfo(this.state.title,this.state.descr);
        e.preventDefault();
    }
    cambioinput=e=>{
        
       this.setState({
           
           [e.target.name]: e.target.value
       })
    }
    render(){
       
        return (
            <form onSubmit={this.enviando}>
                <input 
                name="title"
                type="text" placeholder="escribe una informacion "
                 onChange={this.cambioinput} value={this.state.title}/>
                <textarea 
                name="descr"
                placeholder="Escriba una descripcion" 
                onChange={this.cambioinput} value={this.state.descr}/>
                <br/>
                <br/>
                <input type="submit" />
            </form> 
        ) 
    }
}