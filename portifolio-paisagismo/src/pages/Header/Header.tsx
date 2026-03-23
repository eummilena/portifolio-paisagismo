import logo from '../../assets/logo.webp'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import Description from '../Descrption/Description'
import { Link, NavLink, useLocation } from 'react-router-dom'
import bg from '../../assets/Background/bg-services.webp'

const Header = () => {

    const location = useLocation();

    const services = location.pathname === '/servicos'
    const home = location.pathname === '/'


    return (
        <header
            className={`'${services ? ' header bg-cover bg-top bg-no-repeat relative h-96 flex flex-col justify-between' : null} '`}
            role="banner"
            style={{ backgroundImage: services ? `url(${bg})` : 'none' }}>
            <nav className='flex flex-row justify-between ' aria-label="Menu de navegação principal">
                <ul className='flex flex-row gap-4 uppercase items-center z-50'>
                    <li><NavLink to="/" className='text-white hover:opacity-80 transition'>Início</NavLink></li>
                    <li><NavLink to="/servicos" className='text-white hover:opacity-80 transition'>Serviços</NavLink></li>
                    <li><NavLink to="/contato" className='text-white hover:opacity-80 transition'>Contato</NavLink></li>
                </ul>

                <NavLink to="/" className='logo-link z-50' aria-label="Logo Mauro Paisagismo - Ir para página inicial">
                    <img src={logo} alt="Logo Mauro Paisagismo" className=' w-3xs mr-20' />
                </NavLink>

                <ul className='flex flex-row gap-4 uppercase items-center z-50'>
                    <li><a href="https://www.instagram.com/mauropaisagista?igsh=aDBqcW8ybHpyeGVq" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso Instagram"><img src={instagram} alt="Ícone Instagram" className='w-6 h-6' /></a></li>
                    <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="Envie mensagem no WhatsApp"><img src={whatsapp} alt="Ícone WhatsApp" className='w-6 h-6' /></a></li>
                </ul>
            </nav>
            {home ? <Description /> :
            <div className='*:uppercase font-medium text-1xl z-50'>
                    <Link to='/' >Início</Link> | {' '}
                    <Link to='/servicos'>Serviços</Link>
                </div>
            }

        </header>
    )
}

export default Header