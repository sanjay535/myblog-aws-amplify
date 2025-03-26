import classes from './Spinner.module.css';

function Spinner() {
  return (
    <div className={classes.spinnerContainer}>
      <span className={classes.loader}></span>
    </div>
    
  )
}

export default Spinner