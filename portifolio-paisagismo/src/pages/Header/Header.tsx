
import Description from '../Descrption/Description'
import { useLocation } from 'react-router-dom'
import bg from '../../assets/Background/bg-services.webp'
import Nav from '../Nav/Nav'

const Header = () => {

    const location = useLocation();

    const projeto = location.pathname === '/projetos'
    const home = location.pathname === '/'



    return (
        <header
            id='inicio'
            className={`  ${projeto ? ' header bg-cover bg-top bg-no-repeat relative h-96 flex flex-col justify-between' : null} '`}
            role="banner"
            style={{ backgroundImage: projeto ? `url(${bg})` : 'none' }}>
            <Nav />
            {home ? <Description /> : null}
        </header>
    )
}

export default Header