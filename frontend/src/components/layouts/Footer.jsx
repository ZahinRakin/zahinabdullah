import { Mail } from 'lucide-react';
import {FaGithub, FaLinkedin} from 'react-icons/fa'


function Footer(){
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Zahin Abdullah Rakin. All rights reserved.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="https://github.com/ZahinRakin" target='_blank' className="text-gray-400 hover:text-white">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/zahin-abdullah-rakin-438138252/" target='_blank' className="text-gray-400 hover:text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:zahinabdullahrakin@gmail.com" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export {Footer}