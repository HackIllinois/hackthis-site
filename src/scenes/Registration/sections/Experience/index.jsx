import React from 'react';
import SelectField from 'components/form/SelectField';
import { Field } from 'formik';

import styles from './style.module.scss';
import FileUploadField from 'components/form/FileUploadField';
import Checkbox from 'components/form/Checkbox';
import FieldErrorMessage from 'components/form/FieldErrorMessage';

const formatYears = years => `${years} year${years === 1 ? '' : 's'}`
const programmingYearsOptions = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  .map(years => ({
    value: years,
    label: years === 10 ? '10+ years' : formatYears(years),
  }));

const abilityOptions = [
  { value: 1, label: '1 - What is code?' },
  { value: 2, label: '2 - I am familiar with code, but need guidance. ' },
  { value: 3, label: '3 - I am comfortable working on independent projects.' },
  { value: 4, label: '4 - I am comfortable writing and reviewing production level code.' },
  { value: 5, label: '5 - I am code.' },
];

const internshipOptions = [
  { value: true, label: 'Yes' },
  { value: false, label: 'No' },
];

const Experience = ({ Buttons }) => (
  <section className={styles.experience}>
    <h1 className={styles.title}>Experience</h1>

    <div className={styles.content}>
      <SelectField name="programmingYears" options={programmingYearsOptions} placeholder="How many years have you been programming? *" />
      <SelectField name="programmingAbility" options={abilityOptions} placeholder="On a scale from 1 to 5, how do you rate your programming ability? *" />
      <SelectField name="hasInternship" options={internshipOptions} placeholder="Do you have an internship or full-time position this summer? *" />

      <FileUploadField
        className={styles['resume-upload']}
        name="resumeFilename"
        type="resume"
        accept="application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        text="Attach your resume [file - pdf, docx] (optional)"
      />

      <div className={styles['terms-field']}>
        <Field name="terms">
          {({ field, form }) => (
            <Checkbox
              name={field.name}
              className={styles['terms-checkbox']}
              label={<span>I am over the age of 18 and agree to the <a href="/terms-of-service" target="_blank">terms of service</a> *</span>}
              checked={field.value}
              onChange={e => form.setFieldValue(field.name, e.target.checked)}
              onBlur={field.onBlur}
              />
            )}
        </Field>
        <FieldErrorMessage name="terms" />
      </div>
    </div>
    
    <Buttons className={styles.buttons}/>
  </section>
);

export default Experience;