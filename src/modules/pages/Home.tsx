import { Button1, Button2, Button3, DragBoxColorChange } from '~/components';
import styles from '~styles/pages/home.module.scss';

export const Home = () => {

    return (
        <div className={styles['container']}>
            <div className={styles['container__wrap']}>
                <h1 className={styles['container__wrap__title']}>Colourful dragbox</h1>
                <DragBoxColorChange />
            </div>


            <div className={styles['container__wrap']}>
                <h1 className={styles['container__wrap__title']}>Buttons</h1>
                <Button1 name='Hello' />
                <Button2 name='Hello' />
                <Button3 name='Hello' />
            </div>
        </div>
    )
};