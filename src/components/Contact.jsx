import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    const API_URL = import.meta.env.VITE_API_URL;
    const apiUrl = `${API_URL}/api/contact`;
    console.log('📤 Submitting Contact Form...');
    console.log('📍 API URL:', apiUrl);
    console.log('📦 Form Data:', formData);

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📬 Response Status:', response.status, response.statusText);

      let result;
      const contentType = response.headers.get('content-type');
      if (contentType && contentType.includes('application/json')) {
        result = await response.json();
        console.log('📋 Response JSON:', result);
      } else {
        const textResult = await response.text();
        console.warn('⚠️ Non-JSON Response received:', textResult);
        result = { error: textResult || 'Non-JSON response received' };
      }

      if (response.ok) {
        setStatus({ type: 'success', message: result.message || 'Message sent successfully!' });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ type: 'error', message: result.error || 'Failed to send message.' });
      }
    } catch (error) {
      console.error('❌ Contact Form Submission Error:', error);
      setStatus({ type: 'error', message: `Server error. Please try again later. (${error.message})` });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-6 relative z-10">

        <div className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-[2rem] border border-white/10 glow-border bg-[#05001a]/80 backdrop-blur-2xl">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold glow-text mb-4">Get In <span className="text-purple-400">Touch</span></h2>
            <p className="text-gray-400">Let's work together to build something cinematic.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-12">
            <form className="w-full md:w-2/3 flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full relative group">
                  <input type="text" id="name" value={formData.name} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all peer" placeholder=" " required />
                  <label htmlFor="name" className="absolute left-5 top-4 text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-[#080220] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-[#080220] peer-valid:px-2 pointer-events-none rounded">Name</label>
                </div>
                <div className="w-full relative group">
                  <input type="email" id="email" value={formData.email} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-purple-400 focus:shadow-[0_0_15px_rgba(168,85,247,0.2)] transition-all peer" placeholder=" " required />
                  <label htmlFor="email" className="absolute left-5 top-4 text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-purple-400 peer-focus:bg-[#080220] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-[#080220] peer-valid:px-2 pointer-events-none rounded">Email</label>
                </div>
              </div>
              <div className="w-full relative group">
                <textarea id="message" rows="4" value={formData.message} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)] transition-all peer resize-none" placeholder=" " required></textarea>
                <label htmlFor="message" className="absolute left-5 top-4 text-gray-500 transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-cyan-400 peer-focus:bg-[#080220] peer-focus:px-2 peer-valid:-top-2 peer-valid:text-xs peer-valid:bg-[#080220] peer-valid:px-2 pointer-events-none rounded">Message</label>
              </div>

              {status.message && (
                <div className={`p-4 rounded-xl text-sm ${status.type === 'success' ? 'bg-green-500/10 border border-green-500/50 text-green-400' : 'bg-red-500/10 border border-red-500/50 text-red-400'}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className="w-full md:w-auto self-end px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold tracking-wider transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="w-full md:w-1/3 flex flex-col justify-center gap-8 border-t md:border-t-0 md:border-l border-white/10 pt-8 md:pt-0 md:pl-12">
              <div>
                <h3 className="text-xl font-semibold text-white mb-6">Connect</h3>
                <div className="flex gap-4">
                  <a href="https://github.com/Srinivas-king" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] transition-all transform hover:scale-110">
                    <FaGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/thirumala-srinivas-babu-likki-4202533a7?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#0a66c2] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(10,102,194,0.3)] transition-all transform hover:scale-110">
                    <FaLinkedin size={20} />
                  </a>
                  <a href="https://www.instagram.com/detective_1_s?igsh=YWs5aTYzbG5tcnRi" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-[#1da1f2] hover:bg-white/10 hover:shadow-[0_0_15px_rgba(29,161,242,0.3)] transition-all transform hover:scale-110">
                    <FaInstagram size={20} />
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Direct Contact</h3>
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors group">
                  <span className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center group-hover:bg-cyan-500/20">
                    <FaEnvelope />
                  </span>
                  kingthor803@gmai.com
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
