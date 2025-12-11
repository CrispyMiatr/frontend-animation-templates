import { useState } from 'react'
import { motion } from 'framer-motion';
import styles from '~styles/app.module.scss';

const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const Dragbox = () => {
    const [boxColor, setBoxColor] = useState("#3333FF");

    return (
        <div className={styles['dragContainer']}>
            <motion.div className={styles['dragContainer__dragBox']}
                drag
                dragConstraints={{ left: -500, right: 500, top: 0, bottom: 150 }}
                onDragEnd={() => setBoxColor(getRandomColor())}
                style={{ backgroundColor: boxColor }}
                whileHover={{ scale: 1.1 }}
                whileDrag={{ scale: 0.9 }}
                transition={{ bounceStiffness: 50 }}
            />
        </div>
    );
};
