import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Copy, Check } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+8801735069723",
      href: "tel:+8801735069723",
      copyable: true,
      type: 'phone' as const
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "zaman6545@gmail.com",
      href: "mailto:zaman6545@gmail.com",
      copyable: true,
      type: 'email' as const
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Dhaka, Bangladesh",
      href: "https://maps.google.com/?q=Dhaka+Bangladesh",
      external: true
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: 'https://github.com/zamansheikh',
      label: 'GitHub',
      color: 'hover:text-white hover:bg-white/10'
    },
    {
      icon: <Linkedin size={24} />,
      url: 'https://www.linkedin.com/in/zamansheikh/',
      label: 'LinkedIn',
      color: 'hover:text-blue-400 hover:bg-blue-400/10'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text-animated">
            Get in Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-hover rounded-2xl p-6 text-center group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 mb-4 group-hover:glow transition-all">
                <div className="text-cyan-400">{info.icon}</div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">{info.label}</h3>
              <a
                href={info.href}
                target={info.external ? "_blank" : undefined}
                rel={info.external ? "noopener noreferrer" : undefined}
                className="text-gray-300 hover:text-cyan-400 transition-colors text-sm break-all inline-flex items-center gap-2 flex-wrap justify-center"
              >
                {info.value}
                {info.external && <ExternalLink size={14} />}
              </a>
              {info.copyable && (
                <button
                  onClick={() => copyToClipboard(info.value, info.type)}
                  className="mt-3 inline-flex items-center gap-2 text-xs text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {(info.type === 'email' ? copiedEmail : copiedPhone) ? (
                    <>
                      <Check size={14} /> Copied!
                    </>
                  ) : (
                    <>
                      <Copy size={14} /> Copy
                    </>
                  )}
                </button>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-gray-400">Connect with me on social media</p>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className={`glass-card p-4 rounded-full text-gray-300 transition-all duration-300 hover:scale-110 ${link.color}`}
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;