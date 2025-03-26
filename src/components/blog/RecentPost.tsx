import Card from '@/src/components/ui/card/Card';
import classes from './RecentPost.module.css';

function RecentPost({ width }: { width: number }) {
  return (
    <div className={classes.container}>
      <h2>Recent blog posts</h2>
      <div className={classes.postLeftRight}>
        <div className={classes.left}>
          <Card vertical />
        </div>
        <div className={classes.right}>
          <div className={classes.firstCard}>
            {width <= 668 ? <Card vertical /> : <Card />}

          </div>
          <div className={classes.lastCard}>
            {width <= 668 ? <Card vertical /> : <Card />}
          </div>
        </div>
      </div>
      <div className={classes.postFull}>
        {width <= 668 ? <Card vertical /> : <Card />}
      </div>
    </div>
  );
}

export default RecentPost;
