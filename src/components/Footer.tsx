import '../css/Footer.css'

function Footer(){

    return(
        <footer>
            <ul>
                <li>
                    <a rel='noopener noreferrer' target='_blank' href="https://github.com/lucas-gomes-santana">
                    <img src="https://img.icons8.com/?size=512&id=52539&format=png" alt="Imagem do GitHub"/>
                    Meu GitHub
                    </a>
                </li>
                <hr/>
                <li> 
                    <a rel='noopener noreferrer' target='_blank' href="https://www.linkedin.com/feed/">Meu Linkedin
                    <img src="https://img.icons8.com/?size=512&id=13930&format=png" alt="Imagem do Linkedin"/>
                    </a>
                </li>
            </ul>

            <div className='copyrigth'>
                <p>&copy; {new Date().getFullYear()}. Este modelo de portifólio está disponível para qualquer pessoa usar gratuitamente.Desde de que o nome do autor original 
                    seja mencionado. <a rel='noopener noreferrer' href="#">Clique aqui para ler a documentação</a></p>
            </div>
        </footer>
    );
}

export default Footer