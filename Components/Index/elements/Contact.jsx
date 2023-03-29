import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function Contact() {

    const [dialogFormulario, setDialogFormulario] = useState(false);
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const cerrarDialogFormulario = () => {
        setDialogFormulario(false)
        setNombre("")
        setEmail("")
        setDescripcion("")
    }
    const abrirDialogFormulario = () => {
        setDialogFormulario(true)
    }

    const submitForm = (e) => {
        e.preventDefault();
    };

    return (
        <section id="contact">
            <div className="contact-mitad mitad-imagen">
                <img src="/contract.jpg" alt="Contact" loading="lazy" />
            </div>
            <div className="contact-mitad mitad-texto">
                <h2>Tú tienes las mejores ideas.</h2>
                <h3>Nosotros las llevamos a la cima.</h3>
                <div className="divider-white"></div>
                <button onClick={abrirDialogFormulario} className="btn-base btn-large" >
                    📬 Háblanos y cotiza sin costo:
                </button>


                <Dialog open={dialogFormulario} onClose={cerrarDialogFormulario} >
                    <DialogTitle sx={{background:"#5A2A7F"}} >
                        <div className="dialog-title">
                            <IconButton size="small" sx={{ borderRadius: "5px" }} onClick={cerrarDialogFormulario}>
                                <CloseIcon fontSize="small" sx={{ml:"auto", color:"white"}} />
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent>
                        <form>
                            <label htmlFor="form-nombre">Nombre:</label>
                            <input type="text" required id="form-nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                            <br />
                            <br />
                            <label htmlFor="form-email">Email:</label>
                            <input type="email" required id="form-email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <br />
                            <br />
                            <label htmlFor="form-descripcion" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}>
                                Háblanos un poco sobre tu proyecto. Si lo deseas, también puedes
                                incluir un enlace de telegram, o de whatsapp:
                            </label>
                            <textarea type="text" id="form-nombre" rows={5} />
                            <br />
                            <br />

                            <button type="submit" className="btn-base btn-blue">Iniciar proyecto 🏁</button>
                        </form>
                    </DialogContent>
                </Dialog>
            </div>
        </section>
    );
}
