import React from 'react'
import ServiceCard from './items/ServiceCard'

export default function ServicesNew() {
    return (
        <section id="services">

            <h2>Nuestros servicios:</h2>

            <div className="container">
                <ServiceCard />
                <ServiceCard color="rosa" />
                <ServiceCard color="purpura" />
                <ServiceCard color="purpura" />
                <ServiceCard />
                <ServiceCard color="rosa" />
            </div>
        </section>
    )
}
