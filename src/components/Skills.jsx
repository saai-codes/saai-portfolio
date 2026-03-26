import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const Skills = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript (ES6+)', level: 85 },
        { name: 'React & Hooks', level: 80 },
      ],
    },
    {
      category: 'Design & Styling',
      skills: [
        { name: 'Tailwind CSS', level: 90 },
        { name: 'UI/UX Design', level: 85 },
        { name: 'Responsive Design', level: 92 },
        { name: 'Framer Motion', level: 80 },
      ],
    },
    {
      category: 'Tools & Platforms',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'Web Performance', level: 80 },
        { name: 'SEO Optimization', level: 85 },
        { name: 'Figma', level: 75 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="section-title"
        >
          <motion.h2 variants={categoryVariants} className="mb-4">
            Skills & Expertise
          </motion.h2>
          <motion.p variants={categoryVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            My technical skills and proficiency levels
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={categoryVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.1 * categoryIndex }}
            >
              <div className="card-glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-8 text-primary-400">
                  {category.category}
                </h3>

                <div className="space-y-8">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={skillVariants}
                      initial="hidden"
                      animate={inView ? 'visible' : 'hidden'}
                      transition={{ delay: 0.1 * categoryIndex + 0.05 * skillIndex }}
                    >
                      {/* Skill Name & Percentage */}
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-semibold text-gray-200">{skill.name}</span>
                        <motion.span
                          className="text-sm font-bold text-primary-400 bg-primary-500/20 px-3 py-1 rounded-full"
                          initial={{ opacity: 0 }}
                          animate={inView ? { opacity: 1 } : { opacity: 0 }}
                          transition={{ delay: 0.1 * categoryIndex + 0.05 * skillIndex + 0.3 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>

                      {/* Skill Bar */}
                      <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{
                            duration: 1.5,
                            delay: 0.1 * categoryIndex + 0.05 * skillIndex + 0.3,
                            ease: 'easeOut',
                          }}
                        />
                      </div>

                      {/* Glow Effect */}
                      {inView && (
                        <div
                          className="absolute top-0 left-0 h-2 bg-primary-500/50 rounded-full blur-sm"
                          style={{
                            width: `${skill.level}%`,
                            animation: `pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
                          }}
                        />
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Overall Skills Summary */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="mt-16 card-glass rounded-2xl p-8 md:p-12"
        >
          <motion.h3 variants={categoryVariants} className="text-2xl font-bold mb-6 text-primary-400">
            Overall Competency
          </motion.h3>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { label: 'Frontend', value: 90 },
              { label: 'Design', value: 88 },
              { label: 'Performance', value: 85 },
              { label: 'Problem Solving', value: 92 },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={categoryVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.1 * index }}
              >
                <div className="text-center">
                  {/* Circular Progress */}
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="transform -rotate-90 w-24 h-24">
                      <circle
                        cx="48"
                        cy="48"
                        r="42"
                        stroke="rgba(255, 255, 255, 0.1)"
                        strokeWidth="4"
                        fill="none"
                      />
                      <motion.circle
                        cx="48"
                        cy="48"
                        r="42"
                        stroke="url(#gradient)"
                        strokeWidth="4"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ strokeDashoffset: 264 }}
                        animate={
                          inView ? { strokeDashoffset: 264 - (264 * item.value) / 100 } : {}
                        }
                        transition={{
                          duration: 1.5,
                          delay: 0.1 * index + 0.3,
                          ease: 'easeOut',
                        }}
                        strokeDasharray="264"
                      />
                      <defs>
                        <linearGradient
                          id="gradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop offset="0%" stopColor="#0ea5e9" />
                          <stop offset="100%" stopColor="#f97316" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xl font-bold text-primary-400">
                        {item.value}%
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 font-semibold">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
