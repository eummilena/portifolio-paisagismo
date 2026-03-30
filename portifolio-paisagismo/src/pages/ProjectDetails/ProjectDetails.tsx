import { useParams } from 'react-router-dom'
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { useData } from '../../context/DataContext';

const ProjectDetails = () => {
    const { ref, isVisible } = useScrollReveal(0.1);
    const { id } = useParams();
    const { data } = useData();
    const project = data?.find((item) => item.id === Number(id));


    if (!project) return <p className='text-center py-2 text-4xl uppercase text-(--verdeEscuro)'>Projeto não encontrado</p>


    return (
        <section ref={ref} className="bg-(--verdeClaro) pt-30 pb-12 h-screen">
            <hr className=" text-(--verdeEscuro2) border" />
            <div className='p-6'>
                <h2 className="text-(--VerdeEscuro1) font-medium text-6xl tracking-widest uppercase mt-4">
                    {project.title}
                </h2>
                <p className="mb-6 text-lg md:text-2xl mt-4">{project.location}</p>
            </div>

            <div className={` ${isVisible ? "animate-fade-up" : "opacity-0"} grid grid-cols-1 md:grid-cols-3 gap-4 px-10`}>
                {project.images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        className="w-full h-full object-cover"
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectDetails