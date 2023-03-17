//* Módulos
import { useEffect, useState } from 'react'
import { motion } from "framer-motion";


export default function Index() {

    const variantesName = {
        initialState: { x: -30, opacity: 0 },
        animateState: { x: 0, opacity: 1 },
        exitState: { x: 30, opacity: 0 }
    }

    const variantesTitle = {
        initialState: { y: 30, opacity: 0 },
        animateState: { y: 0, opacity: 1 },
        exitState: { x: 30, opacity: 0 }
    }

    const [title, setTitle] = useState("dev")



    useEffect(() => {


        function nextTitle() {
            if (title === "dev") { return "des" }
            if (title === "des") { return "ux" }
            if (title === "ux") { return "dev" }
        }

        let titleTimeout = setTimeout(() => {
            setTitle(nextTitle())
        }, 2500)

        return () => clearTimeout(titleTimeout)
    }, [title])


    const submitForm = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <section id='portada' >
                <div className="container centrado" >

                    <img src="/logo.svg" alt="Logo" width="200px" />

                    <motion.h1
                        initial="initialState" animate="animateState" exit={{ opacity: 0 }}
                        variants={variantesName} transition={{ delay: 0, duration: 1 }} >
                        <b>momentum</b>
                    </motion.h1>

                    <div className="motion-title-container">

                        {
                            title === "dev" &&
                            <motion.h2
                                initial="initialState" animate="animateState" exit={{ opacity: 0 }}
                                variants={variantesTitle} transition={{ delay: 0, duration: 0.5 }} >
                                Desarrollo web
                            </motion.h2>
                        }
                        {
                            title === "des" &&
                            <motion.h2
                                initial="initialState" animate="animateState" exit={{ opacity: 0 }}
                                variants={variantesTitle} transition={{ delay: 0, duration: 0.5 }} >
                                Marketing digital
                            </motion.h2>
                        }
                        {
                            title === "ux" &&
                            <motion.h2
                                initial="initialState" animate="animateState" exit={{ opacity: 0 }}
                                variants={variantesTitle} transition={{ delay: 0, duration: 0.5 }} >
                                Diseño UX / UI
                            </motion.h2>
                        }

                    </div>

                    <motion.div className="btn-container"
                        initial="initialState" animate="animateState" exit={{ opacity: 0 }}
                        variants={variantesTitle} transition={{ delay: 1.5, duration: 1 }}
                    >
                        <a href='#contact' >
                            <button className="btn-blue" >
                                🏁 Iniciar proyecto
                            </button>
                        </a>

                        <a href="#about" className='mt-2' >
                            <button>
                                Saber más... 👇
                            </button>
                        </a>
                    </motion.div>


                </div>

            </section>



            <section id="whoami" >
                <div className="header-img">
                    <img src="/header.jpg" alt="Momentum marketing" loading="lazy" />
                </div>

                <div className="header-texto">
                    <h2>¿Quienes somos?</h2>
                    <div className="divider-white"></div>

                    <p>
                        Somos una empresa de marketing digital, enfocada en el desarrollo
                        web del negocio. Sabemos que una de las partes más esenciales de
                        todo negocio en línea es su visibilidad en internet. Por esta razón
                        ponemos todo nuestro empeño por entregar sitios web espectaculares
                        que lleven a tu negocio hacia la cima.
                    </p>
                </div>
            </section>



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


            <section id="services" >

                <h2>Nuestros servicios:</h2>

                <br />

                <div className="services-container">


                    <div className="services-item">
                        <div className="s-img-container">
                            <img src="/software.jpg" alt="Desarrollo de software" loading='lazy' />
                            <h4 className='h4-movil'>Desarrollo de software</h4>
                            <div className="s-services-list">
                                <ul>
                                    <li>Software empresarial</li>
                                    <li>Aplicaciones web</li>
                                    <li>Administración de bases de datos</li>
                                    <li>Aplicaciones web progresivas</li>
                                </ul>
                            </div>
                            <h4 className='h4-des'>Desarrollo de software</h4>
                        </div>
                    </div>


                    <div className="services-item">
                        <div className="s-img-container">
                            <img src="/webdev.jpg" alt="Desarrollo de software" loading='lazy' />
                            <h4 className='h4-movil'>Diseño web</h4>

                            <div className="s-services-list">

                                <ul>
                                    <li>Página web completa</li>
                                    <li>Diseño de UX / UI</li>
                                    <li>E-commerce</li>
                                    <li>Landing pages</li>
                                </ul>
                            </div>
                            <h4 className='h4-des'>Diseño web</h4>
                        </div>
                    </div>


                    <div className="services-item">
                        <div className="s-img-container">
                            <img src="/marketing.jpg" alt="Desarrollo de software" loading='lazy' />
                            <h4 className='h4-movil'>Marketing digital</h4>
                            <div className="s-services-list">
                                <ul>
                                    <li>Optimización SEO</li>
                                    <li>Marketing de contenidos</li>
                                    <li>Edición de video</li>
                                    <li>Social media</li>
                                    <li>Anuncios web</li>
                                </ul>
                            </div>
                            <h4 className='h4-des'>Marketing digital</h4>
                        </div>
                    </div>




                </div>
            </section>






            <section id="contact" >
                <div className="contact-mitad mitad-imagen">
                    <img src="/contract.jpg" alt="Contact" loading='lazy' />
                </div>
                <div className="contact-mitad mitad-texto">
                    <h2>Tú tienes las mejores ideas.</h2>
                    <h3>Nosotros las llevamos a la cima.</h3>
                    <div className="divider-white"></div>
                    <h4>Háblanos y cotiza sin costo:</h4>

                    <form>
                        <label htmlFor='form-nombre' >Nombre:</label>
                        <input type="text" required id="form-nombre" />
                        <br />
                        <br />
                        <label htmlFor='form-email' >Email:</label>
                        <input type="email" required id="form-email" />
                        <br />
                        <br />
                        <label htmlFor='form-descripcion' >
                            Háblanos un poco sobre tu proyecto.
                            Si lo deseas, también puedes
                            incluir un enlace de telegram, o de whatsapp:
                        </label>
                        <textarea type="text" id="form-nombre" rows={5} />
                        <br />
                        <br />

                        <button type='submit' >
                            Iniciar proyecto 🏁
                        </button>
                    </form>
                </div>
            </section>


            <footer>
                <div className="col">
                    <h4>
                        &copy; momentum 2023
                    </h4>
                </div>
                <div className="col">
                    <a href="#">Política de privacidad</a>
                    <a href="#">Condiciones de uso</a>
                </div>
            </footer>
        </>
    )
}
