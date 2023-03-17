import React from 'react'

export default function Header() {
    return (
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
    )
}
