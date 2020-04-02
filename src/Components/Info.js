import React,{Component} from 'react';
import Infos from './Infos';

class Info extends Component{
    render(){

        return  this.props.info.map(tarea=> <Infos tarea={tarea} key={tarea.id} />)
        
    }
} 

export default Info;