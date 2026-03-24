import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiCode, FiShoppingCart, FiPenTool } from 'react-icons/fi';

const Services = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      icon: FiCode,
      title: 'Website Development',
      description: 'Modern, responsive websites built with the latest technologies. Fast loading, mobile-friendly, and optimized for performance.',
      features: ['Responsive Design', 'Fast Loading', 'SEO Optimized', 'Mobile First'],
    },
    {
      icon: FiShoppingCart,
      title: 'Business Websites',
      description: 'Complete web solutions for shops, startups, and small businesses. Help your business establish a strong online presence.',
      features: ['E-commerce Ready', 'Lead Generation', 'Brand Building', 'Business Growth'],
    },
    {
      icon: FiPenTool,
      title: 'Custom Design',
      description: 'Beautiful, unique designs for portfolio websites, landing pages, and custom web projects tailored to your needs.',
      features: ['Portfolio Sites', 'Landing Pages', 'UI/UX Design', 'Custom Solutions'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="services" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="section-title"
        >
          <motion.h2 variants={itemVariants} className="mb-4">
            Services I Offer
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive web development and design solutions for your business
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ delay: 0.1 * index }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="card-glass rounded-2xl p-8 h-full hover:border-primary-400/50 hover:shadow-glow">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center space-x-2 text-gray-300">
                        <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.a
                    href="#contact"
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center text-primary-400 font-semibold group-hover:text-accent-400 transition-colors"
                  >
                    Learn More →
                  </motion.a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 mb-6">Ready to get started?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary inline-flex items-center"
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
