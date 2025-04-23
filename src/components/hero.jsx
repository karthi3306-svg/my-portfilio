import React from 'react';
import styles from '../styles/Hero.module.css';
import profileImg from '../assets/karthi-photo.jpg.jpg'; // Verify this path matches your file

const Hero = () => {
  return (
    <section className={`container py-5 ${styles.heroSection}`} id="home">
      <div className="row align-items-stretch">
        <div className="col-12 col-md-6 text-md-start text-center">
          <div className={styles.stickyHeader}>
            <h3 className={styles.heading}>Hello, I am</h3>
            <h1 className={styles.title}>{'< Karthick />'}</h1>
          </div>
          <h2 className={styles.subtitle}>Front-End Developer</h2>
          <div className={styles.description}>
            <p>
              Develop responsive web interfaces using HTML, CSS, and modern JavaScript frameworks.<br />
              Collaborate with UX/UI designers to implement visually appealing and user-friendly designs.<br />
              Participate in agile sprints, contributing to daily stand-ups and sprint planning sessions.<br />
              Utilize version control systems like Git for efficient code management and collaboration.<br />
              Integrate RESTful APIs to enhance web application functionality and data interaction.<br />
              Conduct cross-browser testing to ensure consistent performance across diverse platforms.<br />
              Engage in continuous learning to stay updated with emerging front-end technologies.<br />
              Implement automated testing to ensure code quality and reduce manual testing efforts.<br />
              Work closely with back-end developers to optimize application performance and scalability.<br />
              Contribute to code reviews, providing constructive feedback to peers and improving code quality.<br />
              Assist in creating documentation for front-end processes and best practices.
            </p>
            <p><strong>2</strong> Projects Completed</p>
          </div>
          <div className={styles.badges}>
            <span className={styles.badge}>React.js</span>
            <span className={styles.badge}>JavaScript</span>
            <span className={styles.badge}>CSS Modules</span>
          </div>
          <a href="https://github.com/karthi3306-svg/my-portfilio.git" target="_blank" rel="noopener noreferrer" className={styles.githubLink}>
            View Source Code on GitHub
          </a>
          <a href="/karthick-resume.pdf" download className={styles.resumeBtn}>Download Resume</a>
        </div>
        <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end align-items-end">
          {profileImg ? (
            <img src={profileImg} alt="Profile" className={`img-fluid w-100 h-auto ${styles.profileImg}`} />
          ) : (
            <div className={styles.placeholder}>Image not found</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;