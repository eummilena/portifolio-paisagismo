import logo from '../../assets/logo.webp'
const Footer = () => {
    const year = new Date().getFullYear();


    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <footer className="bg-(--VerdeEscuro-1) text-gray-300">
            <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <img src={logo} alt="Logo Mauro Paisagismo" className='w-45 mb-5' />

                    <p className="text-sm leading-relaxed text-(--verdeAcizentado1)">
                        Projetos de paisagismo que integram natureza e arquitetura com harmonia.
                    </p>
                </div>


                <div>
                    <h3 className="text-white text-sm font-medium mb-4 tracking-wide uppercase">
                        Navegação
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#home" className="hover:text-white transition" onClick={() => scrollTo("inicio")}>
                                Início
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-white transition" onClick={() => scrollTo("projetos")}>
                                Projetos
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-white transition" onClick={() => scrollTo("contato")}>
                                Contato
                            </a>
                        </li>
                    </ul>
                </div>


                <div>
                    <h3 className="text-white text-sm font-medium mb-4 tracking-wide uppercase">
                        Contato
                    </h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="hover:text-white transition">
                                WhatsApp
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-white transition">
                                Instagram
                            </a>
                        </li>
                        <li className="text-gray-400">
                            Brasília - DF
                        </li>
                    </ul>
                </div>
            </div>

            {/* Linha inferior */}
            <div className="border-t border-white/10">
                <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-(--verdeAcizentado1)">

                    <p>&copy; {year} Mauro Paisagismo. Todos os direitos reservados.</p>

                    <a
                        href="#contact"
                        className="border border-white/20 px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
                    >
                        Solicitar orçamento
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer