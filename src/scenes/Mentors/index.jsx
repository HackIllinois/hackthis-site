import React, { useState } from 'react';
import clsx from 'clsx';

import NavBar from 'components/NavBar';
import MentorSelect from './MentorSelect';
import styles from './style.module.scss'
import topLeft from 'assets/mentors/top-left.svg';
import bottomRight from 'assets/mentors/bottom-right.svg';
import marker from 'assets/mentors/marker.svg';
import eraser from 'assets/mentors/eraser.svg';
import categories from './categories.json';
import mentors from './mentors.json';

const categoryOptions = categories.map((category, i) => ({
  value: i,
  label: `${category.title} (${category.clarification})`
}));

const Mentors = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);

  const currentCategory = categories[categoryIndex];

  return (
    <div className={styles.mentors}>
      <NavBar className={styles.navbar} light />

      <img className={clsx(styles.decoration, styles['top-left'])} src={topLeft} alt="" />
      <img className={clsx(styles.decoration, styles['bottom-right'])} src={bottomRight} alt="" />

      <h1 className={styles['page-title']}>Mentors</h1>

      <div className={styles.categories}>
        {categories.map((category, index) => (
          <div
            className={styles.category}
            style={{ transform: `rotate(${category.rotation}deg)` }}
            onClick={() => setCategoryIndex(index)}
          >
            <div className={styles['green-bar']} />
            <h4 className={styles.title}>{category.title}</h4>
            <p className={styles.clarification}>({category.clarification})</p>
          </div>
        ))}
      </div>

      <div className={styles['category-select']}>
        <MentorSelect
          value={categoryOptions[categoryIndex]}
          options={categoryOptions}
          onChange={({ value }) => setCategoryIndex(value)}
        />
      </div>

      <div className={styles.board}>
        <img className={styles['corner-marker']} src={marker} alt="" />

        <div className={styles.content}>
          <img className={styles.eraser} src={eraser} alt="" />

          <h2 className={styles.title}>
            {currentCategory.title}&nbsp;
            <span className={styles.clarification}>({currentCategory.clarification})</span>
            <img className={styles.marker} src={marker} alt="" />
          </h2>

          <div className={styles['mentor-list']} key={categoryIndex}>
            {currentCategory.mentors.map(name => [name, mentors[name]]).map(([name, mentor]) => (
              <div className={styles.mentor} key={name}>
                <div className={styles.photo} style={{ backgroundImage: `url("/assets/mentor-photos/${mentor.image}")`}} />
                <div>
                  <h3 className={styles.name}>{name}</h3>
                  <p className={styles.description}>{mentor.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Mentors;