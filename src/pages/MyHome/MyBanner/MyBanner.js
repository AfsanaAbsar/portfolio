import React from 'react';
import './MyBanner.css';
import bannerImage from '../../../images/ban4-removebg-preview.png'
import gmailIcon from '../../../images/email.png';
import githubIcon from '../../../images/github.png';
import linkedInIcon from '../../../images/linkedin.png';
const MyBanner = () => {

    return (
        <>
            <section className='banner-section'>
                <div className='section-area'>
                    <div className='banner-title'>
                        <h1>HEY! I AM </h1>
                        <h1>AFSANA ABSAR</h1>
                        <p className='secondary-title'>FRONT END WEB DEVELOPER</p>
                        <div className='banner-description'>
                            <p>Passionate and enthusiastic web developer with a year of experience, <br /> I am looking forward to explore the web development sector, <br /> utilize my skills and provide quality service to the company</p>
                            {/* <button> EXPLORE MORE</button> */}
                            <div>
                                {/* <a href="" target="_blank">
                                    <img className='banner-icons' src={gmailIcon} alt="" />
                                </a> */}
                                <a href="https://github.com/AfsanaAbsar" target="_blank">
                                    <img className='banner-icons' src={githubIcon} alt="" />
                                </a>
                                <a href="https://www.linkedin.com/in/afsana-absar" target="_blank">
                                    <img className='banner-icons' src={linkedInIcon} alt="" />
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='banner-img'>
                        <img className='' src={bannerImage} alt="" />
                    </div>
                </div>
                <div class="custom-shape-divider-bottom-1663743439">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>

            </section>
        </>
    );
};

export default MyBanner;