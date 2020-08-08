import React, { useState } from 'react';
import clsx from 'clsx';

import styles from './style.module.scss';
import topLeft from 'assets/resources/top_left.svg';
import bottomLeft from 'assets/resources/bottom_left.svg';
import side from 'assets/resources/side.svg';
import book1 from 'assets/resources/book1.svg';
import book2 from 'assets/resources/book2.svg';
import paper from 'assets/resources/paper.svg';
import waveLeft from 'assets/resources/wave_left.svg';
import waveMiddle from 'assets/resources/wave_middle.svg';
import waveRight from 'assets/resources/wave_right.svg';
import waveMobile from 'assets/resources/wave_mobile.svg';
import categories from './resources.js';
import NavBar from 'components/NavBar';
import CategorySelect from 'scenes/Prizes/CategorySelect'; // TODO: Move CategorySelect to components/

const waveParts = [waveLeft, waveMiddle, waveRight];

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className={styles['resources-page']}>
      <NavBar light blueLink mobileBreakpoint={1023} />

      <img className={clsx(styles.decoration, styles['top-left'])} src={topLeft} alt="" />
      <img className={clsx(styles.decoration, styles['bottom-left'])} src={bottomLeft} alt="" />
      <img className={clsx(styles.decoration, styles.side)} src={side} alt="" />
      <img className={clsx(styles.decoration, styles.book1)} src={book1} alt="" />
      <img className={clsx(styles.decoration, styles.book2)} src={book2} alt="" />
      <img className={clsx(styles.decoration, styles.paper)} src={paper} alt="" />

      <CategorySelect
        className={styles['category-select']}
        options={categories.map(({ name }, i) => ({ value: i, label: name }))}
        onChange={({ value }) => setSelectedCategory(value)}
        value={{ value: selectedCategory, label: categories[selectedCategory].name }}
        color="#4295A0"
      />

      <div className={styles.container}>
        {categories.map(({ name, resources }, i) => (
          <div className={clsx(styles.category, i === selectedCategory && styles.selected)}>
            <h2>{name}</h2>
            <div className={styles.resources}>
              {resources.map(({ title, link, preview }, index) => (
                <a className={styles.resource} style={{ backgroundImage: `url("${preview}")` }} href={link} target="_blank" rel="noopener noreferrer">
                  <h3>{title}</h3>
                  <img className={styles.wave} src={waveParts[index % waveParts.length]} alt="" />
                  <img className={clsx(styles.wave, styles.mobile)} src={waveMobile} alt="" />
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Resources;