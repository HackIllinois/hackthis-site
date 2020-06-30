import React from 'react';
import clsx from 'clsx';

import styles from './style.module.scss';

const sectionTitles = ['Welcome', 'Personal Info', 'Race Demographics', 'Education', 'Experience', 'Finish'];

const threeSmallCircles = new Array(3).fill(
  <div className={styles.circle} />
);

const SectionIndicator = ({ sectionIndex, className, setSectionIndex, numSections }) => {
  const isClickable = index => {
    if (sectionIndex === numSections - 1 || index === numSections - 1) {
      return false;
    }
    return index !== sectionIndex;
  };

  const handleClick = index => {
    if (isClickable(index)) {
      setSectionIndex(index);
    }
  };

  return (
    <div className={clsx(styles['section-indicator'], className)}>
      <div className={styles.line} />
      {sectionTitles.map((title, i) => (
        <>
          {i > 0 && threeSmallCircles}
          <div className={clsx(styles.section, isClickable(i) && styles.clickable)} onClick={() => handleClick(i)}>
            <div className={clsx(styles.circle, styles.big, (i === sectionIndex) && styles.filled)} />
            <span className={styles.title}>{title}</span>
          </div>
        </>
      ))}
    </div>
  );
};

export default SectionIndicator;