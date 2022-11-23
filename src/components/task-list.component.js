import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import TaskTableRow from "./TaskTableRow";

export default class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: [],
        };
    }

    componentDidMount() {
        axios
            .get("http://localhost:4000/tasks")
            .then((res) => {
                this.setState({
                    task: res.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    DataTable() {
        return this.state.task.map((res, i) => {
            return <TaskTableRow obj={res} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th className="titulo-table">Fecha</th>
                            <th className="titulo-table">Actividad</th>
                            <th className="titulo-table">Observación</th>
                            <th className="titulo-table">Link Evidencia</th>
                            <th className="titulo-table">Acción</th>
                        </tr>
                    </thead>
                    <tbody> {this.DataTable()}  </tbody>
                </Table>
            </div>
        );
    }

}