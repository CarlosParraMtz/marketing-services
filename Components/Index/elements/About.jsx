import React from 'react'

export default function About() {
    return (
        <section id="about" >
            <div className="about-container">

                <div className="about-left">

                    <div className="data-container">
                        <span>¿Por qué nosotros?</span>
                        <h3>No solo entregamos un proyecto. Entregamos resultados</h3>
                    </div>


                    <div className="data-container">
                        <span>Tu negocio es prioridad</span>
                        <h3>Lo más importante para nosotros es que tu negocio crezca</h3>
                    </div>

                    <div className="data-container">
                        <span>Confiabilidad</span>
                        <h3>No desapareceremos cuando el trabajo esté terminado</h3>
                        <p>
                            El marketing digital necesita seguimiento. No nos vas a descubrir
                            tratando de huir en el momento en el que el proyecto esté terminado.
                        </p>
                    </div>


                    <div className="data-container">
                        <span>Garantía de calidad</span>
                        <h3>¡Compruébalo sin riesgos!</h3>
                        <p>
                            Si no estás contento con el resultado desde el
                            inicio del proyecto, te reembolsaremos
                            el anticipo que hayas dado, sin hacer preguntas.
                        </p>
                        <br />
                        <br />
                        <br />
                        <a href="#contact">
                            <button className="btn-blue" >
                                🏁 Iniciar proyecto
                            </button>
                        </a>
                    </div>

                </div>
                <div className="about-right">

                    {
                        //* Aquí van las imágenes
                    }

                    <div className="img-container img1">
                        <img src="/cover1.svg" alt="1" />
                    </div>

                    <div className="img-container img2">
                        <img src="/cover2.svg" alt="2" />
                    </div>

                    <div className="img-container img3">
                        <img src="/cover3.svg" alt="3" />
                    </div>


                </div>
            </div>
        </section>
    )
}
