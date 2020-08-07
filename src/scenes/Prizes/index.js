import React, { useState } from 'react';

import styles from './style.module.scss';
import decoration from 'assets/prizes/decoration.svg';
import bottomRight from 'assets/prizes/bottom_right.svg';
import mobileTopLeft from 'assets/prizes/mobile_top_left.svg';
import mobileBottomRight from 'assets/prizes/mobile_bottom_right.svg';
import categories from './prizes.json';
import PrizeCategory from './PrizeCategory';
import NavBar from 'components/NavBar';
import clsx from 'clsx';
import CategorySelect from './CategorySelect';

const categoryOptions = [
  { value: 'general', label: 'General' },
  { value: 'speciality', label: 'Speciality' },
];

const Prizes = () => {
  const [selectedCategory, setSelectedCategory] = useState('general');

  return (
    <div className={styles.prizes}>
      <NavBar blueLink />

      <CategorySelect
        className={styles['category-select']}
        options={categoryOptions}
        value={categoryOptions.find(({ value }) => value === selectedCategory)}
        onChange={({ value }) => setSelectedCategory(value)}
        color={categories[selectedCategory].color}
      />

      <div className={styles.dot} style={{ width: 50, height: 16, right: -15, top: 120 }} />

      <div className={clsx(styles['general-container'], selectedCategory === 'general' && styles.selected)}>
        <img className={styles.decoration} src={decoration} alt="" />
        <PrizeCategory className={styles.general} {...categories.general}  />
      </div>

      <PrizeCategory
        className={clsx(styles.speciality, selectedCategory === 'speciality' && styles.selected)}
        addStarAt={1}
        addGlobeAt={categories.speciality.prizes.length - 1}
        {...categories.speciality}
      />

      <img className={styles['bottom-right']} src={bottomRight} alt="" />
      <img className={clsx(styles['mobile-top-left'], styles.mobile)} src={mobileTopLeft} alt="" />
      <img className={clsx(styles['mobile-bottom-right'], styles.mobile)} src={mobileBottomRight} alt="" />
    </div>
  );
};

export default Prizes;