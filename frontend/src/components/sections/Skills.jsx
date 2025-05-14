

function Skills({skills}){
  if(skills.length == 0){
    return (<></>);
  }

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Skills & Technologies
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Technologies and tools I work with.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white overflow-hidden rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export {Skills}