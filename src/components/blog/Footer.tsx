import Facebook from '@/src/components/ui/social/Facebook';
import classes from './Footer.module.css';
import LinkedIn from '@/src/components/ui/social/LinkedIn';
import Twitter from '@/src/components/ui/social/Twitter';
import Github from '@/src/components/ui/social/Github';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={classes.container}>
      <div className={classes.socialIcons}>
        <Link href='https://sanjay0107.github.io'>
          <Twitter />
        </Link>
        <Link href='https://sanjay0107.github.io'>
          <Facebook />
        </Link>
        <Link href='https://sanjay0107.github.io'>
          <LinkedIn />
        </Link>
        <Link href='https://sanjay0107.github.io'>
          <Github />
        </Link>
      </div>
      <div className={classes.copywrite}>
        <span>&#169;</span>
        <span>{new Date().getFullYear()} All Rights Reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
