import { useState } from 'react';
import { Button, Dynamic3D, RangeSlider, ScrollText, TitleAnimation, Toggle } from '~/components';
import styles from '~styles/pages/home.module.scss';
import buttonStyles from '~styles/components/dynamic-3D-buttons.module.scss';

export const Home = () => {
    const [speed, setSpeed] = useState(1);
    const [currentStyle, setCurrentStyle] = useState(buttonStyles['btn1']);
    const [visibleSides, setVisibleSides] = useState<boolean[]>([true, true, true, true, true, true]);

    const handleToggle = (index: number) => {
        setVisibleSides(prev => {
            const newSides = [...prev];
            newSides[index] = !newSides[index];
            return newSides;
        });
    };

    const buttons = [
        { name: "Style 1", variant: "btn1" },
        { name: "Style 2", variant: "btn2" },
        { name: "Style 3", variant: "btn3" },
        { name: "Style 4", variant: "btn4" },
        { name: "Style 5", variant: "btn5" },
        { name: "Style 6", variant: "btn6" },
    ];

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
                <div className={styles['home-container__wrap__grid']} style={{ marginBottom: '20px' }}>
                    {buttons.map((btn, i) => (
                        <div key={i} onClick={() => setCurrentStyle(buttonStyles[btn.variant])}>
                            <Button name={btn.name} variant={btn.variant} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles['home-container__wrap']}>
                <Dynamic3D
                    speed={speed}
                    cubeStyle={currentStyle}
                    visibleSides={visibleSides}
                />
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

            <div className={styles['home-container__wrap']}>
                <div className={styles['home-container__wrap__grid']}>
                    {visibleSides.map((isOn, index) => (
                        <Toggle
                            key={index}
                            isActive={isOn}
                            onToggle={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};