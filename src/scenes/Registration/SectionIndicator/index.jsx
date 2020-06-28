import React from 'react';
import clsx from 'clsx';

import styles from './style.module.scss';

const sectionTitles = ['Welcome', 'Personal Info', 'Race Demographics', 'Education', 'Experience', 'Finish'];

const threeSmallCircles = new Array(3).fill(
  <div className={styles.circle} />
);

const SectionIndicator = ({ currentSection, className }) => (
  <div className={clsx(styles['section-indicator'], className)}>
    <div className={styles.line} />
    {sectionTitles.map((title, i) => (
      <>
        {i > 0 && threeSmallCircles}
        <div className={styles.section}>
          <div className={clsx(styles.circle, styles.big, (i === currentSection) && styles.filled)} />
          <span className={styles.title}>{title}</span>
        </div>
      </>
    ))}
  </div>
);

export default SectionIndicator;