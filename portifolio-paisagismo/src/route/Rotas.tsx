import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../pages/Header/Header'
import Projects from '../pages/Projects/Projects'
import Contact from '../pages/Contact/Contact'
import Footer from '../pages/Footer/Footer'
import ProjectDetails from '../pages/Projects/ProjectDetails'
import ScrollToTop from '../hooks/useScrollTop'
import { DataContextProvider } from '../context/DataContext'
import AllProjects from '../pages/Projects/AllProjects'
import Error from '../pages/Error/Error'


const Rotas = () => {
    return (
        <BrowserRouter>
            <DataContextProvider>
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
                    <Route path='/projeto/:slug' element={
                        <>
                            <Header />
                            <main>
                                <ProjectDetails />
                            </main>
                            <Footer />
                        </>
                    }></Route>
                    <Route path='/projetos' element={
                        <>
                            <Header />
                            <AllProjects />
                            <Footer />
                        </>
                    }></Route>
                    <Route path="*" element={
                        <>
                            <Header />
                            <Error />
                        </>
                    } />
                </Routes>
            </DataContextProvider>
        </BrowserRouter>
    )
}

export default Rotas