import logo from '../../assets/logo.webp'
const Footer = () => {
    const year = new Date().getFullYear();


    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <footer className="bg-(--VerdeEscuro-1) text-gray-300">
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">

                {/* LOGO */}
                <div className="text-center md:text-left">
                    <img src={logo} alt="Logo Mauro Paisagismo" className='w-36 md:w-45 mb-4 mx-auto md:mx-0' />

                    <p className="text-sm leading-relaxed text-(--verdeAcizentado1)">
                        Projetos de paisagismo que integram natureza e arquitetura com harmonia.
                    </p>
                </div>

                {/* NAVEGAÇÃO */}
                <div className="text-center md:text-left">
                    <h3 className="text-white text-sm font-medium mb-3 md:mb-4 tracking-wide uppercase">
                        Navegação
                    </h3>

                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="#home"
                                onClick={() => scrollTo("inicio")}
                                className="
              transition
              active:text-white active:scale-95
              md:hover:text-white
            "
                            >
                                Início
                            </a>
                        </li>

                        <li>
                            <a
                                href="#projects"
                                onClick={() => scrollTo("projetos")}
                                className="
              transition
              active:text-white active:scale-95
              md:hover:text-white
            "
                            >
                                Projetos
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={() => scrollTo("contato")}
                                className="
              transition
              active:text-white active:scale-95
              md:hover:text-white
            "
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>

                {/* CONTATO */}
                <div className="text-center md:text-left">
                    <h3 className="text-white text-sm font-medium mb-3 md:mb-4 tracking-wide uppercase">
                        Contato
                    </h3>

                    <ul className="space-y-2 text-sm">
                        <li>
                            <a
                                href="https://wa.me/5561996051216"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
              transition
              active:opacity-60 active:scale-95
              md:hover:text-white
            "
                            >
                                WhatsApp
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="
              transition
              active:opacity-60 active:scale-95
              md:hover:text-white
            "
                            >
                                Instagram
                            </a>
                        </li>

                        <li className="text-gray-400">
                            Brasília - DF
                        </li>
                    </ul>
                </div>
            </div>

            {/* LINHA INFERIOR */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-(--verdeAcizentado1) text-center md:text-left">

                    <p>&copy; {year} Mauro Paisagismo. Todos os direitos reservados.</p>

                    <a
                        href="#contact"
                        className="
          border border-white/20 px-5 py-2 rounded-full
          transition

          active:scale-95 active:bg-white active:text-black
          md:hover:bg-white md:hover:text-black
        "
                    >
                        Solicitar orçamento
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer