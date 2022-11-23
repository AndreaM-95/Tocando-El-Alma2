import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default class CreateTask extends Component {

    // Constructor
    constructor(props) {
        super(props); //inicializa las props y siempre va de primera

        //establecer un estado inicial
        this.onChangeTaskFecha=this.onChangeTaskFecha.bind(this);
        this.onChangeTaskActividad=this.onChangeTaskActividad.bind(this);
        this.onChangeTaskObservacion=this.onChangeTaskObservacion.bind(this);
        this.onChangeTaskEvidencia=this.onChangeTaskEvidencia.bind(this);

        //inicializar el boton submit cuando ocurra el evento
        this.onSubmit = this.onSubmit.bind(this);

        //inicializar los objetos en un estado vacio para que se vayan actualizando
        this.state = {
            fecha:"",
            actividad:"",
            observacion:"",
            evidencia:"",
        };
    }

    onChangeTaskFecha(e) { //la letra 'e' sirve para tener acceso a los eventos y manejar el dom 
        //para actualizar los estados por fuera del constructor
        this.setState({ fecha: e.target.value });
    }

    onChangeTaskActividad(e) {
        this.setState({ actividad: e.target.value });
    }

    onChangeTaskObservacion(e) {
        this.setState({ observacion: e.target.value });
    }

    onChangeTaskEvidencia(e) {
        this.setState({ evidencia: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        //vamos a crear el objeto student y los datos que carga el usuario
        const taskObject = {     //Creamos el objeto
            fecha:this.state.fecha,   //Obtenemos el estado actual
            actividad:this.state.actividad,
            observacion:this.state.observacion,
            evidencia:this.state.evidencia,
        }

        //envio de datos con axios y post
        axios
            .post("http://localhost:4000/tasks/create-task", taskObject) //envio de datos
            .then((res) => console.log(res.data)); //esta es una promesa

        //vamos a reseterar el estado de los elemetos
        this.setState({
            fecha:"",
            actividad:"",
            observacion:"",
            evidencia:"",
        });
    }


    render() {
        return (
            <div className="body">

                <Form onSubmit={this.onSubmit} className="table">

                    <Form.Group controlId="Fecha" className="input">
                        <Form.Label className="label">&#128467; Fecha &#128467;</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.fecha}
                            onChange={this.onChangeTaskFecha} />
                    </Form.Group>

                    <Form.Group controlId="Actividad" className="input">
                        <Form.Label className="label">&#128221; Actividad &#128221;</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.actividad}
                            onChange={this.onChangeTaskActividad} />
                    </Form.Group>

                    <Form.Group controlId="Observacion" className="input">
                        <Form.Label className="label">&#128270; Observación &#128270;</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.observacion}
                            onChange={this.onChangeTaskObservacion} />
                    </Form.Group>

                    <Form.Group controlId="evidencia" className="input">
                        <Form.Label className="label">&#128279; Link Evidencia &#128279;</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.evidencia}
                            onChange={this.onChangeTaskEvidencia} />
                    </Form.Group>

                    <button type="submit"  className="btn-avance">Crear Evidencia</button>

                </Form>

            </div>
        );
    }

}
