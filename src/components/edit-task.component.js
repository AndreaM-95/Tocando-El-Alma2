import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"

export default class EditTask extends Component {
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

    componentDidMount() { //se ejecuta inmediatamente despues de que el componente es montado sobre el dom
        axios
            .get("http://localhost:4000/tasks/edit-task/" + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    fecha: res.data.fecha,
                    actividad: res.data.actividad,
                    observacion: res.data.observacion,
                    evidencia: res.data.evidencia,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChangeTaskFecha(e) { //e para interactuar con los elementos del dom, target para traer el elemto
        this.setState({ fecha: e.target.value });
    }

    onChangeTaskActividad(e) {
        this.setState({ actividad: e.target.value });
    }

    onChangeTaskObservacion(e) {
        this.setState({ observacion: e.target.value });
    }

    onChangeTaskEvidencia(e){
        this.setState({ evidencia: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const taskObject = {
            fecha:this.state.fecha,   //Obtenemos el estado actual
            actividad:this.state.actividad,
            observacion:this.state.observacion,
            evidencia:this.state.evidencia,
        };

        axios
            .put(
                "http://localhost:4000/tasks/update-task/" + this.props.match.params.id,
                taskObject)

            .then((res) => {
                console.log(res.data);
                console.log("Actividad actualizado con exito!");
            })

            .catch((error) => {
                console.log(error);
            });

        this.props.history.push("/task-list");
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmit} className="table">
                    <Form.Group controlId="Fecha" className="input">
                        <Form.Label className="label">&#128467; Fecha &#128467;</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.fecha}
                            onChange={this.onChangeTaskFecha}
                        />
                    </Form.Group>
                    <Form.Group controlId="Actividad" className="input">
                        <Form.Label className="label">&#128221; Actividad &#128221;</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.actividad}
                            onChange={this.onChangeTaskActividad}
                        />
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

                    <button type="submit" className="btn-avance">
                        Actualizar Actividad
                    </button>
                </Form>
            </div>
        );
    }
}