import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

import styles from './style.module.scss';
import NavBar from 'components/NavBar';
import background from 'assets/home/background.svg';
import mobileBackground from 'assets/home/mobile_background.svg';
import pencil from 'assets/home/pencil.svg';
import paper from 'assets/home/paper.svg';
import calculator from 'assets/home/calculator.svg';
import globe from 'assets/home/globe.svg';
import notebook from 'assets/home/notebook.svg';
import paintTools from 'assets/home/paint_tools.svg';
import titration from 'assets/home/titration.svg';
import twitter from 'assets/home/twitter.svg';
import instagram from 'assets/home/instagram.svg';
import discord from 'assets/home/discord.png';
import star from 'assets/home/star.svg';
import chalk from 'assets/home/chalk.svg';
import eraser from 'assets/home/eraser.svg';
import middleDecoration from 'assets/home/middle_decoration.svg';
import faqNote from 'assets/home/faq_note.svg';
import sponsorsBackground from 'assets/home/sponsors_background.svg';
import discordLogo from 'assets/home/Discord-Logo-White.svg';
import speakers from './speakers.json';
import staff from './staff.json';
import sponsors from './sponsors.json';

const decorations = [
  { asset: pencil, style: { top: 452, right: 492 } },
  { asset: paper, style: { top: 140, right: 883 } },
  { asset: calculator, style: { top: 89, right: 674 } },
  { asset: globe, style: { top: 185, right: 508 } },
  { asset: notebook, style: { top: 206, right: 293 } },
  { asset: paintTools, style: { top: 116, right: 55 } },
  { asset: titration, style: { top: 381, right: 145 } },
];

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
];

const mobileDecorations = [
  { asset: pencil, style: { top: 282, left: 75, width: 93, transform: 'rotate(-4.47deg)' } },
  { asset: paper, style: { top: 117, left: 57, width: 55, transform: 'rotate(-17.37deg)' } },
  { asset: titration, style: { top: 108, left: 163, width: 51, transform: 'rotate(-2.86deg)' } },
  { asset: notebook, style: { top: 81, left: 252, width: 55, } },
  { asset: calculator, style: { top: 103, left: 364, width: 26, transform: 'rotate(11.21deg)' } },
  { asset: globe, style: { top: 196, left: 282, width: 64, transform: 'rotate(15.45deg)' } },
];

const mobileDots = [
  { top: 90, left: 42, width: 14, height: 6 },
  { top: 117, left: 134, width: 4, height: 4 },
  { top: 46, left: 164, width: 10, height: 10 },
  { top: 232, left: 165, width: 20, height: 8 },
  { top: 199, left: 248, width: 9, height: 9 },
  { top: 147, left: 315, width: 4, height: 4 },
  { top: 51, left: 349, width: 6, height: 6 },
  { top: 313, left: 384, width: 9, height: 9 },
  { top: 202, left: 405, width: 25, height: 12 },
];

const notes = [
  {
    title: 'Our Projects:',
    subtitle: 'Many Approaches towards One Goal',
    text: 'You might create an educational tool for students and educators to improve the virtual learning experience.\n\nOr, you might make a data visualization or other analysis to highlight and suggest possible solutions to pressing issues in remote learning. It\'s time to HackThis!'
  },
  {
    title: 'Our Resources:',
    subtitle: 'For Your Learning',
    text: 'Access to mentors from industry, education and business for your projects.\n\nTons of workshops to expand and strengthen attendee abilities. '
  },
  {
    title: 'Our Experience:',
    subtitle: 'Building Educational Tools',
    text: 'Talks and Panels to inspire, excite, and educate as you work.\n\nMini Events to help build new connections and have some fun.'
  },
];

const Home = () => {
  const [backgroundWidth, setBackgroundWidth] = useState(0);
  const [backgroundHeight, setBackgroundHeight] = useState(0);

  const setBackgroundDimensions = img => {
    setBackgroundWidth(img.offsetWidth);
    setBackgroundHeight(img.offsetHeight);
  }
  
  const backgroundStyleVariables = {
    '--background-width': `${backgroundWidth}px`,
    '--background-height': `${backgroundHeight}px`,
  }

  return (
    <div className={styles.home} style={backgroundStyleVariables}>
      <NavBar />

      <section className={styles.top}>
        <div className={styles.content}>
          <h3 className={styles.presents}>HackIllinois Presents</h3>
          <h1 className={styles.title}>HackThis</h1>
          <h2 className={styles.tagline}>this.hack = education</h2>
          <p className={styles.dates}>August 7 - August 15, 2020</p>
          <div className={styles['button-container']}>
            <Link to="/register" className={styles['register-button']}>REGISTER NOW</Link>
            <a
              className={styles['discord-button']}
              href="https://go.hackillinois.org/hackthis-discord"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join our Discord!"
            >
              <div className={styles.image} style={{ backgroundImage: `url("${discordLogo}")`}} />
            </a>
          </div>
        </div>

        <div className={styles['decoration-container']}>
          <div className={styles.spacer} />

          <div className={styles.decorations}>
            <img src={background} alt="" onLoad={e => setBackgroundDimensions(e.target)}/>

            {decorations.map(({ asset, style }) => (
              <img className={styles.decoration} src={asset} alt="" style={style} key={asset}/>
            ))}

            {dots.map(style => (
              <div className={styles.dot} style={style} key={Object.values(style).join(' ')} />
            ))}
          </div>
        </div>

        <div className={styles['mobile-decorations']}>
          <img src={mobileBackground} alt="" />

          {mobileDecorations.map(({ asset, style }) => (
            <img className={styles.decoration} src={asset} alt="" style={style} key={asset} />
          ))}

          {mobileDots.map(style => (
            <div className={styles.dot} style={style} key={Object.values(style).join(' ')} />
          ))}
        </div>
      </section>

      <section className={styles.notes}>
        <h3 className={styles['section-title']}>Our&nbsp;Hackathon&nbsp;Focus: Advancing&nbsp;Virtual&nbsp;Education</h3>
        <div className={styles['flex-container']}>
          {notes.map(({ title, subtitle, text }) => (
            <div className={styles.note}>
              <img className={styles.star} src={star} alt="" />
              <div>
                <h4 className={styles.title}>{title}</h4>
                <h5 className={styles.subtitle}>{subtitle}</h5>
                <p className={styles.text}>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.info}>
        <div className={styles.content}>
          <h3>THE EVENT</h3>
          <p>
            HackThis is a fully virtual, education focused hackathon taking place between August 7th and
            August 15th, 2020. The first weekend will feature a 48-hour hack sprint, similar to a typical hackathon.
            The following weekdays will be an opportunity to refine your product with continued support from mentors.
            At our event, you will be given resources to develop solutions to enhance virtual learning on a global scale,
            while having the opportunity to hear from leaders in education, attend workshops, and consult mentors from
            different backgrounds. HackThis is a great way to gain new technical skills and collaborate with other students,
            with a common goal of innovation for social good!
          </p>
          <h3>JOIN US</h3>
          <p>
            Follow us on Twitter (<a href="https://twitter.com/hackillinois/" target="_blank" rel="noopener noreferrer">@HackIllinois</a>) and Instagram
            (<a href="https://www.instagram.com/hackillinois/" target="_blank" rel="noopener noreferrer">@HackIllinois</a>) to be notified of our event updates!
          </p>
          <p>
            In terms of the platforms you will need to have access to, we’ll be connecting mentors and attendees on
            Discord! As we approach the event, we’ll post a link on our social media to the discord server so that
            you can join and introduce yourself.
          </p>
          <h4>Twitter <img src={twitter} alt="" /></h4>
          <p>
            This is where we’ll be posting main updates with regards to our schedule, additions to our event, and other
            things we come up with! We’ll also be using it during the event to make updates with any schedule changes
            and send out reminders for workshops and other mini-events starting out!
          </p>
          <h4>Instagram <img src={instagram} alt="" /></h4>
          <p>
            This is where we’ll be posting more of the fun, behind-the-scenes aspects of our event! You’ll get an
            opportunity to see the work that goes into making the event a possibility and also get insights from
            staff and mentors about what makes HackThis a one-of-a-kind hacking experience.
          </p>
          <h4>Discord <img src={discord} alt="" /></h4>
          <p>
            Our discord server will be the main hub for our event. You’ll use this to find and communicate with
            teammates and other attendees, access our workshops and mini-events, and get help from mentors—all
            through one centralized platform.
          </p>
        </div>

        {/* <img src={star} className={clsx(styles.decoration, styles.star)} alt="" /> */}
        <img src={chalk} className={clsx(styles.decoration, styles.chalk)} alt="" />
        <img src={eraser} className={clsx(styles.decoration, styles.eraser)} alt="" />
        <div className={styles.dot} style={{ top: 57, right: -45, width: 90, height: 30 }} />
        <div className={styles.dot} style={{ bottom: 160, left: -75, width: 125, height: 50 }} />
        <div className={clsx(styles.dot, styles.mobile)} style={{ top: 57, right: -10, width: 45, height: 15, transformOrigin: 'center right' }} />
        <div className={clsx(styles.dot, styles.mobile)} style={{ bottom: 60, left: -10, width: 53, height: 21 }} />
      </section>

      <div className={styles['middle-decoration']}><img src={middleDecoration} alt="" /></div> 

      <section className={styles.faq}>
        <div className={styles.left}>
          <img src={faqNote} alt="FAQ" />
        </div>

        <div className={styles.questions}>
          <h3 className={styles.title}>FAQ</h3>

          <h4>What kind of projects can I work on?</h4>
          <p>
            We have two different project tracks! The first is the traditional hackathon style project, where
            you have a week to come up with a new solution related to improving virtual education/collaboration.
            The second is bring a project that you may have worked on previously, and work on fitting that project
            to the theme of education!
          </p>
          <h4>What if I don’t have that much programming experience?</h4>
          <p>
            People of all programming levels are welcome! You’ll have the chance to gain technical experience
            through workshops and work with mentors who can guide you with your project idea. 
          </p>
          <h4>How do applications work?</h4>
          <p>
            There is no application! Just register using <Link to="/register">hackthis.hackillinois.org/register</Link> and
            we will send you more information about our event - everyone is accepted! Registration is open until the end of
            the event. In order to join our Discord server and submit a project, you will need to register! You must be 18+
            to register. 
          </p>
          <h4>Where can I go for more information?</h4>
          <p>
            Take a look at our website for more information about our event! If you have any further questions,
            feel free to reach out to us through our social media channels, or email us at <a href="mailto:contact@hackillinois.org">contact@hackillinois.org</a>! 
          </p>
          <h4>What do I need as a virtual hacker?</h4>
          <p>You won’t need much to get the most out of your HackThis experience. All it’ll take is:</p>
          <ul>
            <li><strong>A Github account</strong>, to share and collaborate on your code with others.</li>
            <li><strong>A Discord account</strong> to work and engage with teammates, mentors, and other attendees.</li>
          </ul>
          <h4>Why is HackThis a week long?</h4>
          <p>
            With an ambitious goal of solving wide-reaching problems in the area of virtual education, we believe that a longer
            hacking time of a week will help each project and group go through the full development cycle to create the most refined
            prototype—or complete product—as possible. An online event is also free of the time and space constraints of a physical
            event, meaning that we’re able to host and maintain a unique experience for all hackers throughout the week.
          </p>
          <h4>Can I work in a team? Alone?</h4>
          <p>
            Yes! HackThis allows teams of up to size 8. While teamwork is highly encouraged to ensure the most effective ideation
            and development over the span of the event, with a discord channel dedicated towards finding teammates, individual
            submissions are also allowed.
          </p>
        </div>

        <div className={styles.right} />
      </section>

      <section className={styles.speakers}>
        <h3 className={styles['section-title']}>
          <img className={styles.star} src={star} alt="" />
          Speakers
        </h3>

        {speakers.map(({ name, title, image, description }) => (
          <div className={styles.speaker}>
            <div className={styles.image} style={{ backgroundImage: `url("/assets/speaker-photos/${image}")`}} />
            <div>
              <h4 className={styles.name}>{name}</h4>
              <h5 className={styles.title}>{title}</h5>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        ))}
      </section>

      <section className={styles.team}>
        <h3 className={styles['section-title']}>
          <img className={styles.star} src={star} alt="" />
          Our Team
        </h3>

        <div className={styles.staff}>
          {staff.map(name => (
            <div className={styles.member}>
              <img className={styles.image} src={`/assets/team-photos/${name}.png`} alt="" />
              <h6 className={styles.name}>{name}</h6>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.sponsors}>
        <h3 className={styles['section-title']}>Sponsors</h3>

        <div className={styles['background-container']}>
          <img className={styles['sponsors-background']} src={sponsorsBackground} alt="" />
        </div>

        <div className={styles.box}>
          {sponsors.map(sponsor => (
            <a
              className={styles.sponsor}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ width: sponsor.width }}
            >
              <img src={`/assets/sponsors/${sponsor.image}`} alt="" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;