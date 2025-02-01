import '../css/Header.css';

type HeaderElements = {
    ShowProfile: () => void;
}

function Header({ShowProfile}: HeaderElements){

    return(
        <header>
            <a href="#" onClick={(e) => {e.preventDefault(); ShowProfile();}}>
                <img src="/assets/Minha Foto.jpg" alt="" />
                Click here to learn more about the developer
            </a>
            <address>
                <p> <img src="https://cdn-icons-png.freepik.com/256/11731/11731750.png?semt=ais_hybrid" alt="" /> My Phone Number: (75) 99245-9695</p>
                <p> <img src="https://cdn-icons-png.flaticon.com/512/9554/9554729.png" alt="" /> My Email: ls8294921@gmail.com</p>
            </address>
        </header>
    );
}

export default Header;
