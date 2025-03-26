import Image from 'next/image';
import classes from './Card.module.css';

function Card({ vertical }: { vertical?: boolean }) {
  return (
    <div className={vertical ? classes.vertiCalContainer : classes.container}>
      <div className={classes.image}>
        <Image src={'/images/recent1.png'} alt='recent post' fill />
      </div>
      <div style={vertical ? { marginTop: '2rem' } : {}} className={classes.contents}>
        <div className={classes.authorDate}>Phoenix Baker • 1 Jan 2023</div>
        <div className={classes.title}>
          <h3>Migrating to Linear 101</h3>
        </div>
        <div className={classes.excerpts}>
          Linear helps streamline software projects, sprints, tasks, and bug
          tracking. Here’s how to get...
        </div>
        <div className={classes.categories}>
          <span
            style={{
              backgroundColor: 'var(--categoryBg1)',
              color: 'var(--categoryFg1)',
            }}
          >
            Design
          </span>
          <span
            style={{
              backgroundColor: 'var(--categoryBg2)',
              color: 'var(--categoryFg2)',
            }}
          >
            Research
          </span>
        </div>
      </div>
    </div>
  );
}

export default Card;
