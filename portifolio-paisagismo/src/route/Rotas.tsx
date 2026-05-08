import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from '../pages/Header/Header'
import Footer from '../pages/Footer/Footer'
import ScrollToTop from '../hooks/useScrollTop'
import { DataContextProvider } from '../context/DataContext'

const Projects = lazy(() => import('../pages/Projects/Projects'))
const Contact = lazy(() => import('../pages/Contact/Contact'))
const ProjectDetails = lazy(() => import('../pages/Projects/ProjectDetails'))
const AllProjects = lazy(() => import('../pages/Projects/AllProjects'))
const Error = lazy(() => import('../pages/Error/Error'))


const Rotas = () => {
    return (
        <BrowserRouter>
            <DataContextProvider>
                <ScrollToTop />
                <Suspense fallback={<div className="flex justify-center items-center min-h-screen"><div>Carregando...</div></div>}>
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
                </Suspense>
            </DataContextProvider>
        </BrowserRouter>
    )
}

export default Rotas