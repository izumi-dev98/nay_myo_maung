import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLocationDot, faPaperPlane, faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      await emailjs.send(
        'service_3h1enti', // service key
        'template_8bbx3j7', // template key
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        'YVG7_tm1BO8q4GZma' // Public Key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const socialLinks = [
    { icon: faLinkedin, url: 'www.linkedin.com/in/nay-myo-maung-dev', label: 'LinkedIn' },
    { icon: faGithub, url: 'https://github.com/izumi-dev98', label: 'GitHub' },
    
  ];

  return (
    <section id="contact" className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-text-primary">
              Let's Connect
            </h3>
            <p className="text-text-secondary leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to contact me through any of the platforms below.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faEnvelope} className="text-accent text-xl" />
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Email</p>
                  <a
                    href="mailto:naymyomaung.dev@gmail.com"
                    className="text-text-primary hover:text-accent transition-colors"
                  >
                    naymyomaung.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center">
                  <FontAwesomeIcon icon={faLocationDot} className="text-accent text-xl" />
                </div>
                <div>
                  <p className="text-text-secondary text-sm">Location</p>
                  <p className="text-text-primary">Taunggyi, Myanmar</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="text-text-secondary mb-4">Follow me on</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-xl" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-secondary rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-text-primary mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-text-secondary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-primary border border-text-secondary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-primary border border-text-secondary/20 rounded-lg text-text-primary placeholder-text-secondary/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${
                  status === 'success'
                    ? 'bg-success text-white'
                    : 'bg-accent text-text-primary hover:bg-accent-hover'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === 'submitting' && (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                )}
                {status === 'success' ? (
                  <>
                    <FontAwesomeIcon icon={faCheck} />
                    Message Sent!
                  </>
                ) : status === 'error' ? (
                  <>
                    <FontAwesomeIcon icon={faTriangleExclamation} />
                    Try Again
                  </>
                ) : (
                  <>
                    Send Message
                    <FontAwesomeIcon icon={faPaperPlane} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <p className="text-success text-center text-sm mt-4">
                  Thank you! Your message has been sent successfully.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
