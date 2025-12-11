import styles from '~styles/app.module.scss';
import { NavButton } from '../ui';

export const Header = () => {
    return (
        <nav className={styles['navbar']}>
            <NavButton name='Home' variant='btn0' link='/' />
            <NavButton name='Assets' variant='btn0' link='/assets' />
        </nav>
    );
}