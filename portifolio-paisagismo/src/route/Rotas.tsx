import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../pages/Header/Header'
import Projects from '../pages/Projects/Projects'
import Services from '../pages/Services/Services'
import Contact from '../pages/Contact/Contact'
import Footer from '../pages/Footer/Footer'


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <>
                        <Header />
                        <Projects />
                        <Contact />
                        <Footer />
                    </>
                }></Route>
                <Route path='/servicos' element={
                    <>
                        <Header />
                        <Services />
                    </>
                }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas