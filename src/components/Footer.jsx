import { ArrowUp, GitBranch, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToTop = (event) => {
    event?.preventDefault?.();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    event?.currentTarget?.done?.();
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
              href="https://mail.google.com/mail/?view=cm&fs=1&to=muke8122@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#d9d9d9] bg-white px-3 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-black transition-colors hover:border-black hover:bg-black hover:text-white"
              aria-label="Email"
            >
              <Mail size={16} />
              <span>Email</span>
            </a>
            <sakuga-button
              style={{
                '--sk-card': '#000000',
                '--sk-ink': '#ffffff',
                '--sk-btn-line': '#000000',
                '--sk-soft': '#d9d9d9',
                '--sk-sh': '4px 5px 0 #d9d9d9',
                '--sk-r': '12px',
                '--sk-bw': '2px',
                '--sk-acc': '#ff5fa8',
              }}
              onClick={scrollToTop}
            >
              <ArrowUp size={18} />
            </sakuga-button>
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
