import { useState, useEffect } from 'react'
import { motion } from "framer-motion";


export default function Cover() {

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

                    <a href="#whoami" className='mt-2' >
                        <button>
                            Saber más... 👇
                        </button>
                    </a>
                </motion.div>


            </div>

        </section>
    )
}
