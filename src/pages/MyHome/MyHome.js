import React from 'react';
import MyHeader from '../Shared/MyHeader/MyHeader';
import AboutMe from './AboutMe/AboutMe';
import MyBanner from './MyBanner/MyBanner';
import Projects from './Projects/Projects';
import Skills from './Skills/Skills';

const MyHome = () => {
    return (
        <div>
            <MyHeader></MyHeader>
            <MyBanner></MyBanner>

            <Skills></Skills>
            <AboutMe></AboutMe>
            <Projects></Projects>
        </div>
    );
};

export default MyHome;