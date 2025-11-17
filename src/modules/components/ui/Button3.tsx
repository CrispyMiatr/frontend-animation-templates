import type { ButtonType } from '~/shared';
import styles from '~styles/app.module.scss';

export const Button3 = ({ name }: ButtonType) => {
    return (
        <div className={styles['btn3']}>
            <p className={styles['title']}>{name}</p>
        </div>
    );
};
