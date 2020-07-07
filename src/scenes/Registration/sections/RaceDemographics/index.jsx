import React from 'react';

import styles from './style.module.scss';
import CheckboxField from 'components/form/CheckboxField';

const raceOptions = [
  { label: 'American Indian or Alaskan Native', value: 'American Indian or Alaskan Native' },
  { label: 'Asian', value: 'Asian' },
  { label: 'Black or African American', value: 'Black or African American' },
  { label: 'Native Hawaiian or Pacific Islander', value: 'Native Hawaiian or Pacific Islander' },
  { label: 'Hispanic or Latino or Spanish Origin', value: 'Hispanic or Latino or Spanish Origin' },
  { label: 'White', value: 'White' },
  { label: 'Other', value: 'Other', isOther: true },
  { label: 'Prefer Not to Answer', value: 'Prefer Not to Answer' },
]

const RaceDemographics = ({ Buttons }) => (
  <section className={styles['race-demographics']}>
    <h1 className={styles.title}>Race Demographics  <span className={styles.small}>(Check one or more)</span></h1>
    <div className={styles.content}>
      <div className={styles['checkbox-container']}>
        <CheckboxField
          name="race"
          options={raceOptions}
          className={styles.checkboxes}
        />
      </div>
      <div className={styles.note}>
        <p>
          <i><b>Note:</b> This is a purely optional question! In light of recent events, we’re collecting this
          information in order to determine what our current attendee demographics are and how we can work on
          increasing diversity! Don’t forget that it’s purely optional and won’t affect anything!</i>
        </p>
      </div>
    </div>

    <Buttons className={styles.buttons} />
  </section>
);

export default RaceDemographics;