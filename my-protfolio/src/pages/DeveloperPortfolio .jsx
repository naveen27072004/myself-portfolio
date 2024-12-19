import React, { useState } from 'react';
import Typewriter from "typewriter-effect";
import { RxLinkedinLogo } from "react-icons/rx";
import { LuGithub } from "react-icons/lu";
import { BiLogoGmail } from "react-icons/bi";
import { BiCodeBlock } from "react-icons/bi";
import { motion, AnimatePresence } from 'framer-motion';



const companyLogos = [
  { id: 1, name: 'Google', logo: '/api/placeholder/200/100' },
  { id: 2, name: 'Microsoft', logo: '/api/placeholder/200/100' },
  { id: 3, name: 'Amazon', logo: '/api/placeholder/200/100' },
  { id: 4, name: 'Apple', logo: '/api/placeholder/200/100' }
];

const experiences = [
  {
    id: 1,
    company: 'Yale It Skill Hub',
    role: 'Mern Stack Developer',
    duration: 'Jan 2024 - may 2024',
    description: 'Learn Mern stack Development certified cource React JS,Node JS,Express JS,MongoDb , MOngoose and how to write neat and clean code proper folder stucher'
  }
];

const projects = [
  {
    id: 1,
    title: 'Hotel Managing',
    description: 'Full-stack web application with React,Tailwind css, Node.js and MongoDB,mongoose',
    technologies: ['React', 'Node.js', 'MongoDB','Tailwind css'],
    imageUrl: './hotel.jpeg',
    githubLink: '#',
  },
  {
    id: 2,
    title: 'Social Media Dashboard',
    description: 'Real-time analytics dashboard with data visualization',
    technologies: ['React', 'Express.js', 'squlize'],
    imageUrl: './blog.png',
    githubLink: '#',
  },
  {
    id: 3,
    title: 'Saloon Booking App',
    description: 'Its Role Base Auth App user ,Partner and company multiple role select authantaion',
    technologies: ['React', 'Express.js', 'JWT','MongoDb','mongoose'],
    imageUrl: './saloon.jpeg',
    githubLink: '#',
  },
  {
    id: 4,
    title:'Personal Protfolio',
    description:'My personal protfolio website',
    technologies:['React','Tailwind css'],
    imageUrl:'./protfolio.jpeg',
    githubLink:'#',
  }
];

const skills = [
  { 
    id: 1, 
    name: 'JavaScript', 
    imageUrl: './es6.png',
    category: 'Frontend',
    proficiency: 85
  },
  { 
    id: 2, 
    name: 'React', 
    imageUrl: 'logo192.png',
    category: 'Frontend',
    proficiency: 90
  },
  { 
    id: 3, 
    name: 'Tailwind', 
    imageUrl: 'tail.png',
    category: 'Styling',
    proficiency: 80
  },
  { 
    id: 4, 
    name: 'Node.js', 
    imageUrl: './exp.png',
    category: 'Backend',
    proficiency: 75
  },
  { 
    id: 5, 
    name: 'MongoDB', 
    imageUrl: 'mongodb.png',
    category: 'Database',
    proficiency: 70
  },
  { 
    id: 6, 
    name: 'Express', 
    imageUrl: 'download.png',
    category: 'Backend',
    proficiency: 75
  },
  { 
    id: 7, 
    name: 'Mongoose', 
    imageUrl: 'mongoose.png',
    category: 'Database',
    proficiency: 65
  }
];
const MobileSkillView = () => {
  const [expandedSkill, setExpandedSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];
  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === activeCategory);


  return (
    <div className="space-y-4">
      {/* Category Filters */}
      <div className="flex overflow-x-auto space-x-2 pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              px-4 py-2 rounded-full text-sm flex-shrink-0 transition duration-300 
              ${activeCategory === category 
                ? 'bg-red-600 text-white' 
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills List */}
      <div className="space-y-4">
        {filteredSkills.map((skill) => (
          <motion.div
            key={skill.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-gray-800 rounded-xl p-4"
          >
            <div 
              className="flex items-center justify-between"
              onClick={() => setExpandedSkill(
                expandedSkill === skill.id ? null : skill.id
              )}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-black rounded-full p-2 flex items-center justify-center">
                  <img 
                    src={skill.imageUrl} 
                    alt={skill.name} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <div className="bg-gray-700 rounded-full h-2 mt-2">
                    <div 
                      className="bg-red-600 h-full rounded-full" 
                      style={{ width: `${skill.proficiency}%` }}
                    />
                  </div>
                </div>
              </div>
              <span className="text-white">
                {expandedSkill === skill.id ? '−' : '+'}
              </span>
            </div>

            <AnimatePresence>
              {expandedSkill === skill.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 text-gray-300"
                >
                  <p>{skill.description}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const DeveloperPortfolio = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedSkill, setExpandedSkill] = useState(null);


  const [selectedMobileProject, setSelectedMobileProject] = useState(null);
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  // Filter skills based on selected category
  const filteredSkills = activeCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
    <div>
    {/* Category Filters */}
    <div className="flex justify-center mb-12 space-x-4">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`
            px-4 py-2 rounded-full transition duration-300 
            ${activeCategory === category 
              ? 'bg-red-600 text-white' 
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>

    {/* Skills Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {filteredSkills.map((skill) => (
        <motion.div
          key={skill.id}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="bg-gray-800 rounded-xl p-6 text-center group relative"
        >
          <div className="mb-4 w-24 h-24 mx-auto flex items-center justify-center bg-black rounded-full p-4 group-hover:bg-red-600/20 transition duration-300">
            <img 
              src={skill.imageUrl} 
              alt={skill.name} 
              className="w-full h-full object-contain"
            />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
          <div className="bg-gray-700 rounded-full h-2 mt-2">
            <div 
              className="bg-red-600 h-full rounded-full" 
              style={{ width: `${skill.proficiency}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            {skill.proficiency}% Proficiency
          </p>
          <div className="absolute inset-0 bg-black/80 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <p className="text-white text-sm text-center">
              {skill.description}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Mobile Menu Toggle */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-4 bg-black">
        <div className="text-2xl font-bold text-red-600">
          DEV<span className="text-white">FOLIO</span>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="text-white focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black z-40 flex flex-col items-center justify-center space-y-6 text-2xl">
          <a href="#home" className="hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#projects" className="hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#about" className="hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#contact" className="hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}

      {/* Header Section */}
      <header className="hidden md:flex fixed top-0 left-0 right-0 justify-between items-center p-4 bg-black/80 backdrop-blur-sm z-50">
        <div className="text-2xl font-bold text-red-600">
          DEV<span className="text-white">FOLIO</span>
        </div>
        <nav className="flex space-x-6">
          <a href="#home" className="hover:text-red-600">Home</a>
          <a href="#projects" className="hover:text-red-600">Projects</a>
          <a href="#about" className="hover:text-red-600">About</a>
          <a href="#contact" className="hover:text-red-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section 
        className="relative h-screen flex flex-col justify-center items-center text-center px-4"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url("/api/placeholder/1920/1080")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
         <h1 className="text-3xl md:text-5xl font-bold mb-4">
      {" "}
      <span className="text-red-600">
      <Typewriter
          options={{
            strings: ["Hi, I'm Naveen", "MERN Stack Developer"],
            autoStart: true,
            loop: true,
            delay: 75,
            deleteSpeed: 50,
            pauseFor: 2000, // Pauses before deleting the text
          }}
        />
      </span>
    </h1>
        <p className="text-lg md:text-2xl mb-8 px-4">
          Full Stack Developer | Creative Technologist
        </p>
        <div className="flex space-x-4">
          <a href="#projects" className="bg-red-600 px-4 py-2 md:px-6 md:py-3 rounded hover:bg-red-700 transition">
            View Projects
          </a>
          <a href="#contact" className="border border-white px-4 py-2 md:px-6 md:py-3 rounded hover:bg-white hover:text-black transition">
            Contact Me
          </a>
        </div>
        <div className="flex space-x-4 mt-10">
          <RxLinkedinLogo className="text-red-500 text-4xl animate-jump" />
          <span className='w-1 h-10 bg-white rounded-lg'></span>
          <LuGithub className="text-red-500 text-4xl animate-jump delay-100" />
          <span className='w-1 h-10 bg-white rounded-lg'></span>
          <BiLogoGmail className="text-red-500 text-4xl animate-jump delay-200" />
          <span className='w-1 h-10 bg-white rounded-lg'></span>
          <BiCodeBlock className="text-red-500 text-4xl animate-jump delay-300" />
          <span className='w-1 h-10 bg-white rounded-lg'></span>

    </div>
      </section>

      <section id="about" className="bg-gray-900 p-6 md:p-12">
    <div className="container mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">About Me</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-6 md:mb-0 md:mr-8">
          <img 
            src="./logo192.png" 
            alt="Naveen Profile" 
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>
        <div className="md:w-1/2">
          <p className="text-gray-300 mb-6 leading-relaxed">
          That’s fantastic! Being a full-stack developer with a passion for clean and structured code is a huge asset. Here’s how you can further refine and showcase your skills:
          </p>
          <section className="bg-gradient-to-b from-black to-gray-900 py-16 px-4 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-red-600">Tech Arsenal</span>
        </h2>

        {/* Category Filters */}
        <section className="bg-gradient-to-b from-black to-gray-900 py-16 px-4 md:px-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          My <span className="text-red-600">Tech Arsenal</span>
        </h2>

        {/* Conditional Rendering based on device */}
      </div>
    </section>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 rounded-xl p-6 text-center group"
            >
              <div className="mb-4 w-24 h-24 mx-auto flex items-center justify-center bg-black rounded-full p-4 group-hover:bg-red-600/20 transition duration-300">
                <img 
                  src={skill.imageUrl} 
                  alt={skill.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{skill.name}</h3>
              <div className="bg-gray-700 rounded-full h-2 mt-2">
                <div 
                  className="bg-red-600 h-full rounded-full" 
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
              <p className="text-sm text-gray-400 mt-2">
                {skill.proficiency}% Proficiency
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
          
          <h3 className="text-xl font-semibold mb-4 text-red-600">Professional Experience</h3>
          {experiences.map((exp) => (
            <div key={exp.id} className="mb-4 bg-black/30 p-4 rounded-lg">
              <h4 className="font-bold text-white">{exp.role}</h4>
              <p className="text-gray-400">{exp.company} | {exp.duration}</p>
              <p className="text-gray-300 mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>


      {/* Projects Section */}
      <div className="bg-black text-white min-h-screen">
      {/* Existing code remains the same */}

      {/* Projects Section */}
      <section id="projects" className="p-4 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center md:text-left">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="relative group overflow-hidden rounded-lg cursor-pointer"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
              onClick={() => {
                // For mobile devices, toggle project details
                if (window.innerWidth < 768) {
                  setSelectedMobileProject(
                    selectedMobileProject === project.id ? null : project.id
                  );
                }
              }}
            >
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
              />
              {/* Desktop hover effect */}
              {activeProject === project.id && window.innerWidth >= 768 && (
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap justify-center space-x-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-red-600 px-2 py-1 rounded text-xs m-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                  >
                    View on GitHub
                  </a>
                </div>
              )}

              {/* Mobile click to view */}
              {selectedMobileProject === project.id && window.innerWidth < 768 && (
                <div className="absolute inset-0 bg-black/70 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap justify-center space-x-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-red-600 px-2 py-1 rounded text-xs m-1">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Rest of the existing component remains the same */}
    </div>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-900 p-6 md:p-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center">
            <a href="mailto:naveenlatha2772004@gmail.com" className="hover:text-red-600">
              <p className="text-lg md:text-xl">Email</p>
              <p className="text-sm">naveenlatha2772004@gmail.com</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://github.com/naveen27072004/saloonBooking-backend" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <p className="text-lg md:text-xl">GitHub</p>
              <p className="text-sm">github.com/naveen</p>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://www.linkedin.com/in/naveen2707/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600">
              <p className="text-lg md:text-xl">LinkedIn</p>
              <p className="text-sm">linkedin.com/in/naveeen</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black p-4 text-center">
        <p className="text-sm">&copy; 2024 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default DeveloperPortfolio;