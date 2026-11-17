import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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

  const info = [
    { icon: MapPin, label: 'Location', value: 'Kathmandu, Nepal' },
    { icon: GraduationCap, label: 'Education', value: 'Bachelor of Computer Applications (BCA)' },
    { icon: Briefcase, label: 'Experience', value: 'Frontend Developer Intern · UI/UX Designer Intern' },
  ];

  return (
    <section id="about" ref={ref} className="bg-[#f4f4f4] px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-sm font-medium uppercase tracking-[0.28em] text-[#777777]"
        >
          01 / About
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-black lg:text-6xl"
            >
              Practical design thinking.
              <br />
              Focused frontend execution.
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5 text-lg leading-relaxed text-[#777777]"
            >
              <p>
                I’m Mukesh Nepali Pariyar, a BCA graduate with hands-on experience in frontend development and UI/UX design through internship work.
              </p>
              <p>
                My focus is building usable, polished interfaces that combine strong visual communication with real-world frontend implementation. I work with React, JavaScript, Tailwind CSS, Figma, and full-stack project workflows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <sakuga-button
                style={primaryButtonStyle}
                onClick={(event) => {
                  const link = document.createElement('a');
                  link.href = '/cv.pdf';
                  link.download = 'Mukesh-Nepali-Pariyar-CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                  event.currentTarget.done?.();
                }}
              >
                Download CV
              </sakuga-button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {info.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.45 + index * 0.12 }}
                  className="border border-[#d9d9d9] bg-white p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center border border-black bg-white text-black">
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="mb-1 text-xs font-medium uppercase tracking-[0.18em] text-[#777777]">{item.label}</div>
                      <div className="text-lg font-medium text-black">{item.value}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-black p-8 text-white"
            >
              <div className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-white/70">Focus</div>
              <div className="text-2xl font-bold leading-tight tracking-[-0.04em]">
                Frontend Development
                <br />
                UI/UX Design
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
