import React from 'react';
import SelectField from 'components/SelectField';

import styles from './style.module.scss';

const degreeOptions = [
  { label: 'Associates', value: 'Associates' },
  { label: 'Bachelors', value: 'Bachelors' },
  { label: 'Masters', value: 'Masters' },
  { label: 'Phd', value: 'Phd' },
]

const schoolOptions = [
  { label: 'UIUC', value: 'UIUC' },
  { label: 'Purdue', value: 'Purdue' },
]

const majorOptions = [
  { label: 'Computer Science', value: 'Computer Science' },
  { label: 'Computer Engineering', value: 'Computer Engineering' },
]

const Education = () => (
  <section className={styles.education}>
    <h1>Education</h1>
    <SelectField name="degree" options={degreeOptions} placeholder="What degree are you currently pursuring?" />
    <SelectField name="school" options={schoolOptions} placeholder="School (Enter N/A if not applicable)" />
    <SelectField name="major" options={majorOptions} placeholder="Major" />
  </section>
);

export default Education;