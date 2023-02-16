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

    return (
        <>
            <section id='portada' >
                <div className="container" >
                    <motion.h1
                        initial="initialState" animate="animateState" exit={{ opacity: 0 }}
                        variants={variantesName} transition={{ delay: 0, duration: 1 }} >
                        <b>WebMinds</b>
                    </motion.h1>

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


                    <motion.div className="btn-container"
                        initial="initialState" animate="animateState" exit={{ opacity: 0 }}
                        variants={variantesTitle} transition={{ delay: 1.5, duration: 1 }}
                    >
                        <button className="btn-blue" >
                            Iniciar proyecto 🡽
                        </button>

                        <button>
                            Saber más... 🡻
                        </button>
                    </motion.div>


                </div>

            </section>



            <section id="about" >


                <h3 className="subtitle">+10 AÑOS DE EXPERIENCIA EN DISEÑO</h3>
                <div className="about-container">

                    <div className="about-left">

                        <div className="data-container">
                            <span>¿Por qué nosotros?</span>
                            <h3>Entregamos diseños que llevan a resultados, con un toque personalizado</h3>
                        </div>


                        <div className="data-container">
                            <span>Diseños personalizados</span>
                            <h3>Un sitio web que puedes considerar completamente tuyo</h3>
                        </div>

                        <div className="data-container">
                            <span>Confiabilidad</span>
                            <h3>No desapareceremos cuando el trabajo esté terminado</h3>
                            <p>
                                El desarrollo web necesita seguimiento. No nos vas a descubrir
                                tratando de huir en el momento en el que el proyecto esté terminado
                            </p>
                        </div>

                        <div className="data-container">
                            <span>Calidad</span>
                            <h3>Sitios web que son sencillos de entender</h3>
                            <p>
                                Desarrollamos nuestros proyectos de forma que sean fáciles
                                de entender para cualquier desarrollador. Así que si un día
                                necesitas migrar tu proyecto con alguien más, podrás encontrar
                                fácilmente quien te ayude.
                            </p>
                        </div>

                        <div className="data-container">
                            <span>Garantía de calidad</span>
                            <h3>¡Compruébalo sin riesgos!</h3>
                            <p>
                                Si no estás contento con el resultado, te reembolsaremos
                                el anticipo que hayas dado, sin hacer preguntas.
                            </p>
                            <br />
                            <br />
                            <br />
                            <button className="btn-blue" >
                                Iniciar proyecto 🡽
                            </button>
                        </div>

                    </div>
                    <div className="about-right">
                        {
                            //* Aquí van las imágenes
                        }
                    </div>
                </div>
            </section>


            <section id="services" >

            </section>

            <section id="process" >

            </section>
        </>
    )
}
