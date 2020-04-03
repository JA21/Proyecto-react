import React, { Component } from 'react';
import './info.css';
import PropTypes from 'prop-types';

class Infos extends Component {

    stylocompleto(){
        return{
        fontSize: '20px',
        color: this.props.tarea.estado ? 'gray': 'black',
        textDecoration: this.props.tarea.estado ? 'line-through': 'none'
    }
}

    render() {
       
        const {tarea}=this.props;
        
        //const redcolor = {Background: 'red'}
        return <div style={this.stylocompleto()}>
             {tarea.Nombre}
             {tarea.rango}
            {tarea.descripcion}
            <input type="Checkbox" />
            <button style={btnestilo}>
                 x </button>
        </div>

    }
}

Infos.propTypes={
    tarea:PropTypes.object

}

const btnestilo={
    fontSize:'18px',
    Background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '13px 15px',
    borderradius: '30%',
    float:'rigth',
    cursor:'pointer'
}

export default Infos;
