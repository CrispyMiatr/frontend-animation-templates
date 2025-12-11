import { Button, Dragbox, DrinkItem, ScrollText, Spinning3D, TitleAnimation, Toggle } from '~/components';
import styles from '~styles/pages/home.module.scss';

export const Home = () => {

    return (
        <div className={styles['home-container']}>
            <div className={styles['home-container__wrap']}>
                <h1 className={styles['home-container__wrap__title']}>3D Cube</h1>
                <Spinning3D />
            </div>
        </div>
    )
};