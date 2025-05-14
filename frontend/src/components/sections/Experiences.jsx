


function Experiences({experiences}){
  if(experiences.length == 0){
    return (<></>);
  }
  return (
    <section id="experience" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Professional Experience
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            My professional journey and work experience.
          </p>
        </div>
        
        <div className="mt-12 space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              className="bg-gray-50 overflow-hidden rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="md:flex md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {exp.role}
                  </h3>
                  <div className="mt-1 flex items-center">
                    <span className="text-gray-700">{exp.company}</span>
                    <span className="mx-2 text-gray-500">•</span>
                    <span className="text-gray-500">{exp.period}</span>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-gray-600">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export {Experiences}