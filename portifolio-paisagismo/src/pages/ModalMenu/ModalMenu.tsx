import React from 'react'

const ModalMenu = ({ setMenu }: { setMenu: React.Dispatch<React.SetStateAction<boolean>> }) => {


    return (
        <>
            <div className="fixed inset-0 z-50">
                <div
                    className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    onClick={() => setMenu(false)}
                />

                <div className="modal-nav absolute top-0 right-0 w-72 h-full bg-(--VerdeEscuro-2) p-8 flex flex-col justify-between animate-slide-in">
                    <div>
                        <nav className="flex flex-col gap-6 text-lg text-(--verdeClaro)">
                            <a href="#home" onClick={() => setMenu(false)}>Início</a>
                            <a href="#projetos" onClick={() => setMenu(false)}>Projetos</a>
                            <a href="#contato" onClick={() => setMenu(false)}>Contato</a>
                        </nav>
                    </div>

                    <a
                        href="https://wa.me/5561996051216"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-10 text-center border border-white/20 py-3 rounded-full text-(--verdeClaro) hover:bg-white hover:text-black transition"
                    >
                        Solicitar orçamento
                    </a>
                </div>
            </div>

        </>
    )
}

export default ModalMenu