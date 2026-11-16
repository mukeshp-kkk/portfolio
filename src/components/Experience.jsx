import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, GraduationCap } from 'lucide-react';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      position: 'Frontend Developer Intern',
      company: 'Archphaze Technologies Pvt. Ltd.',
      duration: 'May 24, 2026 – August 26, 2026',
      responsibilities: [
        'Built and refined modern, responsive interfaces for web products using React and JavaScript.',
        'Implemented UI updates and frontend improvements to support functional project work.',
        'Worked on clean, maintainable components that improved usability and consistency.',
        'Contributed to debugging and visual polish across web pages and layouts.',
      ],
    },
    {
      position: 'UI/UX Designer Intern',
      company: 'IT Hive Solutions Pvt. Ltd.',
      duration: 'January 2025 – April 2025',
      responsibilities: [
        'Designed wireframes and responsive layout concepts for product screens.',
        'Created interactive prototypes in Figma to communicate product flow and visual structure.',
        'Improved interface clarity and user experience through thoughtful design decisions.',
        'Focused on accessibility, consistency, and usability across design mockups.',
      ],
    },
  ];

  const education = {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Nepal Kasthamandap College',
    duration: '2020 – 2024',
    gpa: '3.07',
  };

  return (
    <section id="experience" ref={ref} className="bg-[#f4f4f4] px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-sm font-medium uppercase tracking-[0.28em] text-[#777777]"
        >
          04 / Experience
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative border-l-2 border-black pl-8"
              >
                <div className="absolute -left-[9px] top-0 h-4 w-4 bg-black" />

                <div className="mb-4 text-[10px] font-medium uppercase tracking-[0.26em] text-[#777777]">
                  Position {String(index + 1).padStart(2, '0')}
                </div>

                <h3 className="mb-3 text-3xl font-bold tracking-[-0.05em] text-black">{exp.position}</h3>

                <div className="mb-3 flex items-center gap-2 text-lg font-medium text-black">
                  <Briefcase size={18} className="text-[#777777]" />
                  {exp.company}
                </div>

                <div className="mb-6 flex items-center gap-2 text-sm text-[#777777]">
                  <Calendar size={16} />
                  {exp.duration}
                </div>

                <div className="space-y-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="flex items-start gap-3 text-base text-[#777777]">
                      <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-black" />
                      <div>{resp}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:sticky lg:top-28 lg:h-fit"
          >
            <div className="bg-black p-8 text-white">
              <div className="mb-6 text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">Education</div>

              <div className="mb-5 flex items-center gap-3 text-white/80">
                <GraduationCap size={18} />
                <span className="text-sm uppercase tracking-[0.18em]">BCA</span>
              </div>

              <h3 className="mb-4 text-2xl font-bold leading-tight tracking-[-0.04em]">{education.degree}</h3>

              <div className="space-y-3 text-sm text-white/80">
                <div className="flex items-start gap-2">
                  <Briefcase size={16} className="mt-0.5" />
                  <div>{education.institution}</div>
                </div>

                <div className="flex items-start gap-2">
                  <Calendar size={16} className="mt-0.5" />
                  <div>{education.duration}</div>
                </div>
              </div>

              <div className="mt-6 border-t border-white/20 pt-6">
                <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">GPA</div>
                <div className="text-3xl font-bold tracking-[-0.05em]">{education.gpa}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
