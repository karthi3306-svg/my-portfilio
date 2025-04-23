import React from 'react';
import styles from '../styles/Skills.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiJquery, SiMysql, SiPostman } from 'react-icons/si';


const Skills = () => {
  return (
    <section className="container py-5" id="skills">
      <h2 className={styles.title}>skills()<span className={styles.cursor}>|</span></h2>
      <div className="row">
        <div className="col-12 mb-4">
          <h3>Core Programming & Markup</h3>
          <div className={`d-flex flex-wrap justify-content-center gap-3 ${styles.icons}`}>
            <FaHtml5 title="HTML" />
            <FaCss3Alt title="CSS" />
            <FaJs title="JavaScript" />
          </div>
        </div>
        <div className="col-12 mb-4">
          <h3>Frameworks & Libraries</h3>
          <div className={`d-flex flex-wrap justify-content-center gap-3 ${styles.icons}`}>
            <FaReact title="ReactJS" />
            <FaBootstrap title="Bootstrap" />
            <SiTailwindcss title="Tailwind CSS" />
            <SiJquery title="jQuery" />
            <span className={styles.textIcon}>AJAX</span>
          </div>
        </div>
        <div className="col-12 mb-4">
          <h3>Database</h3>
          <div className={`d-flex flex-wrap justify-content-center gap-3 ${styles.icons}`}>
            <SiMysql title="SQL" />
          </div>
        </div>
        <div className="col-12 mb-4">
          <h3>Tools & Methodologies</h3>
          <div className={`d-flex flex-wrap justify-content-center gap-3 ${styles.icons}`}>
            <SiPostman title="RESTful API" />
            <span className={styles.textIcon}>Agile</span>
            <FaGithub title="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
