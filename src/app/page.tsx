'use client';

import styles from './page.module.css';
import RecentPost from '@/src/components/blog/RecentPost';
import AllPost from '@/src/components/blog/AllPost';
import Spinner from '@/src/components/ui/spinner/Spinner';
import useWindowSize from '@/src/hooks/useWindowSize';
import useMounted from '@/src/hooks/useMounted';
// import data from '../data/mock-data.json';

export default function Home() {
  const hasMounted = useMounted();
  const device = useWindowSize();

  if (!hasMounted) {
    return <Spinner />;
  }
  return (
    <div>
      <main className={styles.main}>
        <h1>THE BLOG</h1>
        <RecentPost width={device.width} />
        <AllPost />
      </main>
    </div>
  );
}
