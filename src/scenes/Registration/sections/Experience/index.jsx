import React from 'react';
import SelectField from 'components/SelectField';

import styles from './style.module.scss';
import FileUploadField from 'components/FileUploadField';

const yearsExperienceOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .map(years => ({ value: years, label: years === 10 ? '10+' : `${years}`}));

const abilityOptions = [
  { value: 1, label: '1 - What is code?' },
  { value: 1, label: '2 - I am familiar with code, but need guidance. ' },
  { value: 1, label: '3 - I am comfortable working on independent projects.' },
  { value: 1, label: '4 - I am comfortable writing and reviewing production level code.' },
  { value: 1, label: '5 - I am code.' },
]

const internshipOptions = [
  { value: 'Yes', label: 'Yes' },
  { value: 'No', label: 'No' },
];

const Experience = () => (
  <section className={styles.experience}>
    <h1>Experience</h1>
    <SelectField name="yearsExperience" options={yearsExperienceOptions} placeholder="How many years have you been programming?" />
    <SelectField name="ability" options={abilityOptions} placeholder="On a scale from 1 to 5, how do you rate your programming ability? " />
    <SelectField name="internship" options={internshipOptions} placeholder="Do you have an internship or full-time position this summer?" />

    <p>Attach your resume [file - pdf, docx] (optional)</p>
    <FileUploadField
      name="resumeFilename"
      type="resume"
      accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    />
  </section>
);

export default Experience;