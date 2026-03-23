import { useState } from 'react';
import { FaEnvelope, FaPhone, FaLinkedinIn, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xpzvqvoj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }

    setLoading(false);
  };

  return (
    <section className="contact section" id="contact">
      <div className="bg-glow bg-glow-1"></div>
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">Feel free to reach out for opportunities or just to say hello!</p>

        <div className="contact-content reveal">
          <div className="contact-info">
            <p className="contact-info-text">
              I'm currently looking for new opportunities. Whether you have a question 
              or just want to say hi, I'll do my best to get back to you!
            </p>

            <a href="mailto:ashishtikhile2003@gmail.com" className="contact-item">
              <div className="contact-item-icon"><FaEnvelope /></div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">ashishtikhile2003@gmail.com</div>
              </div>
            </a>

            <a href="tel:+919356266176" className="contact-item">
              <div className="contact-item-icon"><FaPhone /></div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">+91 9356266176</div>
              </div>
            </a>

            <a href="https://linkedin.com/in/ashishtikhile" target="_blank" rel="noopener noreferrer" className="contact-item">
              <div className="contact-item-icon"><FaLinkedinIn /></div>
              <div>
                <div className="contact-item-label">LinkedIn</div>
                <div className="contact-item-value">linkedin.com/in/ashishtikhile</div>
              </div>
            </a>

            <div className="contact-item">
              <div className="contact-item-icon"><FaMapMarkerAlt /></div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-value">Pune, Maharashtra, India</div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn-primary form-submit" disabled={loading}>
              {loading ? 'Sending...' : <>Send Message <FaPaperPlane /></>}
            </button>

            {status === 'success' && (
              <div className="form-status success">✅ Message sent successfully! I'll get back to you soon.</div>
            )}
            {status === 'error' && (
              <div className="form-status error">❌ Something went wrong. Please try again or email me directly.</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
