import { useScrollReveal } from "../../hooks/useScrollReveal"
import { Link } from "react-router-dom";
import Photos from "../Portifolio/Photos";


const Projects = () => {
    const { ref, isVisible } = useScrollReveal(0.1);


    return (
        <section id="projetos" className="bg-(--verdeClaro) py-16 md:py-24 lg:py-30">
            <div
                ref={ref}
                className={`mb-10 md:mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
            >
                <hr className="text-(--verdeAcizentado) border" />

                <div className="flex flex-col px-4 sm:px-6 md:px-10 mt-4 text-center md:text-left">
                    <p className="text-(--verdeEscuro2) uppercase font-medium text-sm md:text-base">
                        Nossos
                    </p>

                    <h2 className="text-(--VerdeEscuro1) font-medium 
        text-2xl sm:text-3xl md:text-5xl 
        tracking-widest uppercase">
                        Serviços
                    </h2>
                </div>
            </div>

            {/* GRID */}
            <div className="flex flex-col">
                <Photos />

                {/* BOTÃO */}
                <Link
                    to="/projetos"
                    className="
        mt-8 md:mt-10
        self-center md:self-end
        px-4 py-2 md:mr-10
        rounded-full uppercase underline

        text-(--verdeEscuro2)
        border border-white/20

        transition-all duration-300

        active:scale-95 active:opacity-70
        md:hover:scale-105
      "
                >
                    Ver todos
                </Link>
            </div>
        </section>
    )
}

export default Projects