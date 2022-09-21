import React from 'react';
import './Projects.css'
const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "computer zone",
            image: "https://i.ibb.co/8zdFdvq/computerzone.png",
            liveSite: "https://computer-zone-34c0d.web.app/",
            githubCode: "https://github.com/AfsanaAbsar/computer-zone",

        },
        {
            id: 2,
            name: "cuisine",
            image: "https://i.ibb.co/Xz9m7D1/cuisine.png",
            liveSite: "https://cuisine-react-firebase.web.app/",
            githubCode: "https://github.com/AfsanaAbsar/spices",

        },
        {
            id: 3,
            name: "booxplained",
            image: "https://i.ibb.co/WgyFcLh/booxplained.png",
            liveSite: "https://booxplained.netlify.app/",
            githubCode: "https://github.com/AfsanaAbsar/booxplained",

        }
    ]
    return (
        <section className='project-section'>
            <div>
                <h1 className='project-title'>MY PROJECTS</h1>
                <div className='project-area'>
                    {
                        projects.map(project => <div className='project'>
                            <div className='project-description'>
                                <p>{project.name}</p>
                                <a href={project.liveSite} target="_blank">VIEW PROJECT </a>
                                <span >||</span>
                                <a href={project.githubCode} target="_blank">VIEW CODE</a>
                            </div>
                            <img src={project.image} alt="" />
                        </div>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Projects;