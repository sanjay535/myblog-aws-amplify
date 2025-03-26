import Card from '../ui/card/Card';
import classes from './AllPost.module.css';

function AllPost() {
  return (
    <div className={classes.container}>
      <h2>All blog posts</h2>
      <div className={classes.postContainer}>
        <Card vertical />
        <Card vertical />
        <Card vertical />
        <Card vertical />
        <Card vertical />
        <Card vertical />
      </div>
    </div>
  );
}

export default AllPost;
