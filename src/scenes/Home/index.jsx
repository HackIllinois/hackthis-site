import React from 'react';

import styles from './style.module.scss';
import background from 'assets/home/background.svg';
import pencil from 'assets/home/pencil.svg';
import paper from 'assets/home/paper.svg';
import calculator from 'assets/home/calculator.svg';
import globe from 'assets/home/globe.svg';
import notebook from 'assets/home/notebook.svg';
import paintTools from 'assets/home/paint_tools.svg';
import titration from 'assets/home/titration.svg';

const decorations = [
  { asset: background, style: { top: 0, right: 0 } },
  { asset: pencil, style: { top: 452, right: 492 } },
  { asset: paper, style: { top: 140, right: 883 } },
  { asset: calculator, style: { top: 89, right: 674 } },
  { asset: globe, style: { top: 185, right: 508 } },
  { asset: notebook, style: { top: 206, right: 293 } },
  { asset: paintTools, style: { top: 116, right: 55 } },
  { asset: titration, style: { top: 381, right: 145 } },
]

const dots = [
  { top: 150, right: 1049, width: 25, height: 12 },
  { top: 59, right: 895, width: 11, height: 11 },
  { top: 247, right: 740, width: 30, height: 30 },
  { top: 112, right: 620, width: 12, height: 12 },
  { top: 168, right: 279, width: 19, height: 19 },
  { top: 94, right: 81, width: 14, height: 14 },
  { top: 396, right: 465, width: 62, height: 24 },
  { top: 391, right: 293, width: 11, height: 11 },
  { top: 306, right: 39, width: 18, height: 18 },
  { top: 688, right: 171, width: 33, height: 33 },
  { top: 565, right: -19, width: 76, height: 36 },
]

const Home = () => (
  <main className={styles.home}>
    <section className={styles.top}>
      <div className={styles.content}>
        <h3 className={styles.presents}>HackIllinois Presents</h3>
        <h1 className={styles.title}>HackThis</h1>
        <h2 className={styles.tagline}>this.hack = education</h2>
        <p className={styles.dates}>August 7 - August 15, 2020</p>
      </div>

      <div className={styles.decorations}>
        {/* <img className={styles.background} src={background} alt="" />
        <img className={styles.pencil} src={pencil} alt="" />
        <img className={styles.pencil} src={paper} alt="" />
        <img className={styles.pencil} src={calculator} alt="" />
        <img className={styles.pencil} src={globe} alt="" />
        <img className={styles.pencil} src={notebook} alt="" />
        <img className={styles.pencil} src={paintTools} alt="" />
        <img className={styles.pencil} src={titration} alt="" /> */}
        {decorations.map(({ asset, style }) => (
          <img className={styles.decoration} src={asset} alt="" style={style} />
        ))}

        {dots.map(style => (
          <div className={styles.dot} style={style} />
        ))}
      </div>
    </section>
  </main>
);

export default Home;