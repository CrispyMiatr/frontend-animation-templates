import { useState } from 'react';
import { Button, Dragbox, DrinkItem, RangeSlider, ScrollText, Spinning3D, TitleAnimation, Toggle } from '~/components';
import styles from '~styles/pages/assets.module.scss';

export const Assets = () => {
    const [speed, setSpeed] = useState(1);

    return (
        <div className={styles['assets-container']}>
            <div className={styles['assets-container__wrap']}>
                <h1 className={styles['assets-container__wrap__title']}>Text animation</h1>
                <TitleAnimation text='Interactive Puzzle Game' />
                <ScrollText
                    items={[
                        "I am title 1",
                        "Title twoooo",
                        "Say hi to title 3"
                    ]}
                />
            </div>

            <div className={styles['assets-container__wrap']}>
                <h1 className={styles['container__wrap__title']}>Colourful dragbox</h1>
                <Dragbox />
            </div>

            <div className={styles['assets-container__wrap']}>
                <h1 className={styles['assets-container__wrap__title']}>Buttons</h1>
                <div className={styles['assets-container__wrap__grid']}>
                    <Button name='Hello' variant='btn1' />
                    <Button name='Hello' variant='btn2' />
                    <Button name='Hello' variant='btn3' />
                    <Button name='Hello' variant='btn4' />
                    <Button name='Hello' variant='btn5' />
                    <Button name='Hello' variant='btn6' />
                </div>

            </div>

            <div className={styles['assets-container__wrap']}>
                <h1 className={styles['container__wrap__title']}>3D Cube</h1>
                <Spinning3D speed={speed} />
                <div className={styles['home-container__wrap__controls']}>
                    <RangeSlider
                        label="Animation Speed:"
                        value={speed}
                        min={0}
                        max={10}
                        onChange={setSpeed}
                    />
                </div>
            </div>

            <div className={styles['assets-container__wrap']}>
                <h1 className={styles['container__wrap__title']}>Toggle</h1>
                <Toggle />
            </div>

            <div className={styles['assets-container__wrap']}>
                <h1 className={styles['assets-container__wrap__title']}>Drink Item</h1>
                <DrinkItem />
            </div>
        </div>
    )
};