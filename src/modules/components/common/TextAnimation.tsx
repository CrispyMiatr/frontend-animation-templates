import { motion } from 'framer-motion';
import type { TitleAnimationType, ScrollTextType } from '~/shared';
import styles from '~styles/app.module.scss';

export const TitleAnimation = ({ text }: TitleAnimationType) => {
    return (
        <motion.h1
            className={styles['animated-title']}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
                duration: 1,
                ease: 'easeInOut',
            }}
        >
            {text}
        </motion.h1>
    );
};

const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

export const ScrollText = ({ items }: ScrollTextType) => {
    return (
        <div className={styles['scroll-container']}>
            {items.map((text, index) => (
                <motion.p
                    key={index}
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.25,
                    }}
                >
                    {text}
                </motion.p>
            ))}
        </div>
    );
};