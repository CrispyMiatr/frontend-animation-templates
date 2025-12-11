import { Outlet } from 'react-router';
import { Header } from '~/components/layout';
import styles from '~styles/app.module.scss';

export const Layout = () => {

    return (
        <div className={styles['container-wrapper']}>
            <Header />
            <Outlet />
        </div>
    );
};