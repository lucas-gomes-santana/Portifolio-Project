import '../css/Projects.css'

interface ProjectsElements {
    image: string;
    title: string;
    description: string;
    link: string;
    projectType: string;
}

function Projects({image, title, description, link, projectType}: ProjectsElements){
    return(
        
        <div className='project' >

            <div className='card-projects'>
                <h3>{title}</h3>
                <h4>{projectType}</h4>
                <img src={image} alt="" />
                <p>{description}</p>
                <a rel='noopener noreferrer' target='_blank' href={link}>Click here to see the project</a>
            </div>

        </div>
    
    );
}

export default Projects;
