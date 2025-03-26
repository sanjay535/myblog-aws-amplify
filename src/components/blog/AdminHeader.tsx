'use client';

import Link from 'next/link';
import Image from 'next/image';
import classes from './Navigation.module.css';
import { Button } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import { useRouter } from 'next/navigation';

const AdminHeader: React.FC = () => {
    const router = useRouter();
    return (
        <div className={`${classes.container} `}>
            <nav className={`${classes.nav}`}>
                <div className={classes.logo}>
                    <Link href='/'>
                        <Image src='/icons/logo.svg' width={200} height={40} alt='logo' />
                    </Link>
                </div>
                <Button onClick={async () => {
                    await signOut();
                    router.push("/signup");
                }}>Sign out</Button>
            </nav>
        </div>
    );
};

export default AdminHeader;
