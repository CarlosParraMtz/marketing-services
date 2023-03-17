import React from 'react'

export default function Services() {
    return (
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
    )
}
