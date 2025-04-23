import React from 'react';
import styles from '../styles/Education.module.css';

const Education = () => {
  return (
    <section className="container py-5" id="education">
      <h2 className={styles.heading}>education()<span className={styles.bracket}>;</span></h2>
      <div className="row">
        <div className="col-12">
          <div className={`card mb-3 ${styles.eduItem}`}>
            <div className="card-body">
              <h3>B.Tech Petroleum Engineering</h3>
              <p className={styles.institution}>
                College of Engineering and Technology - Anna University, Coimbatore, Tamil Nadu
              </p>
              <p className={styles.detail}>JCT - 11/2020</p>
              <p className={styles.grade}>CGPA: <span>6.64 (First Class)</span></p>
            </div>
          </div>
          <div className={`card mb-3 ${styles.eduItem}`}>
            <div className="card-body">
              <h3>Higher Secondary Certification</h3>
              <p className={styles.institution}>
                Syed Ammal Higher Secondary School, Ramanathapuram, Tamil Nadu
              </p>
              <p className={styles.detail}>03/2016</p>
              <p className={styles.grade}>Percentage: <span>73.58%</span></p>
            </div>
          </div>
          <div className={`card mb-3 ${styles.eduItem}`}>
            <div className="card-body">
              <h3>Secondary School Leaving Certificate</h3>
              <p className={styles.institution}>
                St. Joseph High School, Ramanathapuram, Tamil Nadu
              </p>
              <p className={styles.detail}>03/2014</p>
              <p className={styles.grade}>Percentage: <span>87.2%</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
