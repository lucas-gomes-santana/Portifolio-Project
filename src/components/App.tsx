import React, { useState } from 'react';
import Footer from './Footer';
import Projects from './Projects';
import Header from './Header';
import Profile from './Profile';

import '../css/App.css';

function App() {
    const [componenteAtivo, mudarComponente] = useState('projects'); 

    // Funções para alternar os componentes
    const mostrarProjetos = () => mudarComponente('projects');
    const mostrarPerfil = () => mudarComponente('profile');

    return (
        <>
            {componenteAtivo !== 'profile' && (
                <>
                    <Header MostrarPerfil={mostrarPerfil}/>
                </>
            )}
            <div className="content-container">
                {componenteAtivo === 'projects' && (
                    <div className="projects-container">
                        <Projects
                            imagem="/assets/Projeto-Blog.png"
                            titulo="Projeto Site de Blog"
                            tipoProjeto="Projeto Educacional da plataforma DIO"
                            descricao="Projeto simples feito com o framework Angular que simula um site de blog."
                            link="https://github.com/lucas-gomes-santana/Simple-Blog-Page-Angular-Project"
                        />
                        <Projects
                            imagem="/assets/Projeto-PlayStation-Store.png"
                            titulo="Projeto PlayStation Store Clone"
                            tipoProjeto="Projeto Educacional da plataforma DIO"
                            descricao="Outro projeto simples feito com Angular que simula o Front-End da plataforma PlayStation Store."
                            link="https://github.com/lucas-gomes-santana/PlayStation-Store-Clone-Angular-Project"
                        />
                        <Projects
                            imagem="/assets/Projeto-Pokemon-Pokedex.png"
                            titulo="Projeto Pokedex de Pokemón"
                            tipoProjeto="Projeto Educacional da plataforma DIO"
                            descricao="Projeto que faz uma requisição à API da PokeAPI correspondente ao nome do pokemón que for inserido e 
                            verificado pela parte lógica do site (Javascript ou Typescript)."
                            link="https://github.com/lucas-gomes-santana/Projeto-Pokedex"
                        />
                        <Projects
                            imagem='/public/assets/Projeto-Portifolio.png'
                            titulo='Projeto Portifolio'
                            tipoProjeto='Projeto Pessoal'
                            descricao='Modelo de portifólio que eu mesmo criei usando o framework React'
                            link="http://localhost:5173/"                       
                        />
                    </div>
                )}
                {componenteAtivo === 'profile' && <Profile Voltar={mostrarProjetos} />}
            </div>

            {componenteAtivo !== 'profile' && <Footer />}
        </>
    );
}

export default App;
