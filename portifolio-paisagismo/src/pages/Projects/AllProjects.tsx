import Photos from '../Portifolio/Photos';

const AllProjects = () => {


    return (
        <section className="pt-30 pb-20">
            <div className=''>
                <hr className=" text-(--verdeEscuro2) border" />

                <div className="flex flex-col px-4 py-8 sm:px-6 md:px-10 mt-4 text-center md:text-left">
                    <p className="text-(--verdeEscuro2) uppercase font-medium text-sm md:text-base">
                        Todos os
                    </p>

                    <h2 className="text-(--VerdeEscuro1) font-medium 
        text-2xl sm:text-3xl md:text-5xl 
        tracking-widest uppercase">
                        Projetos
                    </h2>
                </div>
            </div>
            <Photos />
        </section>
    )
}

export default AllProjects