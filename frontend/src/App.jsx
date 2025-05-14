import { useState, useEffect } from 'react';

import {fetchData} from './services/api.js'
import {Header} from './components/layouts/Header.jsx'
import {Footer} from './components/layouts/Footer.jsx'
import {Hero} from './components/sections/Hero.jsx'
import {Projects} from './components/sections/Projects.jsx'
import { Skills } from './components/sections/Skills.jsx';
import { Experiences } from './components/sections/Experiences.jsx';
import { Contact } from './components/sections/Contact.jsx';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  
  useEffect(() => {
    fetchData(setProjects, setSkills, setExperiences, setIsLoading);
  }, []);
  
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header/Navigation */}
      <Header projects_length={projects.length} skills_length={skills.length} experiences_length={experiences.length}/> 
      
      {/* Main Content */}
      <main>
        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading content...</p>
            </div>
          </div>
        ) : (
          <>
            {/* Hero Section */}
            <Hero/> {/**there is a link #projects */}
            
            {/* Projects Section */}
            <Projects projects={projects}/> {/** */}
            
            {/* Skills Section */}
            <Skills skills={skills}/>
            
            {/* Experience Section */}
            <Experiences experiences={experiences} />
            
            {/* Contact Section */}
            <Contact />
          </>
        )}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}


export default App;
