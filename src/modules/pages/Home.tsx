import { Button, Dragbox, Spinning3D } from '~/components';
import styles from '~styles/pages/home.module.scss';

export const Home = () => {

    return (
        <div className={styles['container']}>
            <div className={styles['container__wrap']}>
                <h1 className={styles['container__wrap__title']}>Colourful dragbox</h1>
                <Dragbox />
            </div>

            <div className={styles['container__wrap']}>
                <h1 className={styles['container__wrap__title']}>Buttons</h1>
                <Button name='Hello' variant='btn1' />
                <Button name='Hello' variant='btn2' />
                <Button name='Hello' variant='btn3' />
            </div>

            <div className={styles['container__wrap']}>
                <h1 className={styles['container__wrap__title']}>3D Cube</h1>
                <Spinning3D />
            </div>
        </div>
    )
};