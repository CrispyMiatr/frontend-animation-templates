import { useState } from 'react';
import { Button, Dynamic3D, RangeSlider, ScrollText, TitleAnimation, Toggle } from '~/components';
import styles from '~styles/pages/home.module.scss';
import buttonStyles from '~styles/components/dynamic-3D-buttons.module.scss';

export const Home = () => {
    const [speed, setSpeed] = useState(1);
    const [currentStyle, setCurrentStyle] = useState(buttonStyles['btn1']);
    const [visibleSides, setVisibleSides] = useState<boolean[]>([false, false, false, false, false, false]);

    // Easter Egg: Check conditions in Home
    const isStyle4 = currentStyle === buttonStyles['btn4'];
    const isFullyVisible = visibleSides.every(side => side === true);
    const isCorrectSpeed = Math.abs(speed - 4.2) < 0.01;
    const easterEggReady = isStyle4 && isFullyVisible && isCorrectSpeed;

    const handleToggle = (clickedIndex: number) => {
        setVisibleSides(prev => {
            const newSides = [...prev];

            // Toggle the clicked switch
            newSides[clickedIndex] = !newSides[clickedIndex];

            // Puzzle Logic:
            // Requested Order: 2 -> 5 -> 6 -> 3 -> 1 -> 4
            // Indices Order:   1 -> 4 -> 5 -> 2 -> 0 -> 3

            // To force "Index 1 before Index 4", Index 1 must deactivate Index 4.
            const deactivationMap: Record<number, number> = {
                1: 4, // 2 turns off 5
                4: 5, // 5 turns off 6
                5: 2, // 6 turns off 3
                2: 0, // 3 turns off 1
                0: 3, // 1 turns off 4
            };

            // Turn false -> deactivationmap
            const targetToTurnOff = deactivationMap[clickedIndex];
            if (targetToTurnOff !== undefined) {
                newSides[targetToTurnOff] = false;
            }

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
                <TitleAnimation text='Interactive Puzzle' />
                <ScrollText
                    items={[
                        "Solve the puzzle!",
                        "Play around with the toggles and make something appear.",
                        "Apply different styles with the buttons below.",
                        "What happens if you drag the cube, and set Speed to 4.2?"
                    ]}
                />
            </div>

            <div className={styles['home-container__wrap']}>
                <div className={styles['home-container__wrap__grid']}>
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
                    easterEggReady={easterEggReady}
                />
                <div className={styles['home-container__wrap__controls']}>
                    <RangeSlider
                        label="Animation Speed:"
                        value={speed}
                        min={0}
                        max={10}
                        step={0.1}
                        onChange={setSpeed}
                    />
                </div>
            </div>

            <div className={styles['home-container__wrap']}>
                <div className={styles['home-container__wrap__grid']}>
                    {visibleSides.map((isOn, index) => (
                        <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <p className='toggle-label' style={{ fontWeight: 'bold', marginBottom: '5px' }}>{index + 1}</p>
                            <Toggle
                                isActive={isOn}
                                onToggle={() => handleToggle(index)}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};