import { ArrowUp, GitBranch, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#d9d9d9] bg-white px-6 py-12 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid items-center gap-8 md:grid-cols-3">
          <div className="text-2xl font-bold tracking-tight text-black">MNP.</div>

          <div className="text-center text-sm text-[#777777]">
            Designed and developed by Mukesh Nepali Pariyar.
          </div>

          <div className="flex items-center justify-end gap-3">
            <a
              href="https://github.com/Drogon2000-mp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#d9d9d9] bg-white px-3 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-black transition-colors hover:border-black hover:bg-black hover:text-white"
              aria-label="GitHub"
            >
              <GitBranch size={16} />
              <span>GitHub</span>
            </a>
            <a
              href="mailto:muke8122@gmail.com"
              className="inline-flex items-center gap-2 border border-[#d9d9d9] bg-white px-3 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-black transition-colors hover:border-black hover:bg-black hover:text-white"
              aria-label="Email"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <button
              onClick={scrollToTop}
              className="inline-flex h-11 w-11 items-center justify-center bg-black text-white transition-colors hover:bg-[#1a1a1a]"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#d9d9d9] pt-8 text-xs text-[#777777] md:flex-row">
          <div>© {currentYear} Mukesh Nepali Pariyar. All rights reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span>Frontend Developer</span>
            <span>/</span>
            <span>UI/UX Designer</span>
            <span>/</span>
            <span>Kathmandu, Nepal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
