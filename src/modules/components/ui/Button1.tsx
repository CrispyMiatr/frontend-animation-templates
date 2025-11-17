import type { ButtonType } from '~/shared';
import styles from '~styles/app.module.scss';

export const Button1 = ({ name }: ButtonType) => {
    return (
        <div className={styles['btn1']}>
            <p className={styles['title']}>{name}</p>
        </div>
    );
};
