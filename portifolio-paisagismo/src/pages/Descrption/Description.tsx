import bg from '../../assets/Background/background.webp'

const Description = () => {
    return (
        <section id="main-content" aria-label="Seção de descrição da empresa" className='bg-(--verdeEscuro) '>
            <div className='hero px-12 py-8 flex flex-col gap-40 translate-y-12 relative z-10'>
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
                    <h1 className='text-(--branco) uppercase text-8xl font-bold leading-35'>
                        <span className='text-(--verdeClaro1)'>Natureza</span>  pensada <br />para o seu espaço
                    </h1>
                    <p className='text-(--branco) text-3xl  font-medium'>Integração entre natureza e arquitetura urbana.</p>
                </div>
                <div className='flex flex-col items-start gap-4 z-50'>
                    <button aria-label="Abrir formulário para solicitar orçamento" className='btn-primary bg-(--branco) py-2 px-3 uppercase text-(--VerdeEscuro-1) font-medium'>
                        Solicitar Orçamento
                    </button>
                    <a href="#projetos" aria-label="Visualizar nossos projetos de paisagismo" className='btn-secondary text-(--branco) uppercase underline tracking-widest'>
                        Ver projetos
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Description