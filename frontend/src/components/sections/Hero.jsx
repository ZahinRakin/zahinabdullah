import { ArrowRight } from 'lucide-react';


function Hero(){
    return (
        <section id="home" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
                            <span className="block">Hi, I'm</span>
                            <span className="block text-indigo-200">Zahin Abdullah Rakin</span>
                        </h1>
                        <p className="mt-6 text-xl max-w-lg">
                            Full Stack Developer specializing in backend.
                        </p>
                        <div className="mt-8 flex space-x-4">
                            <a 
                            href="#contact" 
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50"
                            >
                                Contact Me
                            <ArrowRight className="ml-2" size={20} />
                            </a>
                            <a 
                            href="#projects" 
                            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>
                    <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
                        <div className="w-64 h-64 rounded-full bg-white shadow-lg overflow-hidden">
                            <img 
                            src="/self_portrait.jpeg" 
                            alt="Profile" 
                            className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export {Hero}