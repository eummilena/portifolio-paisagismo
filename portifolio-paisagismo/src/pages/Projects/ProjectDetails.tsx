import { useParams } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useData } from '../../context/DataContext';
import { useState } from 'react';
import ModalProject from './ModalProject';

const ProjectDetails = () => {
    const { ref, isVisible } = useScrollReveal(0.1);
    const { id } = useParams();
    const { data } = useData();
    const projectId = Number(id);
    const project = !Number.isNaN(projectId)
        ? data?.find((item) => item.id === projectId)
        : undefined;
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    if (!project) return <p className='text-center py-2 text-4xl uppercase text-(--verdeEscuro)'>Projeto não encontrado</p>

    return (
        <section ref={ref} className="bg-(--verdeClaro) pt-20 pb-12 ">
            <hr className=" text-(--verdeEscuro2) border" />
            <div className='pl-8'>
                <h2 className="text-(--VerdeEscuro1) font-medium text-2xl sm:text-3xl md:text-5xl  tracking-widest uppercase mt-4">
                    {project.title}
                </h2>
                <p className=" text-lg md:text-2xl mt-4">{project.location}</p>
            </div>

            <div
                className={`
                        ${isVisible ? "animate-fade-up" : "opacity-0"}
                        grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3
                        gap-0.5 md:gap-4
                        px-1 md:px-10 py-5
                    `}
            >
                {project.images.map((img, index) => (
                    <div key={index} className="aspect-square md:aspect-auto overflow-hidden">
                        <button
                            type="button"
                            onClick={() => setCurrentIndex(index)}
                            aria-label={`Abrir imagem ${index + 1} do projeto ${project.title}`}
                            className="group block w-full h-full"
                        >
                            <img
                                src={img}
                                className="w-full h-full object-cover transition-transform duration-300 active:scale-95 md:hover:scale-105"
                                loading="lazy"
                                decoding="async"
                                alt={`${project.title} imagem ${index + 1}`}
                            />
                        </button>
                    </div>
                ))}
            </div>
            {currentIndex !== null && <ModalProject currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} images={project.images} />}

        </section>
    )
}

export default ProjectDetails