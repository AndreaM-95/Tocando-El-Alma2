import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default class TaskTableRow extends Component {
    constructor(props) {
        super(props);
        this.deleteTask = this.deleteTask.bind(this);
    }

    deleteTask() {
        axios
            .delete("http://localhost:4000/tasks/delete-task/" + this.props.obj._id)
            .then((res) => {
                console.log("Actividad eliminada con exito");

            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <tr className="datos-tabla">
                <td>{this.props.obj.fecha}</td>
                <td>{this.props.obj.actividad}</td>
                <td>{this.props.obj.observacion}</td>
                <td>{this.props.obj.evidencia}</td>
                <td>
                    <Link className="link"
                        path={"product/:id"}
                        to={"/edit-task/" + this.props.obj._id}
                        >Editar 
                    </Link> 
                    
                    <button onClick={this.deleteTask} className="btn-edit-delet">
                        Borrar
                    </button>
                </td>
            </tr>
        );
    }
}