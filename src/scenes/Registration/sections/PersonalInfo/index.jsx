import React from 'react';

import styles from './style.module.scss';
import TextField from 'components/form/TextField';
import SelectField from 'components/form/SelectField';
import states from 'data/states.json';
import countries from 'data/countries.json';

const locationOptions = states
  .concat(countries)
  .filter(place => place !== 'United States') // removing US because we want people in the US to pick a state
  .concat('Other')
  .map(place => ({ value: place, label: place }));

const genderOptions = [
  { label: 'Male', value: 'Male' },
  { label: 'Female', value: 'Female' },
  { label: 'Non-Binary', value: 'Non-Binary' },
  { label: 'Prefer Not to Answer', value: 'Prefer Not to Answer' },
]

const PersonalInfo = ({ Buttons }) => (
  <section className={styles['personal-info']}>
    <h1 className={styles.title}>Personal Information</h1>
    <div className={styles.content}>
      <TextField name="name" placeholder="Full Name *" />    
      <TextField name="email" type="email" placeholder="Primary Email Address *" />
      <SelectField
        name="location"
        options={locationOptions}
        placeholder="Where are you located this summer? *"
      />  
      <SelectField
        name="gender"
        options={genderOptions}
        placeholder="Gender"
        creatable
      />
    </div>

    <Buttons className={styles.buttons} />
  </section>
);

export default PersonalInfo;
