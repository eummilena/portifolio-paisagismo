import bg from '../../assets/Background/background.webp'

const Description = () => {
    return (
        <section id="main-content" aria-label="Seção de descrição da empresa" className='bg-(--verdeEscuro) p-8 flex flex-col justify-between'>
            <div
                className='hero bg-cover bg-center bg-no-repeat rounded-lg p-12 min-h-96'
            >
                <h1 className='text-(--branco) uppercase text-9xl font-bold leading-40 z-100'>
                    <span className='text-(--verdeClaro1)'>Natureza</span>  pensada <br />para o seu espaço
                </h1>
                <p className='text-(--branco) text-4xl font-medium'>Integração entre natureza e arquitetura urbana.</p>
                <div className='flex flex-col items-start gap-4'>
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