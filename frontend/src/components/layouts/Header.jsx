import { useState } from 'react';
import { Menu, X } from 'lucide-react';



function Header({projects_length, skills_length, experiences_length}){
    const [menuOpen, setMenuOpen] = useState(false);

    function getDeskTopNav(){
        return (<div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-indigo-600 font-medium">Home</a>
            {(projects_length == 0)
                ? <></>
                : (<a href="#projects" className="text-gray-700 hover:text-indigo-600 font-medium">Projects</a>)}

            {(skills_length == 0)
                ? <></>
                : (<a href="#skills" className="text-gray-700 hover:text-indigo-600 font-medium">Skills</a>)}

            {(experiences_length == 0)
                ? <></>
                : (<a href="#experience" className="text-gray-700 hover:text-indigo-600 font-medium">Experience</a>)}
            <a href="#contact" className="text-gray-700 hover:text-indigo-600 font-medium">Contact</a>
        </div>);
    }

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex items-center">
                <span className="text-xl font-bold text-indigo-600">Portfolio</span>
                </div>
                
                {/* Desktop Navigation */}
                {getDeskTopNav()}
                
                {/* Mobile Navigation Button */}
                <div className="md:hidden flex items-center">
                <button 
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-gray-700 hover:text-indigo-600 focus:outline-none"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                </div>
            </div>
            </nav>

            {/* Mobile Navigation Menu */}
            {menuOpen && (
            <div className="md:hidden bg-white border-t border-gray-200">
                <div className="px-2 pt-2 pb-3 space-y-1">
                <a 
                    href="#home" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    onClick={() => setMenuOpen(false)}
                >
                    Home
                </a>
                <a 
                    href="#projects" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    onClick={() => setMenuOpen(false)}
                >
                    Projects
                </a>
                <a 
                    href="#skills" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    onClick={() => setMenuOpen(false)}
                >
                    Skills
                </a>
                <a 
                    href="#experience" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    onClick={() => setMenuOpen(false)}
                >
                    Experience
                </a>
                <a 
                    href="#contact" 
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </a>
                </div>
            </div>
            )}
        </header>
    );
}

export {Header}