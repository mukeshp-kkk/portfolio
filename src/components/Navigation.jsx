import { useState, useEffect, useRef, useMemo } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedTab, setSelectedTab] = useState('home');
  const tabsRef = useRef(null);

  const navLinks = useMemo(
    () => [
      { name: 'Home', value: 'home', href: '#home' },
      { name: 'About', value: 'about', href: '#about' },
      { name: 'Skills', value: 'skills', href: '#skills' },
      { name: 'Projects', value: 'projects', href: '#projects' },
      { name: 'Experience', value: 'experience', href: '#experience' },
      { name: 'Contact', value: 'contact', href: '#contact' },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const tabsNode = tabsRef.current;
    if (!tabsNode) return;

    const handleTabChange = (event) => {
      const nextValue = event.detail?.value || 'home';
      setSelectedTab(nextValue);

      const href = navLinks.find((link) => link.value === nextValue)?.href;
      if (!href) return;

      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.replaceState(null, '', href);
      }
    };

    tabsNode.addEventListener('change', handleTabChange);
    return () => tabsNode.removeEventListener('change', handleTabChange);
  }, [navLinks]);

  useEffect(() => {
    const tabsNode = tabsRef.current;
    if (!tabsNode) return;

    const index = navLinks.findIndex((link) => link.value === selectedTab);
    if (index >= 0) {
      tabsNode.selected = index;
    }
  }, [navLinks, selectedTab]);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const selectedLink = navLinks.find((link) => link.href === href);
      if (selectedLink) setSelectedTab(selectedLink.value);
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.replaceState(null, '', href);
      setIsMobileMenuOpen(false);
    }
  };

  const currentTabLabel = navLinks.find((link) => link.value === selectedTab)?.name || 'Home';

  const sakugaPrimaryButtonStyle = {
    '--sk-card': '#000000',
    '--sk-ink': '#ffffff',
    '--sk-btn-line': '#000000',
    '--sk-soft': '#d9d9d9',
    '--sk-sh': '6px 7px 0 #d9d9d9',
    '--sk-r': '14px',
    '--sk-bw': '2px',
    '--sk-acc': '#ff5fa8',
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-[#d9d9d9] bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 pt-2 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <motion.a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="group relative text-2xl font-bold tracking-tight text-black"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            MNP.
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
          </motion.a>

          <div className="hidden items-center gap-4 md:flex">
            <div className="flex flex-col items-end gap-2 relative z-50">
              <sakuga-tabs
                ref={tabsRef}
                label="Main navigation"
                selected={0}
                style={{
                  '--sk-card': '#ffffff',
                  '--sk-ink': '#111111',
                  '--sk-dim': '#777777',
                  '--sk-soft': '#d9d9d9',
                  '--sk-pri': '#111111',
                  '--sk-acc': '#f4f4f4',
                  '--sk-sh': '5px 6px 0 #d9d9d9',
                  '--sk-bw': '2.2px',
                  '--sk-r': '12px',
                }}
              >
                {navLinks.map((link) => (
                  <option key={link.value} value={link.value}>
                    {link.name}
                  </option>
                ))}
              </sakuga-tabs>
              <span className="text-[10px] font-medium uppercase tracking-[0.26em] text-[#777777]">
                {currentTabLabel}
              </span>
            </div>

            <sakuga-button
              style={sakugaPrimaryButtonStyle}
              onClick={(event) => {
                scrollToSection(event, '#contact');
                event.currentTarget.done?.();
              }}
            >
              Let's Talk
            </sakuga-button>
          </div>

          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative p-2 md:hidden"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-b border-[#d9d9d9] bg-white md:hidden"
          >
            <div className="space-y-4 px-6 py-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="group relative block py-2 text-lg font-medium text-black"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.08 }}
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.08 }}
              >
                <sakuga-button
                  style={sakugaPrimaryButtonStyle}
                  onClick={(event) => {
                    scrollToSection(event, '#contact');
                    event.currentTarget.done?.();
                  }}
                >
                  Let's Talk
                </sakuga-button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
