


function MenuMobile({ menu, setMenu }: { menu: boolean, setMenu: React.Dispatch<React.SetStateAction<boolean>> }) {

    function handleClick() {
        setMenu(!menu);

    }

    return (
        <div className=" z-100">
            <button
                aria-controls='menu'
                id='menu-button'
                className="menu-hamburger"
                onClick={handleClick}
                aria-label={menu ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={menu}
            >
                <span className="hamburger " aria-hidden='true'></span>
            </button></div>
    )
}

export default MenuMobile