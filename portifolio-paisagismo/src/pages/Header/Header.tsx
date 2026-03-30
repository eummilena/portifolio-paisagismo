import logo from '../../assets/logo.webp'
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import email from '../../assets/email.svg'
import Description from '../Descrption/Description'
import { NavLink, useLocation } from 'react-router-dom'
import bg from '../../assets/Background/bg-services.webp'
import { useEffect, useState } from 'react'
import MenuMobile from '../../Components/MenuMobile'
import ModalMenu from '../ModalMenu/ModalMenu'
import useMedia from '../../hooks/useMedia'

const Header = () => {

    const location = useLocation();

    const projeto = location.pathname === '/projeto'
    const home = location.pathname === '/'

    const [scrolled, setScrolled] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }



    useEffect(() => {
        setMenu(false)
    }, [location])

    const isMobile = useMedia("(max-width:900px)");



    return (
        <header
            id='inicio'
            className={`  ${projeto ? ' header bg-cover bg-top bg-no-repeat relative h-96 flex flex-col justify-between' : null} '`}
            role="banner"
            style={{ backgroundImage: projeto ? `url(${bg})` : 'none' }}>
            <nav className={`${menu ? 'ativo' : ''} 'menu flex flex-row justify-between '`} aria-label="Menu de navegação principal" aria-expanded={menu}>

                {isMobile ? (
                    <>
                        <MenuMobile menu={menu} setMenu={setMenu} />
                        {menu && <ModalMenu setMenu={setMenu} />}
                    </>
                )
                    : null}


                <ul className='menu-nav flex flex-row gap-4 uppercase items-center *:cursor-pointer z-50'>
                    <li><NavLink to="/" className='text-white hover:opacity-80 transition'>Início</NavLink></li>
                    <li className='text-white hover:opacity-80 transition'><NavLink to="/projetos">Projetos</NavLink></li>
                    <li className='text-white hover:opacity-80 transition' onClick={() => scrollTo("contato")}>Contato</li>
                </ul>
                <NavLink to="/" className='logo-link z-40' aria-label="Logo Mauro Paisagismo - Ir para página inicial">
                    <img src={logo} alt="Logo Mauro Paisagismo" className=' w-3xs' />
                </NavLink>


                <ul className='menu-social-media flex flex-row gap-4 uppercase items-center z-50'>
                    <li><a href="https://www.instagram.com/mauropaisagista?igsh=aDBqcW8ybHpyeGVq" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso Instagram"><img src={instagram} alt="Ícone Instagram" className='w-6 h-6' /></a></li>
                    <li><a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="Envie mensagem no WhatsApp"><img src={whatsapp} alt="Ícone WhatsApp" className='w-6 h-6' /></a></li>
                    <li><a href="mailto:mauroluciomotta@gmail.com" target="_blank" rel="noopener noreferrer"
                    >
                        <img src={email} alt="Envie nos um e-mail" className="w-7 h-7" />
                    </a>
                    </li>
                </ul>
            </nav>
            {home ? <Description /> : null}
        </header>
    )
}

export default Header