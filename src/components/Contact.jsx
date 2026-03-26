import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { FiMail, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const response = await fetch("https://formspree.io/f/xreyykba", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  });

  if (response.ok) {
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } else {
    alert("Something went wrong.");
  }
};

  const socialLinks = [
    {
      icon: FiMail,
      url: 'mailto:shivsaai2010@gmail.com',
      label: 'Email',
      color: 'hover:text-red-500',
    },
    {
      icon: FiGithub,
      url: 'https://github.com',
      label: 'GitHub',
      color: 'hover:text-gray-400',
    },
    {
      icon: FiLinkedin,
      url: 'https://linkedin.com',
      label: 'LinkedIn',
      color: 'hover:text-blue-500',
    },
    {
      icon: FiInstagram,
      url: 'https://instagram.com',
      label: 'Instagram',
      color: 'hover:text-pink-500',
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
    <section id="contact" className="relative py-20 md:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="section-title"
        >
          <motion.h2 variants={itemVariants} className="mb-4">
            Get In Touch
          </motion.h2>
          <motion.p variants={itemVariants} className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's work together!
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div variants={itemVariants} initial="hidden" animate={inView ? 'visible' : 'hidden'}>
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-primary-400">Send me a message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <motion.input
                    whileFocus={{ scale: 1.02 }}
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <motion.textarea
                    whileFocus={{ scale: 1.02 }}
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg glass focus:outline-none focus:ring-2 focus:ring-primary-500 focus:bg-white/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full btn-primary font-semibold transition-all duration-300"
                >
                  {submitted ? 'Message Sent! ✓' : 'Send Message'}
                </motion.button>
              </form>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-300 text-center"
                >
                  Thanks for reaching out! I'll get back to you soon.
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6"
          >
            {/* Email Card */}
            <div className="card-glass rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FiMail className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <a
                    href="mailto:shivsaai2010@gmail.com"
                    className="text-primary-400 hover:text-primary-300 transition-colors break-all"
                  >
                    shivsaai2010@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Business Websites Card */}
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-xl font-bold text-accent-400 mb-4">Available For</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="text-primary-500">→</span>
                  <span>Freelance Website Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary-500">→</span>
                  <span>Business Website Creation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary-500">→</span>
                  <span>E-Commerce Solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary-500">→</span>
                  <span>Portfolio & Landing Pages</span>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="card-glass rounded-2xl p-8">
              <h3 className="text-lg font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      whileTap={{ scale: 0.9 }}
                      className={`w-12 h-12 glass rounded-lg flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color}`}
                      aria-label={social.label}
                    >
                      <Icon className="w-6 h-6" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* CTA Card */}
            <div className="card-glass rounded-2xl p-8 bg-gradient-to-br from-primary-500/10 to-accent-500/10 border-primary-400/30">
              <p className="text-gray-300 mb-4">
                🚀 <span className="font-semibold text-white">Let's build something amazing together!</span>
              </p>
              <p className="text-sm text-gray-400">
                Whether you need a brand new website, want to upgrade your online presence, or have a custom project in mind, I'm here to help bring your vision to life.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
