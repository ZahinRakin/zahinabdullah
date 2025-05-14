import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function Projects({projects}){
  if(projects.length == 0){
    return (<></>);
  }
  return (
    <section id="projects" className="py-16 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
          A selection of my recent work and projects.
        </p>
      </div>
      
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="bg-gray-50 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex space-x-4">
                <a 
                  href={project.github} 
                  className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <FaGithub size={16} className="mr-1" />
                  Code
                </a>
                <a 
                  href={project.liveDemo} 
                  className="flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  <ExternalLink size={16} className="mr-1" />
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}


export {Projects}