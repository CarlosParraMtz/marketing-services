import React from 'react'

export default function ServiceCard({ color = "azul" }) {
    /*
    * los colores pueden ser:
    rosa: #8B3A62
    púrpura: #5A2A7F
    azul: #6C8CA0 
    */
    return (
        <div className={`service-card`}>
            <div className={`service-card-content service-card-${color}`}>
                ServiceCard
            </div>
        </div>
    )
}
