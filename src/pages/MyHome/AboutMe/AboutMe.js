import React from 'react';
import './AboutMe.css'
import aboutimg from '../../../images/ban3-removebg-preview.png'
const AboutMe = () => {
    return (
        <section className='about-section'>
            <h1>about me</h1>
            <div className='about-section-area'>

                <div className='about-section-area-description'>
                    <p>Experienced and energetic Web Developer with  one year of experience effectively in web development sector. Very much comfortable in working with react js and also passionate for learning new things.  </p>
                </div>
                <div>
                    <img src={aboutimg} alt="" />
                </div>
            </div>

            <div class="custom-shape-divider-bottom-1663743439">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>


        </section>
    );
};

export default AboutMe;