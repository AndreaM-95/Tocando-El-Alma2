import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

export default class EditStudent extends Component {
    constructor(props) {
        super(props);

        this.onChangeStudentName = this.onChangeStudentName.bind(this);
        this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: "",
            email: "",
            rollno: "",
        };
    }

    componentDidMount() { //se ejecuta inmediatamente despues de que el componente es montado sobre el dom
        axios
            .get("http://localhost:4000/students/edit-student/" + this.props.match.params.id)
            .then((res) => {
                this.setState({
                    name: res.data.name,
                    email: res.data.email,
                    rollno: res.data.rollno,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    onChangeStudentName(e) { //e para interactuar con los elementos del dom, target para traer el elemto
        this.setState({ name: e.target.value });
    }

    onChangeStudentEmail(e) {
        this.setState({ email: e.target.value });
    }

    onChangeStudentRollno(e) {
        this.setState({ rollno: e.target.value });
    }


    onSubmit(e) {
        e.preventDefault();

        const studentObject = {
            name: this.state.name, //las tres propiedades tienen el mismo nombre pero no son del misma objeto
            email: this.state.email,
            rollno: this.state.rollno,
        };

        axios
            .put(
                "http://localhost:4000/students/update-student/" + this.props.match.params.id,
                studentObject)

            .then((res) => {
                console.log(res.data);
                console.log("Estudiante actualizado con exito!");
            })

            .catch((error) => {
                console.log(error);
            });

        this.props.history.push("/student-list");
    }

    render() {
        return (
            <div className="form-wrapper">
                <Form onSubmit={this.onSubmit}>
                    <Form.Group controlId="Name">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.name}
                            onChange={this.onChangeStudentName}
                        />
                    </Form.Group>
                    <Form.Group controlId="Email">
                        <Form.Label>Correo Electronico</Form.Label>
                        <Form.Control
                            type="email"
                            value={this.state.email}
                            onChange={this.onChangeStudentEmail}
                        />
                    </Form.Group>
                    <Form.Group controlId="Codigo">
                        <Form.Label>Código</Form.Label>
                        <Form.Control
                            type="text"
                            value={this.state.rollno}
                            onChange={this.onChangeStudentRollno}
                        />
                    </Form.Group>

                    <Button variant="danger" size="lg" block="block" type="submit">
                        Actualizar Estudiante
                    </Button>
                </Form>
            </div>
        );
    }

}