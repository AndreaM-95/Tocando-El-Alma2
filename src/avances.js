import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/nav-general-pie.css"
import "./CSS/panel.css"
import "./CSS/animacion-seccion.css"
import Image from "react-bootstrap/Image";

function App(){
    return(       
        <div>
            
            <nav className="navbar navbar-expand-md ">
                <a href="index.html"><button class="btn-ingresar">Salir</button></a>
            </nav>
       
            <h1 className="titulo_principal">Tocando el alma</h1>
        
            <div className="bienvenida">
                <p className="saludo">&#127900; &#119137; ¡Hola! Este es el panel general, deslizate sobre cada imágen y lee sobre qué trata cada sección, esperamos poder acompañarte en este camino lleno de aprendizaje. Te dejamos una canción de fondo que pudes reproducir y adecuar el volúmen según te sea más cómodo. ¡Disfruta tu práctica! &#127900; &#119137;</p>
                <audio className="audio" src="#"controls loop="true" volumen="10%"></audio>
            </div>

            <main>
                <div  className="container">
                    <div className="img-card">
                        <div className="card-header titulo-producto"><h4 className="my-0 font-weight-bold">Tipos de guitarra</h4></div>
                        <div className="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/guitarras.jpg" className="img"/>
                                <div className="capa">
                                    <p>Aquí encontrarás las descripción de las distintas guitarras que hay, desde una guitarra acústica hasta una eléctrica; también podrás ver algunas referencias y diseños.</p>
                                </div>
                            </figure>
                            <a href="tipos.html" class="btn btn-block btn-primary agregar-carrito" data-id="1" onclick="sonido.play()">Ingresar</a>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">Conoce tu guitarra</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/guitarra.jpg"  className="img"/>
                                <div class="capa">
                                    <p>Ahora que ya sabes que guitarra tienes, ¿Qué te parece si exploramos sobre ella?; pues bien, aquí encontrarás la descripción de qué se conforma una guitarra y para qué sirven cada una de sus partes.</p>
                                </div>
                            </figure>

                            
                            <a href="conoceGuitarra.html" class="btn btn-block btn-primary agregar-carrito" data-id="2" onclick="sonido.play()">
                            
                            </a>
                        </div>
                    </div>

                    <div class="img-card">
                        <div className="card-header titulo-producto"><h4 class="my-0 font-weight-bold">Teoría Musical</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/teoria.jpg"  className="img"/>
                                <div class="capa">
                                    <p>Ahora que sabes lo necesario para usar adecuadamente tu guitarra es hora de aprender algo que muchos músicos que están empezando lo evaden.. ¡Así es! la teoría, ¡pero no te asustes! aquí estaremos para enseñarte de una manera clara y amigable.</p>
                                </div>
                            </figure>
                            <a href="teoria.html" class="btn btn-block btn-primary agregar-carrito" data-id="3" onclick="sonido.play()">Ingresar</a>
                        </div>
                    </div>
        
                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold ">Ejercicios prácticos</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/ejercicios.jpg" className="img"/>
                                <div class="capa">
                                    <p>La digitación es la formación y aprendizaje de los dedos al tocar un instrumento musical, por esto, es fundamental que realices los ejercicios propuestos en esta sección para que generes una habilidad en el movimiento de ellos.</p>
                                </div>
                            </figure>
                            <a href="ejercicios.html" class="btn btn-block btn-primary agregar-carrito" data-id="4" onclick="sonido.play()">Ingresar</a>
                        </div>
                    </div>
                    
                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold ">Tutoriales</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/clases.jpg" className="img"/>
                                <div class="capa">
                                    <p>Ahora que has practicado tus ejercicios para generar una mayor flexibilidad y agilidad en tus manos, ¿Que te parece si empezamos a practicar con una canción?, aquí hay algunas que te pueden gustar.</p>
                                </div>
                            </figure>
                            <a href="tutorial.html" class="btn btn-block btn-primary agregar-carrito" data-id="5"  onclick="sonido.play()">Ingresar</a>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold ">¡Sube tu avance!</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/avance.jpg" className="img"/>
                                <div class="capa">
                                    <p>En esta sección te sentirás orgulloso de tu progreso, ya que aquí podrás tener tus avances  con los ejercicios, las canciones que lograste sacar y cómo te sentiste al realizar cada ítem propuesto.</p>
                                </div>
                            </figure>
                            <a href="avance.html" class="btn btn-block btn-primary agregar-carrito" data-id="6"  onclick="sonido.play()">Ingresar</a>
                        </div>
                    </div>
                </div>
            </main>

            <div className="rodapie">
                <Image className="rodapie-img" src="multimedia/imagenes/logo.png"/>
                <p className="rodapie-texto"><strong>Desarrollado por Andrea Mejia - 2022</strong> </p>
                <p className="rodapie-texto"><strong>&copy Copyright</strong></p>
            </div>
        </div>
        
    );
}

export default App;
