import React from 'react'

export default function Contact() {

    const submitForm = (e) => {
        e.preventDefault();
    }


    return (
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
    )
}
