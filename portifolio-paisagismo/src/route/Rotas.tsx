import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../pages/Header/Header'
import Projects from '../pages/Projects/Projects'
import Contact from '../pages/Contact/Contact'
import Footer from '../pages/Footer/Footer'
import ProjectDetails from '../pages/ProjectDetails/ProjectDetails'
import ScrollToTop from '../hooks/useScrollTop'


const Rotas = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path='/' element={
                    <>
                        <Header />
                        <main>
                            <Projects />
                            <Contact />
                        </main>
                        <Footer />
                    </>
                }></Route>
                <Route path='/projeto/:id' element={
                    <>
                        <Header />
                        <ProjectDetails />
                        <Footer />
                    </>
                }></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas