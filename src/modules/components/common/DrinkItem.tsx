import styles from '~styles/components/DrinkItem.module.scss';

export const DrinkItem = () => {
    return (
        <div className={styles['drink-container']}>
            <div className={styles['drink-container__icon']}>
                <img src="./src/assets/500mL.svg" alt="" />
            </div>
            <div className={styles['drink-container__img']}>
                <img src="./src/assets/monster-khaos.png" alt="" />
            </div>
            <div className={styles['drink-container__info']}>
                <p>Hello</p>
            </div>
        </div>
    );
};