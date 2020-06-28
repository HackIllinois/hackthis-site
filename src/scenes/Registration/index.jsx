import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './style.module.scss';
import topLeftBackground from 'assets/registration/top_left.svg';
import bottomRightBackground from 'assets/registration/bottom_right.svg';
import pencil from 'assets/registration/pencil.svg';
import desk from 'assets/registration/desk.svg';

import SectionIndicator from './SectionIndicator';

const topLeftDots = [
  { top: -8, left: 142, width: 29, height: 29 },
  { top: 21, left: 245, width: 24, height: 8 },
  { top: 81, left: 81, width: 10, height: 10 },
  { top: 206, left: -48, width: 74, height: 18 },
  { top: 279, left: 53, width: 15, height: 15 },
];

const bottomRightDots = [
  { bottom: 320, right: -4, width: 17, height: 17 },
  { bottom: 192, right: 281, width: 20, height: 20 },
  { bottom: 162, right: 34, width: 8, height: 8 },
  { bottom: 65, right: 340, width: 10, height: 10 },
  { bottom: 27, right: 436, width: 68, height: 23 },
  { bottom: -8, right: 132, width: 28, height: 28 },
]

const sections = [];

const Registration = () => {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <div className={styles.registration}>
      <div className={clsx(styles['top-left'], styles['decorations'])}>
        <img className={styles.background} src={topLeftBackground} alt="" />
        <img className={styles.decoration} src={pencil} style={{ top: 115, left: 30 }} alt="" />

        {topLeftDots.map(style => (
          <div className={styles.dot} style={style} key={Object.values(style).join(' ')} />
        ))}
      </div>

      <div className={clsx(styles['bottom-right'], styles['decorations'])}>
        <img className={styles.background} src={bottomRightBackground} alt="" />
        <img className={styles.decoration} src={desk} style={{ right: 63, bottom: 72 }} alt="" />

        {bottomRightDots.map(style => (
          <div className={styles.dot} style={style} key={Object.values(style).join(' ')} />
        ))}
      </div>

      <SectionIndicator className={styles['section-indicator']} currentSection={currentSection}/>

      {sections[currentSection]}
    </div>
  )
}

export default Registration;