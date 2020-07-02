import React, { useState } from 'react';
import clsx from 'clsx';
import { Formik, Form } from 'formik';

import styles from './style.module.scss';
import topLeftBackground from 'assets/registration/top_left.svg';
import bottomRightBackground from 'assets/registration/bottom_right.svg';
import pencil from 'assets/registration/pencil.svg';
import desk from 'assets/registration/desk.svg';
import arrowNext from 'assets/registration/arrow_next.svg';

import SectionIndicator from './SectionIndicator';
import Welcome from './sections/Welcome';
import PersonalInfo from "./sections/PersonalInfo";
import RaceDemographics from "./sections/RaceDemographics";
import Education from './sections/Education';
import Experience from './sections/Experience';
import Finish from './sections/Finish';

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

const sections = [
  Welcome,
  PersonalInfo,
  RaceDemographics,
  Education,
  Experience,
  Finish,
];

const Registration = () => {
  const [sectionIndex, setSectionIndex] = useState(0);

  const CurrentSection = sections[sectionIndex];

  const NextButton = ({ className, style }) => {
    if (sectionIndex < sections.length - 2) {
      return (
        <button
          type="button"
          className={clsx(styles.button, styles.right, className)}
          style={style}
          onClick={() => setSectionIndex(sectionIndex + 1)}
        >
          NEXT
          <img className={styles['arrow-icon']} src={arrowNext} alt=">" />
        </button>
      );
    } else if (sectionIndex === sections.length - 2) {
      return (
        <button type="submit" className={clsx(styles.button, styles.right, className)} style={style}>
          SUBMIT
        </button>
      );
    }
    return false;
  }

  const BackButton = ({ className , style }) => {
    const hidden = sectionIndex === 0 || sectionIndex === sections.length - 1;
    return (
      <button
        type="button"
        className={clsx(styles.button, styles.left, hidden && styles.hidden, className)}
        style={style}
        onClick={() => setSectionIndex(sectionIndex - 1)}
      >
        <img className={styles['arrow-icon']} src={arrowNext} alt="<" />
        BACK
      </button>
    )
  }

  const Buttons = ({ className }) => (
    <div className={clsx(styles.buttons, className)}>
      <BackButton />
      <NextButton />
    </div>
  )

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

      <SectionIndicator
        className={styles['section-indicator']}
        sectionIndex={sectionIndex}
        setSectionIndex={setSectionIndex}
        numSections={sections.length}
      />

      <Formik
        initialValues={{}}
        onSubmit={() => {
          setSectionIndex(sectionIndex + 1);
        }}
      >
        {() => (
          <div className={styles['section-container']}>
            <Form>
              {CurrentSection && <CurrentSection Buttons={Buttons} />}
            </Form>
          </div>
        )}
      </Formik>

      <div className={styles['bottom-decoration-filler']} />
    </div>
  )
}

export default Registration;