import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      number: '01',
      title: 'Frontend',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'],
    },
    {
      number: '02',
      title: 'Backend',
      skills: ['Node.js', 'Express.js'],
    },
    {
      number: '03',
      title: 'Database',
      skills: ['MongoDB', 'MySQL'],
    },
    {
      number: '04',
      title: 'Design',
      skills: ['Figma', 'Wireframing', 'Prototyping', 'UI/UX Design'],
    },
    {
      number: '05',
      title: 'Other',
      skills: ['Git', 'GitHub', 'MS Word', 'Excel'],
    },
  ];

  return (
    <section id="skills" ref={ref} className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-sm font-medium uppercase tracking-[0.28em] text-[#777777]"
        >
          02 / Skills
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.number}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.08 }}
              className="border border-[#d9d9d9] bg-white p-8 transition-colors hover:border-black"
            >
              <div className="mb-6 flex items-start justify-between">
                <div className="text-5xl font-bold tracking-[-0.08em] text-black/5">{category.number}</div>
                <div className="text-right">
                  <div className="mb-2 text-[10px] font-medium uppercase tracking-[0.24em] text-[#777777]">Category</div>
                  <div className="text-xl font-bold tracking-[-0.04em] text-black">{category.title}</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 12 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.35, delay: categoryIndex * 0.08 + skillIndex * 0.05 }}
                    className="border border-[#d9d9d9] bg-[#f4f4f4] px-3 py-2 text-sm font-medium text-black"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
