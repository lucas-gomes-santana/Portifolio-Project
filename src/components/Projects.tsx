import { motion } from 'framer-motion';
import '../css/Projects.css';

interface ProjectElements{
    projectImage:string;
    title:string;
    description:string;
    projectType:string;
    link:string;
    textLink:string;
}

function Projects() {
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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.1
            }
        }
    };

    const projectsData: ProjectElements[] = [
        {
            title: "PeuCar Automotives Workshop Website",
            projectImage: "/assets/PeuCar-Website.png",
            projectType: "Freelance Web Application",
            link: "https://peucar-automotivos-ipira.vercel.app/",
            description: "A freelance project that i developed for a small car workshop bussines. It's a simple website that allows the user see about the services of the workshop and also sent a E-mail message directly to the owner on website.",
            textLink: "Go to the Website",
        },
    ];

    return (
        <motion.section 
            className='main-container'
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h2>My Projects:</h2>

            <motion.div className="project-container" variants={itemVariants} >
                {projectsData.map((project, index) => (

                    <div className="card-projects" key={ index }>
                        <h3>{project.title}</h3>
                        <h4>{project.projectType}</h4>
                        <img className="projects-image" src={project.projectImage}></img>
                        <p>{project.description}</p>
                        <a rel='noopener noreferrer' target='_blank' href={project.link}>{project.textLink}</a>
                    </div>
                ))}

            </motion.div>

        </motion.section>
    );
}

export default Projects;