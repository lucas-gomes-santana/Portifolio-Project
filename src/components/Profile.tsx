import {motion} from 'framer-motion';
import '../css/Profile.css';

type ProfileElements = {
    Voltar: () => void;
}

function Profile({Voltar}: ProfileElements){
    return(
        <div className="my-profile">
            <motion.img 
            //Adicionando animação na minha foto usando a biblioteca framer-motion
                src='/assets/Minha Foto.jpg'
                alt='Foto do desenvolvedor'
                animate={{y: [0,-10,0]}}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <h2>Algumas Informações Sobre Mim:</h2>
            <p>
                Olá,eu me chamo Lucas Gomes,tenho 17 anos.Sou estudante de uma escola na Bahia que oferece aos alunos cursos técnicos,
                cujo ensino deles é integrado à grade curricular do ensino médio.Foi no meu primeiro ano estudando Informática que o meu 
                interesse pela programação despertou.Desde então,eu estou estudando sobre desenvolvimento de software por conta própria e o meu
                objetivo é me tornar um Desenvolvedor Full-Stack.
            </p>
            <p>Eu estou disponível para vagas de emprego,estágio,trainee ou serviços de freelance na área</p>
            <a href="#" onClick={(e) => {e.preventDefault(); Voltar();}}>Voltar para a página principal</a>
        </div>
    );
}

export default Profile;