import { useNavigate } from 'react-router-dom';
import '../css/Skills.css';

function Skills() {
    const navigate = useNavigate();

    return (
        <section className='main-container-2'>
            <h3>Here, you can see my skills with programming languages, frameworks, and other programming tools.</h3>
            <div className="container-skills">
                <h2>Technologies I use and can work with:</h2>
                <div className="container-images">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/html5/html5-original.svg"/>
                    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/javascript/javascript-original.svg"/>
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/nodejs/nodejs-original-wordmark.svg"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945110.png?f=webp"/>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg" />
                    <img src="https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/git/git-original.svg"/>
                    <img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Github-Dark.svg"/>
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-java-logo-icon-download-in-svg-png-gif-file-formats--wordmark-programming-language-pack-logos-icons-1174953.png"/>
                    <img src="https://www.techmonitor.ai/wp-content/uploads/sites/29/2016/06/SQL.png"/>
                    <img src="https://cdn.intuji.com/2023/10/MySQL.png" />
                    <img src="https://www.zadara.com/wp-content/uploads/docker.png" />
                </div>
            </div>
            <button className='return-button' onClick={() => navigate('/')}>Return to Home Page</button>
        </section>
    );
}

export default Skills;