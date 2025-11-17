import type { ButtonType } from '~/shared';
import styles from '~styles/app.module.scss';

export const Button2 = ({ name }: ButtonType) => {
    return (
        <div className={styles['btn2']}>
            <p className={styles['title']}>{name}</p>
        </div>
    );
};
