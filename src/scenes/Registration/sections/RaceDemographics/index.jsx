import React from 'react';

import styles from './style.module.scss';
import CheckboxField from 'components/CheckboxField';

const raceOptions = [
  { label: 'American Indian or Alaskan Native', value: 'American Indian or Alaskan Native' },
  { label: 'Asian', value: 'Asian' },
  { label: 'Black or African American', value: 'Black or African American' },
  { label: 'Native Hawaiian or Pacific Islander', value: 'Native Hawaiian or Pacific Islander' },
  { label: 'Hispanic or Latino or Spanish Origin', value: 'Hispanic or Latino or Spanish Origin' },
  { label: 'White', value: 'White' },
  { label: 'Other', value: 'Other', isOther: true },
  { label: 'I’m optional! :) (Prefer not to answer)', value: 'Prefer Not to Say' },
]

const RaceDemographics = () => (
  <section className={styles['race-demographics']}>
    <h1>Race Demographics &nbsp;(Check one or more!)</h1>
    <div className={styles.container}>
      <div className={styles.left}>
        <CheckboxField
          name="race"
          options={raceOptions}
        />
      </div>
      <div className={styles.right}>
        <p>
          <i><b>Note:</b> This is a purely optional question! :) In light of recent events, we’re collecting this
          information in order to determine what our current attendee demographics are and how we can work on
          increasing diversity! Don’t forget that it’s purely optional and won’t affect anything!</i>
        </p>
      </div>
    </div>
    
  </section>
);

export default RaceDemographics;