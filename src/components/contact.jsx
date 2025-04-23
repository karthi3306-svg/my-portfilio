import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log({
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    });
    e.target.reset();
  };

  return (
    <section id="contact" className="container py-5 text-center">
      <h2 className={styles.title}>contact()<span>()</span></h2>
      <p className={styles.subtitle}>Let’s connect and build something cool!</p>
      <form className={`col-12 col-md-6 mx-auto ${styles.form}`} onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" name="name" className={`form-control ${styles.input}`} placeholder="Your Name" required />
        </div>
        <div className="mb-3">
          <input type="email" name="email" className={`form-control ${styles.input}`} placeholder="Your Email" required />
        </div>
        <div className="mb-3">
          <textarea name="message" className={`form-control ${styles.textarea}`} placeholder="Your Message" rows="5" required />
        </div>
        <button type="submit" className={styles.button}>Send</button>
      </form>
    </section>
  );
};

export default Contact;