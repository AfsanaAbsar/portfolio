import React from 'react';

import AboutMe from './AboutMe/AboutMe';
import MyBanner from './MyBanner/MyBanner';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const MyHome = () => {
    return (
        <div>

            <MyBanner></MyBanner>

            <Skills></Skills>
            <AboutMe></AboutMe>
            <Projects></Projects>
        </div>
    );
};

export default MyHome;