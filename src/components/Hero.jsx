import { motion } from 'framer-motion';
import { ArrowRight, Download, GitBranch, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-20 pt-32 lg:px-8">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-64 w-64 rounded-full border border-[#d9d9d9] opacity-40" />
        <div className="absolute bottom-20 right-10 h-96 w-96 rounded-full border border-[#d9d9d9] opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center border border-black bg-white px-4 py-2 text-[10px] font-medium uppercase tracking-[0.24em] text-black">
                Mukesh Nepali Pariyar
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 text-xs font-medium uppercase tracking-[0.28em] text-[#777777]"
            >
              Frontend Developer | UI/UX Designer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mb-8 max-w-2xl text-5xl font-bold leading-[0.9] tracking-[-0.06em] text-black sm:text-6xl lg:text-7xl"
            >
              Building digital experiences with clarity, precision, and purpose.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 max-w-xl text-lg leading-relaxed text-[#777777]"
            >
              I design and build modern, responsive interfaces that balance strong visual thinking with practical frontend implementation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 flex flex-wrap items-center gap-4"
            >
              <motion.a
                href="#projects"
                onClick={(e) => scrollToSection(e, '#projects')}
                className="btn-base btn-primary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <ArrowRight size={16} />
              </motion.a>

              <motion.a
                href="/cv.pdf"
                download="Mukesh-Nepali-Pariyar-CV.pdf"
                className="btn-base btn-secondary"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={16} />
                Download CV
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3"
            >
              <a
                href="https://github.com/Drogon2000-mp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-[#d9d9d9] bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:border-black hover:bg-black hover:text-white"
                aria-label="GitHub"
              >
                <GitBranch size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="mailto:muke8122@gmail.com"
                className="inline-flex items-center gap-2 border border-[#d9d9d9] bg-white px-4 py-2.5 text-sm font-medium text-black transition-colors hover:border-black hover:bg-black hover:text-white"
                aria-label="Email"
              >
                <Mail size={16} />
                <span>Email</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="hidden h-[600px] items-center justify-center lg:flex"
          >
            <div className="relative flex h-full w-full items-center justify-center">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.04, 1] }}
                transition={{ rotate: { duration: 20, repeat: Infinity, ease: 'linear' }, scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' } }}
                className="absolute h-96 w-96 rounded-full border border-black/20"
              />

              <motion.div
                className="absolute h-72 w-72 rounded-full border-2 border-black/25 shadow-[8px_8px_0_rgba(0,0,0,0.12)]"
                animate={{ boxShadow: ['8px 8px 0 rgba(0,0,0,0.12)', '12px 12px 0 rgba(0,0,0,0.12)', '8px 8px 0 rgba(0,0,0,0.12)'] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />

              <motion.div
                className="relative z-10 cursor-default"
                whileHover={{ scale: 1.04, rotate: 2 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="select-none font-['Space_Grotesk'] text-7xl font-bold tracking-[-0.08em] text-black">MNP</div>
                <motion.div
                  className="absolute -bottom-6 right-0 text-[10px] font-medium uppercase tracking-[0.38em] text-[#777777]"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  Portfolio
                </motion.div>
              </motion.div>

              <motion.div
                className="absolute left-0 top-1/4 h-px w-28 bg-black/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              <motion.div
                className="absolute bottom-1/4 right-0 h-px w-28 bg-black/20"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.6 }}
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                className="absolute right-8 top-10"
              >
                <svg width="110" height="110" viewBox="0 0 110 110" aria-hidden="true">
                  <defs>
                    <path id="heroRing" d="M 55, 55 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0" fill="none" />
                  </defs>
                  <text className="fill-black text-[9px] font-medium uppercase tracking-[0.35em]">
                    <textPath href="#heroRing">Frontend • UI/UX • Developer •</textPath>
                  </text>
                </svg>
              </motion.div>

              <motion.div
                className="absolute left-1/4 top-1/3 h-2 w-2 rounded-full bg-black"
                animate={{ y: [-10, 10, -10], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-1/3 right-1/4 h-3 w-3 border border-black"
                animate={{ rotate: [0, 90, 180, 270, 360], scale: [1, 1.18, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 flex flex-wrap gap-8 border-t border-[#d9d9d9] pt-8 text-[10px] font-medium uppercase tracking-[0.28em] text-[#777777]"
        >
          <span>Kathmandu, Nepal</span>
          <span>/</span>
          <span>Frontend Development</span>
          <span>/</span>
          <span>UI/UX Design</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
