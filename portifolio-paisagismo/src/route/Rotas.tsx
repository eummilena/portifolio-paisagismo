import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../pages/Header/Header'
import Projects from '../pages/Projects/Projects'
import Services from '../pages/Services/Services'


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <>
                        <Header />
                        <Projects />
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