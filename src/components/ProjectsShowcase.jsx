import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import futsalImage from './images/futsal 1.png';
import evChargingImage from './images/ev-station2.png';
import skillsScoutImage from './images/skillscout.png';

const ProjectsShowcase = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      id: 1,
      number: '01',
      title: 'Arch Futsal',
      description: 'A web-based futsal booking platform for exploring courts and managing reservations efficiently.',
      category: 'Frontend Development',
      technologies: ['React', 'JavaScript', 'Tailwind CSS'],
      liveUrl: 'https://arch-futsal-frontend.onrender.com/',
      githubUrl: null,
      image: futsalImage,
    },
    {
      id: 2,
      number: '02',
      title: 'Time Tailor',
      description: 'A tailoring platform with product browsing, appointments, customer accounts, and order management workflows.',
      category: 'MERN Stack Development',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      liveUrl: null,
      githubUrl: 'https://github.com/Drogon2000-mp/time-tailor',
      image: null,
    },
    {
      id: 3,
      number: '03',
      title: 'EV Charging Platform',
      description: 'A platform for discovering EV charging stations, checking availability, and reserving charging locations with map-based browsing.',
      category: 'Full-Stack Development',
      technologies: ['React', 'Node.js', 'MongoDB', 'Leaflet'],
      liveUrl: null,
      githubUrl: 'https://github.com/Drogon2000-mp/Ev-charging-Finale',
      image: evChargingImage,
    },
    {
      id: 4,
      number: '04',
      title: 'Skills Scout',
      description: 'A MERN-based platform connecting skilled professionals with people looking to hire them through profile-based discovery.',
      category: 'Full-Stack Development',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      liveUrl: null,
      githubUrl: 'https://github.com/iAmVip1/mern-project',
      image: skillsScoutImage,
    },
  ];

  const primaryButtonStyle = {
    '--sk-card': '#000000',
    '--sk-ink': '#ffffff',
    '--sk-btn-line': '#000000',
    '--sk-soft': '#d9d9d9',
    '--sk-sh': '6px 7px 0 #d9d9d9',
    '--sk-r': '14px',
    '--sk-bw': '2px',
    '--sk-acc': '#ff5fa8',
  };

  const secondaryButtonStyle = {
    '--sk-card': '#ffffff',
    '--sk-ink': '#000000',
    '--sk-btn-line': '#000000',
    '--sk-alt-line': '#000000',
    '--sk-soft': '#d9d9d9',
    '--sk-alt-sh': '6px 7px 0 #d9d9d9',
    '--sk-sh': '6px 7px 0 #d9d9d9',
    '--sk-r': '14px',
    '--sk-bw': '2px',
    '--sk-acc': '#ff5fa8',
  };

  const renderButtons = (project) => (
    <div className="flex flex-wrap gap-4">
      {project.liveUrl && (
        <sakuga-button
          style={primaryButtonStyle}
          onClick={(event) => {
            event.currentTarget.done?.();
            setTimeout(() => {
              window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
            }, 420);
          }}
        >
          Live Preview
        </sakuga-button>
      )}

      {project.githubUrl && (
        <sakuga-button
          variant="secondary"
          style={secondaryButtonStyle}
          onClick={(event) => {
            event.currentTarget.done?.();
            setTimeout(() => {
              window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
            }, 420);
          }}
        >
          View Source
        </sakuga-button>
      )}
    </div>
  );

  const renderProject = (project, index) => (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.12 }}
      className="overflow-hidden border border-[#d9d9d9] bg-white"
    >
      {project.image && (
        <motion.div
          className="group relative overflow-hidden bg-[#f4f4f4]"
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </motion.div>
      )}

      <div className="p-8 lg:p-12">
        <div className="mb-6 flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="mb-3 text-[10px] font-medium uppercase tracking-[0.26em] text-[#777777]">
              {project.category}
            </div>
            <h3 className="text-3xl font-bold tracking-[-0.05em] text-black lg:text-5xl">{project.title}</h3>
          </div>
          <div className="text-5xl font-bold tracking-[-0.08em] text-black/5 lg:text-7xl">{project.number}</div>
        </div>

        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[#777777]">{project.description}</p>

        <div className="mb-8">
          <div className="mb-4 text-[10px] font-medium uppercase tracking-[0.24em] text-[#777777]">Technologies</div>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                className="border border-[#d9d9d9] bg-[#f4f4f4] px-3 py-2 text-sm font-medium text-black"
                whileHover={{ scale: 1.04, y: -2 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {renderButtons(project)}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" ref={ref} className="relative overflow-hidden bg-white px-6 py-32 lg:px-8">
      <div className="absolute -left-24 top-0 h-[420px] w-[420px] rounded-full border border-[#d9d9d9] opacity-50" />
      <div className="absolute -right-32 bottom-0 h-[520px] w-[520px] rounded-full border border-[#d9d9d9] opacity-50" />

      <div className="relative z-10 mx-auto max-w-[1600px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.32em] text-[#777777]">03 / Portfolio</div>
          <h2 className="mb-6 text-5xl font-bold tracking-[-0.06em] text-black lg:text-7xl">Selected Works</h2>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-[#777777]">
            Real projects, thoughtful design, and practical implementation.
          </p>
        </motion.div>

        <div className="space-y-20 lg:space-y-28">
          {projects.map((project, index) => renderProject(project, index))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
