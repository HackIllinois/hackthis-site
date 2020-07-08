import React from 'react';
import SelectField from 'components/form/SelectField';

import styles from './style.module.scss';
import majors from 'data/majors.json';
import schools from 'data/schools.json';

const degreeOptions = [
  { value: 'ASSOCIATES', label: 'Associates Degree' },
  { value: 'BACHELORS', label: 'Bachelor’s Degree' },
  { value: 'MASTERS', label: 'Master’s Degree' },
  { value: 'PHD', label: 'PhD' },
  { value: 'GRADUATED', label: 'Graduated' },
  { value: 'OTHER', label: 'Other' },
];

const graduationYearOptions = [];
for (let i = 2030; i >= 1900; i--) {
  graduationYearOptions.push({ value: i, label: i });
}
graduationYearOptions.push({ value: 0, label: 'N/A' });

const schoolOptions = schools.concat('N/A').map(school => ({ value: school, label: school }));

const firstMajors = ['Computer Science', 'Computer Engineering', 'Electrical Engineering'];
const remainingMajors = majors.filter(major => !firstMajors.includes(major));
const majorOptions = firstMajors
  .concat(remainingMajors)
  .concat('N/A')
  .map(major => ({ value: major, label: major }));


const Education = ({ Buttons }) => (
  <section className={styles.education}>
    <h1 className={styles.title}>Education</h1>
    <div className={styles.content}>
      <SelectField name="degreePursued" options={degreeOptions} placeholder="What degree are you currently pursuing? *" />
      <SelectField name="graduationYear" options={graduationYearOptions} placeholder="Graduation Year (Enter N/A if not applicable) *" />
      <SelectField name="school" options={schoolOptions} placeholder="School (Enter N/A if not applicable) *" creatable />
      <SelectField name="major" options={majorOptions} placeholder="Major (Enter N/A if not applicable) *" creatable />
    </div>
    <Buttons className={styles.buttons}/>
  </section>
);

export default Education;