import { useScrollReveal } from "../../hooks/useScrollReveal"
import { useData } from "../../context/DataContext";
import { Link } from "react-router-dom";
import Photos from "../Portifolio/Photos";


const Projects = () => {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section id="projetos" className="bg-(--verdeClaro) py-30">
            <div ref={ref} className={`mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                <hr className=" text-(--verdeAcizentado) border" />
                <div className="flex flex-col p-6 px-10 mt-4">
                    <p className="text-(--verdeEscuro2) uppercase font-medium">Nossos</p>
                    <h2 className="text-(--VerdeEscuro1) font-medium text-5xl tracking-widest uppercase ">Serviços</h2>
                </div>
            </div>
            <div className="flex flex-col">
                <Photos />
                <Link to="/projetos" className="p-2 bg-(--verdeEscuro2) text-(--branco) mt-10 self-center  rounded-full uppercase border border-white/20 text-(--verdeClaro) 
                 transition-all duration-300 
               hover:scale-105">Ver todos</Link>

            </div>
        </section>
    )
}

export default Projects