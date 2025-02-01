import '../css/Footer.css'

function Footer(){

    return(
        <footer>
            <ul>
                <li>
                    <a rel='noopener noreferrer' target='_blank' href="https://github.com/lucas-gomes-santana">
                    <img src="https://img.icons8.com/?size=512&id=52539&format=png" alt="GitHub Image"/>
                    My GitHub
                    </a>
                </li>
                <hr/>
                <li> 
                    <a rel='noopener noreferrer' target='_blank' href="https://www.linkedin.com/feed/">My LinkedIn
                    <img src="https://img.icons8.com/?size=512&id=13930&format=png" alt="LinkedIn Image"/>
                    </a>
                </li>
            </ul>

            <div className='copyrigth'>
                <p>&copy; {new Date().getFullYear()}. This portfolio template is available for anyone to use for free, as long as the original author's name is mentioned. 
                    <a rel='noopener noreferrer' target='_blank' href="https://github.com/lucas-gomes-santana/Portifolio-Project/blob/main/README.md">
                        Click here to read the documentation.
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer
