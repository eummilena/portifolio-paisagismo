import email from '../../assets/email.svg'
import whats from '../../assets/whatsapp.svg'
import local from '../../assets/local.svg'
import { useScrollReveal } from '../../hooks/useScrollReveal'


const Contact = () => {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section id='contato' ref={ref} className={` bg-(--VerdeEscuro-2)  flex flex-col justify-center items-center gap-10 py-20 text-center ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
            <div className='max-w-3xl'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl
      text-(--verdeAcizentado1)
      font-medium tracking-widest uppercase
      leading-tight'>Vamos <span className='text-(--verdeAcizentado3)'>transformar</span>  seu espaço?</h2>
                <p className='text-base md:text-2xl mt-4 text-(--verdeClaro) '>Fale com a gente e solicite um orçamento sem compromisso.</p>
                <p className="text-sm text-(--verdeClaro) opacity-80 mt-3">
                    Atendemos projetos residenciais e comerciais em Brasília e região.
                    Retorno rápido via WhatsApp.
                </p>
            </div>
            <a
                href="https://wa.me/5561996051216"
                target="_blank"
                rel="noopener noreferrer"
                className="
      mt-6 md:mt-8
      px-6 md:px-8 py-3
      rounded-full border border-white/20
      text-(--verdeClaro)
      transition-all duration-300

      active:scale-95 active:bg-white active:text-black
      md:hover:bg-white md:hover:text-black md:hover:scale-105
    "
            >
                Solicitar orçamento
            </a>
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 mt-8 md:mt-10">

                <a
                    href="mailto:mauroluciomotta@gmail.com"
                    target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm md:text-base text-(--verdeClaro) transition active:opacity-60 active:scale-95
                     md:hover:opacity-80"
                >
                    <img src={email} alt="E-mail" className="w-5 h-5" />
                    mauroluciomotta@gmail.com
                </a>

                <a
                    href="https://wa.me/5561996051216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" flex items-center gap-2 text-sm md:text-base text-(--verdeClaro) transition active:opacity-60 active:scale-95
                     md:hover:opacity-80"
                >
                    <img src={whats} alt="WhatsApp" className="w-5 h-5" />
                    (61) 9 9605-1216
                </a>
            </div>

            <div className="flex items-center gap-2 mt-5 text-(--verdeClaro) opacity-90">
                <img src={local} alt="Localização" className="w-5 h-5" />
                <p className="text-sm md:text-base">Brasília, Distrito Federal</p>
            </div>

        </section>
    )
}

export default Contact