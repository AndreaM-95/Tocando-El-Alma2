import './CSS/nav-general-pie.css';
import './CSS/avance.css';
import './CSS/burbujas.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CreateTask from "./components/create-task.component";
import EditTask from "./components/edit-task.component";
import TaskList from "./components/task-list.component";


function App() {
  return (

    <div className="body">

      <Router>

        <h1 class="titulo_principal">¡Sube tu avance!</h1>
        
        <div class="bienvenida">
          <p class="saludo">&#127900; &#119137; ¡Hola guitarrista! Estás en la última sección, deja tu huella por aquí, siéntete orgullo de todo lo que has construido hasta ahora y disfruta de tu progreso. ¡Estamos orgullosos de ti!. Te dejamos una canción de fondo que puede animarte a seguir explorando..¿Has escuchado la canción de Mario Bros en guitarra? ¡Dale en play! recuerda que puedes adecuar el volúmen según te sea más cómodo. &#127900; &#119137;</p>
          <audio class="audio" src="multimedia/musica/mario-bross-guitarra-.mp3"controls loop="true" volumen="10%"></audio>
        </div>
        <header className="App-header">

          <Navbar className='opcionesNav'>
              <Nav  className='opcionesNav'>
                  <Link to={"/create-task"}  className="btn-opcion">
                    Crear Evidencia
                  </Link>

                  <Link to={"/task-list"}  className="btn-opcion">
                    Listar Evidencias
                  </Link>
              </Nav>
          </Navbar>
        </header>


        <Container>

          <Row>
            <Col md={12}>
              <div className="wrapper">

                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <CreateTask {...props} />}
                  />

                  <Route
                    exact
                    path="/create-task"
                    component={(props) => <CreateTask {...props} />}
                  />

                  <Route
                    exact
                    path="/edit-task/:id"
                    component={(props) => <EditTask {...props} />}
                  />

                  <Route
                    exact
                    path="/task-list"
                    component={(props) => <TaskList {...props} />}
                  />
                </Switch>

              </div>

            </Col>

          </Row>

        </Container>

      </Router>

    </div>

  );
}

export default App;
