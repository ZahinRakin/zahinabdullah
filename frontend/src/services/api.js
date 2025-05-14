
const fetchData = async (setProjects, setSkills, setExperiences, setIsLoading) => {
    try {
      // In a real app, these would be API calls
      
      
      // Simulated data
      const projectsData = [
        {
          id: 1,
          title: 'SolveSpace',
          description: 'A platform where student and teachers get connected',
          technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
          image: '/solvespace.png',
          github: '#',
          liveDemo: '#'
        },
        {
          id: 2,
          title: 'Observer',
          description: 'An application where Store owners can send news to the customers who want the news',
          technologies: ['React', 'Fastapi', 'MongoDB'],
          image: '/observer.jpg',
          github: '#',
          liveDemo: '#'
        }
      ];
      
      const skillsData = [
        { category: 'Frontend', items: ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
        { category: 'Backend', items: ['Node.js', 'Express', 'REST APIs', 'MongoDB', 'PostgreSQL'] },
        { category: 'DevOps & Tools', items: ['Git', 'learning Docker', 'learning AWS'] }
      ];
      
      const experiencesData = [];
      
      // Set state with fetched data
      setProjects(projectsData);
      setSkills(skillsData);
      setExperiences(experiencesData);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setIsLoading(false);
    }
  };

export {fetchData}
  