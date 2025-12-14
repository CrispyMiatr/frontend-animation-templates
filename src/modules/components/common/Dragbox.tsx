import { useRef, useState } from 'react'
import { motion } from 'framer-motion';
import styles from '~styles/pages/assets.module.scss';

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

    const constraintsRef = useRef(null);

    return (
        <div className={styles['dragContainer']} ref={constraintsRef}>
            <motion.div className={styles['dragContainer__dragBox']}
                drag
                dragConstraints={constraintsRef}
                dragElastic={0.2}
                onDragEnd={() => setBoxColor(getRandomColor())}
                style={{ backgroundColor: boxColor }}
                whileHover={{ scale: 1.1 }}
                whileDrag={{ scale: 0.9 }}
                transition={{ bounceStiffness: 50 }}
            />
        </div>
    );
};