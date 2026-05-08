import { NavLink } from 'react-router-dom'
import bg from '../../assets/Background/optimized/background.webp'

const Description = () => {
    return (
        <section id="main-content" aria-label="Seção de descrição da empresa" className='bg-(--verdeEscuro) '>
            <div className='hero px-10 pb-5 flex flex-col gap-30 translate-y-20 relative z-10'>
                <picture>
                    <source srcSet={bg} type="image/webp" />
                    <img
                        src={bg}
                        alt="Background paisagismo com natureza integrada à arquitetura"
                        loading="lazy"
                        className='absolute inset-0 w-full h-full object-cover -z-10'
                    />
                </picture>
                <div className='z-50'>
                    <h1 className='title text-(--branco) uppercase text-8xl font-bold leading-35'>
                        <span className='text-(--verdeClaro1)'>Natureza</span>  pensada <br />para o seu espaço
                    </h1>
                    <p className='text-(--branco) text-3xl  font-medium'>Integração entre natureza e arquitetura urbana.</p>
                </div>
                <div className='flex flex-row flex-wrap items-end gap-4 z-50 mb-10'>
                    <a href="https://wa.me/5561996051216"
                        target="_blank"
                        rel="noopener noreferrer" aria-label="Abre o whatsApp" className=' btn-primary mt-8 px-8 py-3 rounded-full border border-white/20 
                    text-(--verdeClaro) transition-all duration-300 active:scale-95 active:bg-white active:text-black md:hover:scale-105 md:hover:bg-white md:hover:text-black'>
                        Solicitar Orçamento
                    </a>
                    <NavLink to='/projetos' aria-label="Visualizar nossos projetos de paisagismo" className=' btn-secondary text-(--branco) uppercase underline 
                    tracking-widest transition active:opacity-60 md:hover:opacity-80 ml-2'> Ver projetos</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Description