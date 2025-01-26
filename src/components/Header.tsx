import '../css/Header.css';

type HeaderElements = {
    MostrarPerfil: () => void;
}

function Header({MostrarPerfil}: HeaderElements){

    return(
        <header>
            <a href="#" onClick={(e) => {e.preventDefault(); MostrarPerfil();}}>
                <img src="/assets/Minha Foto.jpg" alt="" />
                Clique aqui para conhecer melhor o desenvolvedor
            </a>
            <address>
                <p> <img src="https://cdn-icons-png.freepik.com/256/11731/11731750.png?semt=ais_hybrid" alt="" /> Meu Telefone: (75) 99245-9695</p>
                <p> <img src="https://cdn-icons-png.flaticon.com/512/9554/9554729.png" alt="" /> Meu E-mail: ls8294921@gmail.com</p>
            </address>
        </header>
    );
}

export default Header;