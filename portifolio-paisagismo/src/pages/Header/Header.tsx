import logo from '../../assets/logo.webp'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'




const Header = () => {
    return (
        <header className='bg-[--verdeEscuro]' role="banner">
            <nav className='flex flex-row justify-between' aria-label="Menu de navegação principal">
                <ul className='flex flex-row gap-4 uppercase items-center'>
                    <li><a href="#inicio" className='text-white hover:opacity-80 transition'>Início</a></li>
                    <li><a href="#projetos" className='text-white hover:opacity-80 transition'>Projetos</a></li>
                    <li><a href="#contato" className='text-white hover:opacity-80 transition'>Contato</a></li>
                </ul>

                <a href="#" className='logo-link' aria-label="Logo Mauro Paisagismo - Ir para página inicial">
                    <img src={logo} alt="Logo Mauro Paisagismo" className=' w-2xs' />
                </a>

                <ul className='flex flex-row gap-4 uppercase items-center'>
                    <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso Instagram"><img src={instagram} alt="Ícone Instagram" className='w-6 h-6' /></a></li>
                    <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="Envie mensagem no WhatsApp"><img src={whatsapp} alt="Ícone WhatsApp" className='w-6 h-6' /></a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header