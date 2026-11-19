import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, MapPin, GitBranch } from 'lucide-react';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState({ type: 'idle', text: '' });

  const handleInput = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormStatus({ type: 'sending', text: 'Sending your message...' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) throw new Error(data.error || 'Unable to send your message.');

      setForm({ name: '', email: '', subject: '', message: '' });
      setFormStatus({ type: 'success', text: data.message || 'Thanks! Your message has been sent.' });
    } catch (error) {
      setFormStatus({ type: 'error', text: error.message });
    }
  };

  const primaryButtonStyle = {
    '--sk-card': '#ffffff',
    '--sk-ink': '#000000',
    '--sk-btn-line': '#000000',
    '--sk-soft': '#d9d9d9',
    '--sk-sh': '6px 7px 0 #d9d9d9',
    '--sk-r': '14px',
    '--sk-bw': '2px',
    '--sk-acc': '#ff5fa8',
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muke8122@gmail.com',
      link: 'https://mail.google.com/mail/?view=cm&fs=1&to=muke8122@gmail.com',
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <sakuga-button
                  style={primaryButtonStyle}
                  onClick={(event) => {
                    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=muke8122@gmail.com', '_blank', 'noopener,noreferrer');
                    event.currentTarget.done?.();
                  }}
                >
                  Email Me
                </sakuga-button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <sakuga-button
                  variant="secondary"
                  style={{
                    ...primaryButtonStyle,
                    '--sk-card': '#111111',
                    '--sk-ink': '#ffffff',
                    '--sk-btn-line': '#ffffff',
                    '--sk-alt-line': '#ffffff',
                    '--sk-sh': '6px 7px 0 rgba(255,255,255,0.16)',
                    '--sk-alt-sh': '6px 7px 0 rgba(255,255,255,0.16)',
                  }}
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
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col justify-center"
          >
            <div className="border border-white/20 bg-[#0d0d0d] p-6 sm:p-8">
              <div className="mb-7 flex items-end justify-between border-b border-white/15 pb-5">
                <div>
                  <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/60">New message</div>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">Let’s talk.</h3>
                </div>
                <span className="h-3 w-3 bg-[#ff5fa8]" aria-hidden="true" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                    Name
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleInput}
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-2 w-full border border-white/20 bg-black px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                    />
                  </label>
                  <label className="block text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                    Email
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInput}
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="mt-2 w-full border border-white/20 bg-black px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                    />
                  </label>
                </div>

                <label className="block text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                  Subject
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={handleInput}
                    placeholder="Project, role, or idea"
                    className="mt-2 w-full border border-white/20 bg-black px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                  />
                </label>

                <label className="block text-[10px] font-medium uppercase tracking-[0.18em] text-white/60">
                  Message
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleInput}
                    required
                    rows={5}
                    placeholder="Tell me what you’re building..."
                    className="mt-2 w-full resize-y border border-white/20 bg-black px-4 py-3 text-sm normal-case tracking-normal text-white outline-none transition-colors placeholder:text-white/30 focus:border-white"
                  />
                </label>

                <button
                  type="submit"
                  disabled={formStatus.type === 'sending'}
                  className="w-full border-2 border-white bg-white px-5 py-4 text-xs font-bold uppercase tracking-[0.18em] text-black transition-all duration-300 hover:bg-black hover:text-white disabled:cursor-wait disabled:opacity-60"
                >
                  {formStatus.type === 'sending' ? 'Sending...' : 'Send Message'}
                </button>

                {formStatus.text && (
                  <p
                    role="status"
                    className={`border px-4 py-3 text-sm ${formStatus.type === 'success' ? 'border-white/30 bg-white/10 text-white' : 'border-red-400/40 bg-red-400/10 text-red-100'}`}
                  >
                    {formStatus.text}
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
