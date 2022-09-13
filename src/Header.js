function Header(props) {
    return (
        <header>
            <nav>
                <div class="navbar-left">
                    <img src="./iconos/61292222.png" alt=""
                        class="logo" />
                    <ul>
                        <li>
                            <a href="inicio">Inicio</a>
                        </li>
                        <li>
                            <a href="peliculas">Peliculas</a>
                        </li>
                        <li>
                            <a href="#">Info</a>
                        </li>
                        <li>
                            <a href="#">Contacto</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}
export default Header;