import { useState } from 'react';
import { Button, Dragbox, DrinkItem, RangeSlider, ScrollText, Spinning3D, TitleAnimation, Toggle } from '~/components';
import styles from '~styles/pages/home.module.scss';


export const Home = () => {
    const [speed, setSpeed] = useState(1);

    return (
        <div className={styles['home-container']}>
            <div className={styles['home-container__wrap']}>
                <TitleAnimation text='Interactive Puzzle Game' />
                <ScrollText
                    items={[
                        "I am title 1",
                        "Title twoooo",
                        "Say hi to title 3"
                    ]}
                />
            </div>

            <div className={styles['home-container__wrap']}>
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
        </div>
    )
};