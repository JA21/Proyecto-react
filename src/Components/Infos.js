import React, { Component } from 'react';

class Infos extends Component {
    render() {
        return <div>
            <h1>Nombre : {this.props.tarea.Nombre}</h1>
            <h2>Rango: {this.props.tarea.rango}</h2>
            <p>{this.props.tarea.descripcion}</p>
            <input type="Checkbox" />
            <button> x</button>
        </div>

    }
}

export default Infos;
