import { motion } from 'framer-motion';

export const TitleAnimation = () => {
    return <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{
            duration: 1,
            ease: 'easeInOut',
        }}
        className="animated-title">Hello there</motion.h1>;
};

const textContents = [
    "I am title 1",
    "Title twoooo",
    "Say hi to title 3"
];

const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
};

export const ScrollText = () => {
    return (
        <>
            <div className="scroll-container">
                {textContents.map((text, index) => (
                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        whileInView="visible"
                        transition={{
                            duration: 0.5,
                            delay: index * 0.25,
                        }}
                    >
                        {text}
                    </motion.p>
                ))}
            </div>
        </>
    );
};