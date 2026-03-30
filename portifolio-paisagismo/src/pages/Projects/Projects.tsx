import { lazy, Suspense } from "react";
import { projectsData } from "../../data/DataProjects"
import { useScrollReveal } from "../../hooks/useScrollReveal"

const Photos = lazy(() => import('../Portifolio/Portifolio'))

const Projects = () => {
    const { ref, isVisible } = useScrollReveal(0.1);
    const dataImages = projectsData.slice(0, 7);


    return (
        <section id="projetos" className="bg-(--verdeClaro) py-30">
            <div ref={ref} className={`mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
                <hr className=" text-(--verdeAcizentado) border" />
                <div className="flex flex-col p-6 px-10 mt-4">
                    <p className="text-(--verdeEscuro2) uppercase font-medium">Nossos</p>
                    <h2 className="text-(--VerdeEscuro1) font-medium text-5xl tracking-widest uppercase ">Serviços</h2>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10'>
                <Suspense fallback={<div>Carregando...</div>}>
                    {dataImages.map((project, index) => (
                        <Photos key={project.id} project={project} index={index} />
                    ))}
                </Suspense>

            </div>
        </section>
    )
}

export default Projects