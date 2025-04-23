import React from 'react';
import styles from '../styles/Projects.module.css';

const Projects = () => {
  return (
    <section className="container py-5" id="projects">
      <h2 className={styles.title}>projects<span>()</span></h2>
      <div className="row">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className={`card h-100 ${styles.card}`}>
            <div className="card-body">
              <h3 className={styles.projectTitle}>Portfolio Website</h3>
              <p className={styles.tech}>HTML | CSS | JavaScript</p>
              <ul className={styles.featureList}>
                <li>Designed and developed a responsive personal portfolio</li>
                <li>Implemented smooth scrolling, mobile-first design, and animations</li>
                <li>Hosted on GitHub Pages</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className={`card h-100 ${styles.card}`}>
            <div className="card-body">
              <h3 className={styles.projectTitle}>To-Do List Web App</h3>
              <p className={styles.tech}>React.js | CSS Modules | Local Storage</p>
              <ul className={styles.featureList}>
                <li>Built a task management app with add, edit, delete, and filter features</li>
                <li>Used React hooks (useState, useEffect) for state and local storage</li>
                <li>Applied conditional rendering and reusable components</li>
                <li>Ensured responsive layout using Flexbox</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;