
import './App.css';
import MyHome from './pages/MyHome/MyHome';
import { Routes, Route } from "react-router-dom";
import AboutMe from './pages/MyHome/AboutMe/AboutMe';
import Projects from './pages/MyHome/Projects/Projects';


function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="home" element={<MyHome />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
