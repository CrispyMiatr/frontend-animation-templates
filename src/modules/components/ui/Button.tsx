import type { ButtonType } from '~/shared';
import styles from '~styles/app.module.scss';

export const Button = ({ name, variant }: ButtonType) => {
    return (
        <div className={styles[variant]}>
            <p className={styles['title']}>{name}</p>
        </div>
    );
};