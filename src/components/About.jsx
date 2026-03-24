import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const skills = [
    { name: 'HTML5', level: 95 },
    { name: 'CSS3', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Tailwind CSS', level: 90 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Git & GitHub', level: 85 },
    { name: 'Web Performance', level: 80 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="section-title"
        >
          <motion.h2 variants={itemVariants} className="mb-4">
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover my journey and expertise
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Bio */}
          <motion.div
            variants={itemVariants}
            className="space-y-6"
          >
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary-400">My Journey</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate web developer with a mission to help businesses and individuals establish a powerful online presence. With expertise in modern web technologies, I create beautiful, fast, and user-friendly websites.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                From startups looking to go online to established businesses seeking a digital transformation, I deliver solutions that combine stunning design with powerful functionality.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Every project I take on is an opportunity to create something extraordinary. I believe in writing clean code, designing with purpose, and delivering results that exceed expectations.
              </p>
            </div>

            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-accent-400">What I Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Build responsive websites for businesses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Create stunning portfolio websites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Design fast and beautiful web experiences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-500 mr-3 mt-1">✓</span>
                  <span>Optimize websites for performance and SEO</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-8 text-primary-400">Skills & Expertise</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.05 * index }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold text-gray-200">{skill.name}</span>
                      <span className="text-primary-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.05 * index + 0.3 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {[
            { number: '50+', label: 'Projects Completed' },
            { number: '30+', label: 'Happy Clients' },
            { number: '3+', label: 'Years Experience' },
            { number: '100%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card-glass rounded-xl p-6 text-center"
            >
              <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
