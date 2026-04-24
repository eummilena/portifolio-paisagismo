import { Link } from 'react-router-dom'
import planta from '../../assets/planta.webp'
const Error = () => {
    return (
        <section
            className='min-h-screen flex flex-col items-center justify-center bg-(--verdeClaro)'
            style={{ backgroundImage: `url(${planta})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left bottom' }}>
            <h1 className="text-7xl font-light text-(--verdeEscuro) mb-4">
                404
            </h1>

            <h2 className="text-xl text-(--verdeEscuro1) mb-2">
                Essa página não existe
            </h2>

            <p className="text-(--verdeEscuro2) italic mb-6">
                por aqui.
            </p>

            <p className="text-sm text-(--verdeEscuro2) mb-8">
                Assim como cada jardim precisa do lugar certo para florescer,
                essa página não foi encontrada.
            </p>


            <Link
                to="/"
                className="inline-block border border-[#4b5c47] px-5 py-2 text-sm uppercase tracking-wide text-[#4b5c47] hover:bg-[#4b5c47] hover:text-white transition"
            >
                Voltar para o início
            </Link>

        </section>
    )
}

export default Error