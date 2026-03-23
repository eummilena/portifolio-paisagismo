import foto from '/images/IMG-20230217-WA0034.jpeg?url'
const Services = () => {
    return (
        <section className='bg-(--verdeClaro) pt-30 h-screen '>
            <hr className=" text-(--verdeEscuro2) border-2 inset-1.5" />
            <h2 className="text-(--VerdeEscuro1) font-medium text-6xl tracking-widest uppercase p-6 mt-4">
                Serviços
            </h2>
            <div className='p-6 flex flex-row gap-1 flex-wrap'>
                <article className='w-2/6 h-4/6 '>
                    <picture>
                        <source srcSet={foto} type="image/webp" />
                        <img
                            src={foto}
                            alt="Background paisagismo com natureza integrada à arquitetura"
                            loading="lazy"
                            className=''
                        />
                    </picture>
                </article>
            </div>
        </section>
    )
}

export default Services