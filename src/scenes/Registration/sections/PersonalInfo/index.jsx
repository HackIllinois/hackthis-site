import React from 'react';

import styles from './style.module.scss';
import TextField from 'components/TextField';
import SelectField from 'components/SelectField';
import states from 'data/states.json';
import countries from 'data/countries.json';

const locationOptions = states
  .concat(countries)
  .filter(place => place !== 'United States') // removing US because we want people in the US to pick a state
  .concat('Other')
  .map(place => ({ value: place, label: place }));

const timeZoneOptions = [
  { label: '-4:00 New York City ET', value: '-5' },
  { label: '-5:00 Chicago CT', value: '-5' },
  { label: '-7:00 San Francisco PT', value: '-5' },
]

const genderOptions = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Non-Binary', value: 'Non-Binary' },
  { label: 'Prefer Not to Disclose', value: 'Prefer Not to Disclose' },
]

const PersonalInfo = ({ Buttons }) => (
  <section className={styles['personal-info']}>
    <h1>Personal Information</h1>
    <div className={styles.content}>
      <TextField name="name" placeholder="Name" />
      <TextField name="email" type="email" placeholder="Primary Email Address" />
      <SelectField
        name="location"
        options={locationOptions}
        placeholder="Where are you located this summer?"
      />
      {/* <SelectField
        name="timezone"
        options={timeZoneOptions}
        placeholder="What time zone are you located in?"
      /> */}
      <SelectField
        name="gender"
        options={genderOptions}
        placeholder="Gender (optional)"
      />
    </div>

    <Buttons className={styles.buttons}/>
  </section>
);

export default PersonalInfo;
