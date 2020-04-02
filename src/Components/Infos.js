import React, { Component } from 'react';
import './info.css';
class Infos extends Component {
    render() {

        const {tarea}=this.props;
        //const redcolor = {Background: 'red'}
        return <div >
            <h1>Nombre : {tarea.Nombre}</h1>
            <h2>Rango: {tarea.rango}</h2>
            <p>{tarea.descripcion}</p>
            <input type="Checkbox" />
            <button style={btnestilo}> x</button>
        </div>

    }
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
