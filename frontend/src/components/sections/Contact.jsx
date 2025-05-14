import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Contact(){
  return (
    <section id="contact" className="py-16 bg-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Interested in working together? Feel free to contact me.
          </p>
        </div>
        
        <div className="mt-12 max-w-lg mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="zahinabdullahrakin@gmail.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex justify-center space-x-6">
                  <a href="https://github.com/ZahinRakin" className="text-gray-400 hover:text-gray-500">
                    <FaGithub size={24} />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a href="https://www.linkedin.com/in/zahin-abdullah-rakin-438138252/" className="text-gray-400 hover:text-gray-500">
                    <FaLinkedin size={24} />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                  <a href="mailto:zahinabdullahrakin@gmail.com" className="text-gray-400 hover:text-gray-500">
                    <Mail size={24} />
                    <span className="sr-only">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

//<a  target='_blank' className="text-gray-400 hover:text-white">
{/* <FaGithub size={20} />
</a>
<a  target='_blank' className="text-gray-400 hover:text-white">
  <FaLinkedin size={20} />
</a>
<a  className="text-gray-400 hover:text-white">
  <Mail size={20} />
</a> */}

export {Contact}