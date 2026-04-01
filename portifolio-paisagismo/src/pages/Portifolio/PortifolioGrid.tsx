import { useNavigate } from 'react-router-dom';
import type { projectsData } from '../../data/DataProjects';
import { useScrollReveal } from '../../hooks/useScrollReveal'
import { useState } from 'react';

const PortifolioGrid = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
    const { ref, isVisible } = useScrollReveal(0.1);
    const tall = index === 0 || index === 4;
    const navigate = useNavigate();

    const [touched, setTouched] = useState(false);



    return (
        <div
            ref={ref}
            className={`group relative overflow-hidden cursor-pointer 
                ${tall ? "md:row-span-2" : ""} 
                ${isVisible ? "animate-fade-up" : "opacity-0"}
            `}
            style={{ animationDelay: `${index * 80}ms` }}
            onClick={() => navigate(`/projeto/${project.id}`)}
            onTouchStart={() => setTouched(true)}
            onTouchEnd={() => setTouched(false)}
        >
            <div className={`relative overflow-hidden ${tall ? "aspect-3/4" : "aspect-4/3"}`}>
                <img src={project.cover}
                    alt={project.title}
                    className={`
                        w-full h-full object-cover transition-transform duration-700 ease-out
                        ${touched ? "scale-105" : ""}
                        md:group-hover:scale-105
                    `}

                    loading='lazy'
                />
                <div className={`
                    absolute inset-0 transition-colors duration-500
                    ${touched ? "bg-black/50" : "bg-black/0"}
                    md:group-hover:bg-black/50
                `} />
                <div className={`info-project
                    absolute bottom-0 left-0 right-0 p-4 md:p-6 *:text-(--branco)
                    transition-all duration-500

                    ${touched ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                md:group-hover:translate-y-0 md:group-hover:opacity-100
                `}>
                    <p className="text-sm md:text-lg mb-2">Clique para ver mais</p>
                    <p className="text-xs tracking-[0.2em] uppercase  mb-1">
                        {project.location}
                    </p>
                    <h3 className="font-display text-lg md:text-2xl font-light">
                        {project.title}
                    </h3>
                </div>
            </div>
        </div>

    )
}

export default PortifolioGrid