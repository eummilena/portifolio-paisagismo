import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { useData } from '../../context/DataContext'
import { useLocation } from 'react-router-dom'

const Photo = lazy(() => import('../Portifolio/PortifolioGrid'))


const Photos = () => {
    const location = useLocation();
    const { data } = useData();
    const isHome = location.pathname === '/';
    const isProjects = location.pathname === '/projetos';


    const [visibleItems, setVisibleItems] = useState(6);
    const loaderRef = useRef<HTMLDivElement | null>(null)


    const projectsToShow = isHome ? data?.slice(0, 7) : data;

    useEffect(() => {
        if (isHome) return

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setVisibleItems((prev) => prev + 6)
            }
        })

        if (loaderRef.current) {
            observer.unobserve(loaderRef.current)
        }

        return () => {
            if (loaderRef.current) {
                observer.unobserve(loaderRef.current)
            }
        }
    }, [isHome])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 '>
            <Suspense fallback={<div className='text-center p-5'>Carregando...</div>}>
                {projectsToShow ? (
                    projectsToShow.map((project, index) => (
                        <Photo key={project.id} project={project} index={index} />
                    ))
                ) : <p>Erro na exibição das imagens</p>}

            </Suspense>
            {!isHome && <div ref={loaderRef} className='h-10' />}

        </div>

    )
}

export default Photos