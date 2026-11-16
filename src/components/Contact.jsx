import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, MapPin, GitBranch, Download, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muke8122@gmail.com',
      link: 'mailto:muke8122@gmail.com',
    },
    {
      icon: GitBranch,
      label: 'GitHub',
      value: 'github.com/Drogon2000-mp',
      link: 'https://github.com/Drogon2000-mp',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kathmandu, Nepal',
      link: null,
    },
  ];

  return (
    <section id="contact" ref={ref} className="bg-black px-6 py-32 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-sm font-medium uppercase tracking-[0.28em] text-white/60"
        >
          05 / Contact
        </motion.div>

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-8 text-5xl font-bold leading-[0.95] tracking-[-0.05em] text-white lg:text-6xl"
            >
              Let's work together.
              <br />
              Build something meaningful.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-12 max-w-xl text-lg leading-relaxed text-white/70"
            >
              I’m open to frontend, UI/UX, and product collaboration opportunities where thoughtful design and clean implementation matter.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center border border-white/20 bg-white/5 text-white">
                      <Icon size={20} />
                    </div>
                    <div>
                      <div className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">{item.label}</div>
                      <div className="font-medium text-white">{item.value}</div>
                    </div>
                  </div>
                );

                return item.link ? (
                  <motion.a
                    key={item.label}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    className="block text-white transition-transform hover:translate-x-1"
                  >
                    {content}
                  </motion.a>
                ) : (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    {content}
                  </motion.div>
                );
              })}
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="mailto:muke8122@gmail.com"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="btn-base btn-on-dark"
              >
                <Mail size={16} />
                Email Me
              </motion.a>

              <motion.a
                href="/cv.pdf"
                download="Mukesh-Nepali-Pariyar-CV.pdf"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="btn-base btn-secondary"
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="border border-white/20 bg-[#0d0d0d] p-8 sm:p-12">
              <div className="mb-8 text-[10px] font-medium uppercase tracking-[0.28em] text-white">Connect</div>

              <div className="space-y-5">
                <a
                  href="https://github.com/Drogon2000-mp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-white/20 bg-[#111111] px-5 py-4 text-lg font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span className="flex items-center gap-3 text-white group-hover:text-black">
                    <GitBranch size={20} className="text-white group-hover:text-black" />
                    GitHub
                  </span>
                  <ArrowUpRight size={18} className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                </a>

                <a
                  href="mailto:muke8122@gmail.com"
                  className="group flex items-center justify-between border border-white/20 bg-[#111111] px-5 py-4 text-lg font-medium text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  <span className="flex items-center gap-3 text-white group-hover:text-black">
                    <Mail size={20} className="text-white group-hover:text-black" />
                    Email
                  </span>
                  <ArrowUpRight size={18} className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-black" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
