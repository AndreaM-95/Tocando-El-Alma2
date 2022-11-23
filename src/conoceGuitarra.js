import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/nav-general-pie.css"
import "./CSS/panel.css"
import "./CSS/animacion-seccion.css"
import Image from "react-bootstrap/Image";

function conoceGuitarra(){
    return(
        <div>
            <nav class="navbar navbar-expand-md ">
                <a href="panel.html"><button class="btn-ingresar">Volver</button></a>
                <a href="index.html"><button class="btn-ingresar">Salir</button></a>
            </nav>
        
            <h1 class="titulo_principal">Conoce tu guitarra</h1>
            
            <div class="bienvenida">
                <p class="saludo"><br></br>
                    &#127900; &#119137; ¡Hola aprendiz! Estás en tu segunda sección, te invitamos a recorrer las imágenes y descripciones, analiza tu guitarra y comparala con lo que te presentamos aquí, aprende a conocer este hermoso instrumento. Te dejamos una canción de fondo que pudes reproducir y adecuar el volúmen según te sea más cómodo. ¡Feliz lección! &#127900; &#119137;
                </p>
                <audio class="audio" src="multimedia/musica/guitarra-fondo.mp3"controls loop="true" volumen="10%"></audio>
            </div>

            <main>
                <div class="container" id="lista-productos">
                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">El clavijero</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/Clavijero.jpg" class="card-img-top imagen"/>
                                <div class="capa">
                                    <p class="texto">Funciona para sostener en su lugar las clavijas, que funcionan de igual manera a los tornillos, todo dependerá del sentido que tengan (dirección de las agujas del reloj o viceversa) al girarlas, lo que comúnmente llamamos apretar cuerdas o aflojarlas para así lograr encontrar el sonido correcto de las cuerdas al tocarlas.</p>
                                </div>
                            </figure>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">La cejuela</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/Cejuela.jpg" class="card-img-top imagen"/>
                                <div class="capa">
                                    <p class="texto">Es un pequeño objeto que funciona para para sujetar las cuerdas y a su vez, separarlas unas de otras.</p>
                                </div>
                            </figure>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">Los trastes</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/Trastes.jpg" class="card-img-top imagen"/>
                                <div class="capa">
                                    <p class="texto">Son elementos elevados en metal en el diapasón de la guitarra. Cuando se pulsa una cuerda presionando la contra este sirve para producir una división en la longitud de la cuerda, cambiando la frecuencia de vibración de los armónicos de esta.</p>
                                </div>
                            </figure>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">El mástil</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/Mastil.jpg" class="card-img-top imagen"/>
                                <div class="capa">
                                    <p class="texto">De las guitarras acústicas y eléctricas lleva por dentro una barra cilíndrica que se llama el alma. Esta sirve para soportar la presión de las cuerdas cuando están tensadas, ya que si no la tuviera el mástil se doblaría.</p>
                                </div>
                            </figure>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">La boca</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/Boca de guitarra.jpg" class="card-img-top imagen"/>
                                <div class="capa">
                                    <p class="texto">O abertura acústica, boca o tarraja es una abertura cortada en la caja de resonancia (caja armónica) de los instrumentos de cuerda. Su función es la de aumentar la resonancia del instrumento.</p>
                                </div>
                            </figure>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">Aro de la guitarra</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/Aro de guitarra.jpg" class="card-img-top imagen"/>
                                <div class="capa">
                                    <p class="texto">Funciona como soporte para la caja de resonancia y como tal para toda la composición de la guitarra, brindándole estabilidad y forma a la misma.</p>
                                </div>
                            </figure>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">Caja de resonancia</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/Caja de resonancia.jpg" class="card-img-top imagen"/>
                                <div class="capa">
                                    <p class="texto">Es una parte primordial de la gran mayoría de instrumentos acústicos, principalmente de cuerda y percusión, que tiene la finalidad de amplificar o modular un sonido.</p>
                                </div>
                            </figure>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">cuerdas</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/Cuerdas.jpg" class="card-img-top imagen"/>
                                <div class="capa">
                                    <p class="texto">Son segmentos formados por un material flexible que permanecen en tensión de modo que puedan vibrar libremente, sin entorpecimiento que provocase una distorsión de la onda acústica. Las cuerdas pueden ser lisas, constando así de un material único como acero, nailon, oro o tripas de animales; lo cual, también puede depender del tipo de guitarra. </p>
                                </div>
                            </figure>
                        </div>
                    </div>

                    <div class="img-card">
                        <div class="card-header titulo-producto"><h4 class="my-0 font-weight-bold">Puente</h4></div>
                        <div class="contenedor">
                            <figure>
                                <Image src="multimedia/imagenes/Puente de la guitarra.jpg" class="card-img-top imagen"/>
                                <div class="capa">
                                    <p class="texto">Es la parte de un instrumento musical de cuerdas que sostiene dichas cuerdas y transmite su vibración hacia algún otro componente estructural del instrumento de manera que se transfiere el sonido al aire con mayor eficacia.</p>
                                </div>
                            </figure>
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

export default conoceGuitarra;