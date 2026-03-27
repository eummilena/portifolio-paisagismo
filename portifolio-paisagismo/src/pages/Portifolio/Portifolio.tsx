import type { projectsData } from '../../data/Projects';
import { useScrollReveal } from '../../hooks/useScrollReveal'

const Portifolio = ({ project, index }: { project: typeof projectsData[0], index: number }) => {
    const { ref, isVisible } = useScrollReveal(0.1);
    const tall = index === 0 || index === 4;



    return (
        <div
            ref={ref}
            className={` relative overflow-hidden cursor-pointer ${tall ? "md:row-span-2" : ""} 
                ${isVisible ? "animate-fade-up" : "opacity-0"
                }`}
            style={{ animationDelay: `${index * 80}ms` }}>
            <div className={`relative overflow-hidden ${tall ? "aspect-3/4" : "aspect-4/3"}`}>
                <img src={project.url}
                    alt={project.title}
                    className='w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105'
                    loading='lazy'
                />
                <div className="absolute inset-0 transition-colors duration-500 " />
                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-xs text-(--branco) tracking-[0.2em] uppercase mb-1">
                        {project.location}
                    </p>
                    <h3 className="font-display text-2xl text-(--branco)  ">
                        {project.title}
                    </h3>
                </div>
            </div>
        </div>

    )
}

export default Portifolio