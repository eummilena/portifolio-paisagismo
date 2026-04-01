import Photos from '../Portifolio/Photos';

const AllProjects = () => {


    return (
        <section className="pt-30 pb-20">
            <div className=''>
                <hr className=" text-(--verdeEscuro2) border" />
                <h1 className="mb-6 p-8 text-(--VerdeEscuro1) font-medium text-2xl sm:text-3xl md:text-4xl tracking-widest uppercase text-center md:text-left">Todos os Projetos</h1>
            </div>
            <Photos />
        </section>
    )
}

export default AllProjects