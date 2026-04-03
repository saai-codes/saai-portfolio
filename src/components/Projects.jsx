import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Modern e-commerce website with product catalog, shopping cart, and secure payment integration.',
      image: '/images/e-commerce.jpg',
      tags: ['React', 'Node.js', 'Stripe', 'Tailwind CSS'],
      liveUrl: 'https://e-commerce-2-0-theta.vercel.app/',
      githubUrl: 'https://github.com/saai-codes/shopping-website/blob/main/index.html',
    },
    {
      id: 2,
      title: 'Business Portfolio',
      description: 'Professional portfolio website for a creative agency showcasing their work and services.',
      image: 'images/business-port.jpg',
      tags: ['React', 'Framer Motion', 'Tailwind', 'SEO'],
      liveUrl: 'https://saai-codes.github.io/srm-web/',
      githubUrl: 'https://github.com/saai-codes/srm-web',
    },
    {
      id: 3,
      title: 'Startup Landing Page',
      description: 'High-converting landing page for a tech startup with smooth animations and CTA optimization.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop',
      tags: ['HTML', 'CSS', 'JavaScript', 'Performance'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Restaurant Website',
      description: 'Restaurant website with menu, reservations, and online ordering system.',
      image: '/images/restaurant.jpg',
      tags: ['React', 'Firebase', 'Payment API', 'Responsive'],
      liveUrl: 'https://saai-codes.github.io/restaurant-website/',
      githubUrl: 'https://github.com/saai-codes/portfolio-website/tree/main/vedant2',
    },
    {
      id: 5,
      title: 'Personal Blog',
      description: 'Beautiful personal blog with dynamic content, categories, and comment system.',
      image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
      tags: ['Next.js', 'Markdown', 'SEO', 'Analytics'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'SaaS Dashboard',
      description: 'Comprehensive admin dashboard with analytics, user management, and data visualization.',
      image: '/images/Saas_image.jpg',
      tags: ['React', 'Charts.js', 'APIs', 'Authentication'],
      liveUrl: 'https://saas-website-weld.vercel.app/',
      githubUrl: 'https://github.com/saai-codes/Saas-website',
    },
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
    <section id="projects" className="relative py-20 md:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="section-title"
        >
          <motion.h2 variants={itemVariants} className="mb-4">
            Featured Projects
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my best work and creative solutions
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.05 * index }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group cursor-pointer"
            >
              <div className="card-glass rounded-2xl overflow-hidden h-full hover:border-primary-400/50 hover:shadow-glow">
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-900/50 to-accent-900/50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink className="w-6 h-6 text-white" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 bg-accent-500 rounded-full flex items-center justify-center hover:bg-accent-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub className="w-6 h-6 text-white" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 border border-primary-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Projects CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">Want to see more?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center"
          >
            Let's Work Together
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
