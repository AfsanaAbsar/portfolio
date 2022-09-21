import React from 'react';
import './Skills.css'
const Skills = () => {
    const skills = [
        {
            id: 1,
            name: "html"


        },
        {
            id: 2,
            name: "css"


        },
        {
            id: 3,
            name: "bootstrap"


        },
        {
            id: 4,
            name: "tailwind"


        },
        {
            id: 5,
            name: "javascript"


        },
        {
            id: 6,
            name: "react js"


        },
        {
            id: 7,
            name: "express js"


        },
        {
            id: 8,
            name: "mongodb"


        }
    ]
    return (
        <section className='skill-section'>
            <div>
                <h1 className='skill-title'>MY SKILLS</h1>
                <div className='skill-area'>
                    {
                        skills.map(skill => <div className='skill'>
                            <p>{skill.name}</p>
                        </div>)
                    }
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1663746236">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </section>
    );
};

export default Skills;