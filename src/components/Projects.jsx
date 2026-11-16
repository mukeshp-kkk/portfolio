import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, GitBranch } from 'lucide-react';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      number: '01',
      title: 'ARCH FUTSAL',
      description: 'A web-based futsal booking platform designed to simplify court discovery, reservations and venue management.',
      technologies: ['React.js', 'JavaScript', 'Tailwind CSS'],
      liveUrl: 'https://arch-futsal-frontend.onrender.com/',
      githubUrl: null,
    },
    {
      number: '02',
      title: 'TIME TAILOR',
      description: 'An online tailoring and fashion service platform where customers can browse products, customize clothing, book appointments and manage orders.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      liveUrl: null,
      githubUrl: 'https://github.com/Drogon2000-mp/time-tailor',
    },
    {
      number: '03',
      title: 'EV CHARGING PLATFORM',
      description: 'A platform that helps EV users discover charging stations, check availability and manage reservations with map-based discovery.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      liveUrl: null,
      githubUrl: 'https://github.com/Drogon2000-mp/Ev-charging-Finale',
    },
    {
      number: '04',
      title: 'SKILLS SCOUT',
      description: 'A platform that connects users with skilled professionals through worker profiles, search functionality and hiring workflows.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      liveUrl: null,
      githubUrl: 'https://github.com/iAmVip1/mern-project',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-32 px-6 lg:px-8 bg-secondary-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 border border-border rounded-full opacity-10 -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Number */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest text-muted mb-12 flex items-center gap-4"
        >
          <span>03 / SELECTED WORK</span>
          <motion.div 
            className="h-px bg-border flex-1"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.number}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white border-2 border-border hover:border-black transition-all duration-500 group relative overflow-hidden"
              whileHover={{ scale: 1.01 }}
            >
              {/* Hover shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 p-8 lg:p-12 relative z-10">
                {/* Left Content */}
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <motion.div 
                      className="text-8xl font-display font-bold text-black/5 select-none"
                      animate={{ 
                        opacity: [0.05, 0.1, 0.05]
                      }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {project.number}
                    </motion.div>
                  </div>

                  <div>
                    <motion.h3 
                      className="text-3xl font-display font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300"
                    >
                      {project.title}
                    </motion.h3>
                    <p className="text-muted leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <div className="text-xs tracking-widest text-muted mb-3">TECHNOLOGIES</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1.5 border border-black text-xs font-medium relative overflow-hidden group/tech"
                          whileHover={{ scale: 1.05, y: -2 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.15 + techIndex * 0.05 }}
                        >
                          <span className="relative z-10">{tech}</span>
                          <span className="absolute inset-0 bg-black transform translate-y-full group-hover/tech:translate-y-0 transition-transform duration-300" />
                          <span className="absolute inset-0 text-white flex items-center justify-center opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300">
                            {tech}
                          </span>
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-black text-white px-6 py-3 text-sm font-medium relative overflow-hidden group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={16} className="relative z-10" />
                        <span className="relative z-10">Live Demo</span>
                        <span className="absolute inset-0 bg-gray-800 transform translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300" />
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border-2 border-black px-6 py-3 text-sm font-medium relative overflow-hidden group/btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <GitBranch size={16} className="relative z-10 group-hover/btn:text-white transition-colors" />
                        <span className="relative z-10 group-hover/btn:text-white transition-colors">GitHub</span>
                        <span className="absolute inset-0 bg-black transform translate-x-[-100%] group-hover/btn:translate-x-0 transition-transform duration-300" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Right Visual Mockup */}
                <motion.div 
                  className="flex items-center justify-center bg-secondary-bg border-2 border-border min-h-[300px] lg:min-h-[400px] relative overflow-hidden group-hover:border-black transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Abstract Project Representation with animation */}
                  <div className="absolute inset-0 flex items-center justify-center p-12">
                    <div className="relative w-full h-full">
                      {/* Minimalist browser mockup */}
                      <motion.div 
                        className="border-2 border-black/20 group-hover:border-black/40 h-full flex flex-col transition-colors duration-300"
                        animate={{ 
                          boxShadow: [
                            "0 0 0 rgba(0,0,0,0)",
                            "4px 4px 0 rgba(0,0,0,0.1)",
                            "0 0 0 rgba(0,0,0,0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <div className="border-b-2 border-black/20 group-hover:border-black/40 p-3 flex gap-1.5 transition-colors duration-300">
                          <motion.div 
                            className="w-2 h-2 border-2 border-black/20"
                            whileHover={{ rotate: 180, scale: 1.2 }}
                          />
                          <motion.div 
                            className="w-2 h-2 border-2 border-black/20"
                            whileHover={{ rotate: 180, scale: 1.2 }}
                          />
                          <motion.div 
                            className="w-2 h-2 border-2 border-black/20"
                            whileHover={{ rotate: 180, scale: 1.2 }}
                          />
                        </div>
                        <div className="flex-1 flex items-center justify-center p-8">
                          <div className="text-center">
                            <motion.div 
                              className="text-6xl font-display font-bold text-black/10 mb-4"
                              animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                              {project.number}
                            </motion.div>
                            <motion.div 
                              className="text-xs tracking-widest text-black/30"
                              animate={{ opacity: [0.3, 0.6, 0.3] }}
                              transition={{ duration: 2, repeat: Infinity }}
                            >
                              PROJECT PREVIEW
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
