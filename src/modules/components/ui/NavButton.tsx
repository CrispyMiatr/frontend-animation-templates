import { Link } from 'react-router';
import type { NavButtonType } from '~/shared';
import styles from '~styles/app.module.scss';

export const NavButton = ({ name, variant, link }: NavButtonType) => {
    return (
        <Link to={link} className={styles[variant]}>
            <p className={styles['title']}>{name}</p>
        </Link>
    );
};
