import React,{Component} from 'react';

export default class Infoformulario extends Component{

    state={
        title:'',
        descr:''
    }

     enviando =e=>{
         console.log("enviando");
        e.preventDefault();
    }
    cambioinput=e=>{
        console.log(e.target.name, e.target.value);
       this.setState({
           
           [e.target.name]: e.target.value
       })
    }
    render(){
        this.props.addinfo();
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