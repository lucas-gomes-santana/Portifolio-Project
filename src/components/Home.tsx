import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../css/Home.css';

function Home() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.1
            }
        }
    };

    return (
        <motion.section 
            className='container-info'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div 
                className="my-foto"
                variants={itemVariants}
            >
                <motion.img 
                    id='animated-foto' 
                    src="/assets/My-Foto.png" 
                    alt="Lucas Gomes Santana Foto"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.div> 

            <motion.div 
                className="my-info"
                variants={itemVariants}
            >
                <motion.div 
                    className="personal-info"
                    variants={itemVariants}
                >
                    <h3>
                        Hi! My name is Lucas Gomes Santana. I'm a{' '}
                        <motion.span 
                            id='special-word'
                            animate={{
                                opacity: [1]
                            }}
                            transition={{ 
                                duration: 3,
                                repeat: Infinity,
                                repeatType: "reverse"
                            }}
                        >
                            <TypeAnimation
                                sequence={[
                                    'IT Student',
                                    2000,
                                    'Full-Stack Developer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                cursor={true}
                            />
                        </motion.span>
                    </h3>
                    <motion.p variants={itemVariants}>
                        I'm a high school student who loves technologies tools and who is constant wiling to learn more and more
                        about the software deveploment area. 
                    </motion.p>
                    <motion.p variants={itemVariants}>
                        I am open to internship, trainee or junior developer positions.
                    </motion.p>
                </motion.div>

                <motion.nav 
                    className='container-personal-icons'
                    variants={itemVariants}
                >
                    <h4>My Linkedin and GitHub:</h4>
                    <motion.div className="social-links">
                        <motion.a 
                            className='special-link' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="https://www.linkedin.com/in/lucas-gomes-santana-77892a343/"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <i className='fa-brands fa-linkedin'></i> 
                        </motion.a>
                        <motion.a 
                            className='special-link' 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href="https://github.com/lucas-gomes-santana"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <i className='fa-brands fa-github'></i> 
                        </motion.a>
                    </motion.div>
                </motion.nav>
            </motion.div>
        </motion.section>
    );
}

export default Home;