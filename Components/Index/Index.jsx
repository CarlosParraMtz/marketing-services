//* Componentes
import Cover from "./elements/Cover";
import Header from "./elements/Header";
import About from "./elements/About";
//import Services from "./elements/ServicesNew";
import Services from "./elements/Services";
import Contact from "./elements/Contact";
import Footer from "./elements/Footer";

export default function Index() {
    return (
        <>
            <Cover />
            <Header />
            <About />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}
