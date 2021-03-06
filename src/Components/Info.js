import React,{Component} from 'react';
import Infos from './Infos';
import PropTypes from 'prop-types';


class Info extends Component{
    render(){

        return  this.props.info.map(tarea=> <Infos 
            tarea={tarea} key={tarea.id}
             borrandoinfo={this.props.borrandoinfo}
             estadoinfo={this.props.estadoinfo} />)
        
    }
} 

 Info.propTypes={
     info:PropTypes.array.isRequired
 }


export default Info;