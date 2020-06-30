import React from 'react';
import SelectField from 'components/SelectField';

import styles from './style.module.scss';
import majors from 'data/majors.json';
import schools from 'data/schools.json';

const degreeOptions = [
  'Associates Degree',
  'Bachelor’s Degree',
  'Master’s Degree',
  'PhD',
  'Other',
].map(degree => ({ value: degree, label: degree }));

const schoolOptions = schools.map(school => ({ value: school, label: school }));

const firstMajors = ['Computer Science', 'Computer Engineering', 'Electrical Engineering'];
const remainingMajors = majors.filter(major => !firstMajors.includes(major));
const majorOptions = firstMajors
  .concat(remainingMajors)
  .concat('Other')
  .map(major => ({ value: major, label: major }));


const Education = () => (
  <section className={styles.education}>
    <h1>Education</h1>
    <SelectField name="degree" options={degreeOptions} placeholder="What degree are you currently pursuring?" />
    <SelectField name="school" options={schoolOptions} placeholder="School (Enter N/A if not applicable)" creatable />
    <SelectField name="major" options={majorOptions} placeholder="Major" creatable />
  </section>
);

export default Education;