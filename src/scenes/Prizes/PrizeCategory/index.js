import React from 'react';

import styles from './style.module.scss';
import award from 'assets/prizes/award.svg';
import star from 'assets/prizes/star.svg';
import globe from 'assets/prizes/globe.svg';
import AwardIcon from '../AwardIcon';
import clsx from 'clsx';

const PrizeCategory = ({ prizes, title, color, className, style, addStarAt, addGlobeAt }) => (
  <div className={clsx(styles['prize-category'], className)} style={style}>
    <h2 className={styles.title}>
      <img className={styles.award} src={award} alt="" />
      {title}
    </h2>

    <div className={styles.prizes}>
      {prizes.map(({ name, description, value }, index) => (
        <div className={styles.prize} style={{ borderColor: color }}>
          {index === addStarAt && <img className={clsx(styles.decoration, styles.star)} src={star} alt="" />}
          {index === addGlobeAt && <img className={clsx(styles.decoration, styles.globe)} src={globe} alt="" />}
          <div className={styles['award-icon']}>
            <AwardIcon color={color} />
          </div>
          <h3>{name}</h3>
          <p dangerouslySetInnerHTML={{ __html: description }} />
          <div className={styles.spacer} />
          <h4>${value}</h4>
        </div>
      ))}
    </div>
  </div>
);

export default PrizeCategory;

