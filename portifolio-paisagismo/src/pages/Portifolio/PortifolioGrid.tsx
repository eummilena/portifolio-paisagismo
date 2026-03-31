import { useNavigate } from 'react-router-dom';
import type { projectsData } from '../../data/DataProjects';
import { useScrollReveal } from '../../hooks/useScrollReveal'

const PortifolioGrid = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
    const { ref, isVisible } = useScrollReveal(0.1);
    const tall = index === 0 || index === 4;
    const navigate = useNavigate();



    return (
        <div
            ref={ref}
            className={`group relative overflow-hidden cursor-pointer 
                ${tall ? "md:row-span-2" : ""} 
                ${isVisible ? "animate-fade-up" : "opacity-0"
                }`
            }
            style={{ animationDelay: `${index * 80}ms` }}
            onClick={() => navigate(`/projeto/${project.id}`)}
        >
            <div className={`relative overflow-hidden ${tall ? "aspect-3/4" : "aspect-4/3"}`}>
                <img src={project.cover}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                    loading='lazy'
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 " />
                <div className="info-project absolute bottom-0 left-0 right-0 p-6 translate-y-4 *:text-(--branco) opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className={`text-lg ${tall ? "-translate-y-80" : "-translate-y-40"}  translate-x-45`}>Clique para ver mais</p>
                    <p className="text-xs tracking-[0.2em] uppercase  mb-1">
                        {project.location}
                    </p>
                    <h3 className="font-display text-2xl font-light">
                        {project.title}
                    </h3>
                </div>
            </div>
        </div>

    )
}

export default PortifolioGrid