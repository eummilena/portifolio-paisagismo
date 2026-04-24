import { useEffect, useState } from 'react'
import useMedia from '../../hooks/useMedia';
import MenuMobile from '../../Components/MenuMobile';
import ModalMenu from '../ModalMenu/ModalMenu';
import { NavLink, useLocation } from 'react-router-dom';
import instagram from '../../assets/instagram.svg'
import whatsapp from '../../assets/whatsapp.svg'
import email from '../../assets/email.svg'
import logo from '../../assets/logo.webp'


const Nav = () => {
    const [menu, setMenu] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/'
    const isProjects = location.pathname === '/projetos'

    useEffect(() => {
        setMenu(false)
    }, [location])

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const scrollTo = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    const isMobile = useMedia("(max-width:900px)");

    return (
        <nav className={`${menu ? 'ativo' : ''} 'menu flex flex-row justify-between '`} aria-label="Menu de navegação principal" aria-expanded={menu}>

            {isMobile ? (
                <div className='flex flex-row '>
                    <MenuMobile menu={menu} setMenu={setMenu} />
                    {menu && <ModalMenu setMenu={setMenu} />}
                    <NavLink to="/" className='logo-link z-40' aria-label="Logo Mauro Paisagismo - Ir para página inicial">
                        <img src={logo} alt="Logo Mauro Paisagismo" className=' w-3xs' />
                    </NavLink>
                </div>
            )
                :


                (<>
                    <ul className='menu-nav flex flex-row gap-4 uppercase items-center *:cursor-pointer z-50'>
                        <li><NavLink to="/" className='text-white hover:opacity-80 transition'>Início</NavLink></li>
                        <li className={`${isProjects ? 'underline' : ''} text-white hover:opacity-80 transition`}><NavLink to="/projetos">Projetos</NavLink></li>
                        {isHome ? <li className='text-white hover:opacity-80 transition' onClick={() => scrollTo("contato")}>Contato</li> : null}
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
                </>)
            }
        </nav>
    )
}

export default Nav