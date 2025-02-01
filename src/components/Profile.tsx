import {motion} from 'framer-motion';
import '../css/Profile.css';

type ProfileElements = {
    GoBack: () => void;
}

function Profile({GoBack}: ProfileElements){
    return(
        <div className="my-profile">
            <motion.img 
            // Adding animation to my photo using the framer-motion library
                src='/assets/Minha Foto.jpg'
                alt='Developer Photo'
                animate={{y: [0,-10,0]}}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <h2>Some Information About Me:</h2>
            <p>
                Hello, my name is Lucas Gomes, I am 17 years old. I am a student at a school in Bahia that offers technical courses, 
                which are integrated with the high school curriculum. It was in my first year studying Computer Science that my interest 
                in programming was sparked. Since then, I have been studying software development on my own, and my goal is to become a Full-Stack Developer.
            </p>
            <p>I am available for job openings, internships, trainee programs, or freelance work in the field.</p>
            <a href="#" onClick={(e) => {e.preventDefault(); GoBack();}}>Go back to the main page</a>
        </div>
    );
}

export default Profile;
