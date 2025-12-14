import { motion, useAnimationFrame, useMotionValue } from "framer-motion"
import { useRef, useState } from "react"
import type { Dynamic3DType } from "~/shared"
import '~styles/components/dynamic-3D.scss'

export const Dynamic3D = ({ speed, cubeStyle, visibleSides, easterEggReady }: Dynamic3DType) => {
    const ref = useRef<HTMLDivElement>(null);
    const timeRef = useRef(0);
    const [showEasterEgg, setShowEasterEgg] = useState(false);

    // Track pos
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Check if bottom left
    const checkPosition = () => {
        const currentX = x.get();
        const currentY = y.get();

        // Constraints: left: -500, bottom: 100
        const isBottomLeft = currentX < -350 && currentY > 50;

        if (easterEggReady && isBottomLeft) {
            setShowEasterEgg(true);
        } else {
            setShowEasterEgg(false);
        }
    };

    const handleDrag = () => {
        checkPosition();
    };

    useAnimationFrame((t, delta) => {
        if (!ref.current) return

        timeRef.current += delta * speed
        const currentTime = timeRef.current

        const rotate = Math.sin(currentTime / 10000) * 250
        const y = (1 + Math.sin(currentTime / 1000)) * -20
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    });

    const getSideClass = (position: string) => {
        return `side ${position} ${cubeStyle}`;
    };

    const resetStyle = {
        margin: 0,
        padding: 0,
        width: '100%',
        height: '100%',
        boxSizing: 'border-box' as const
    };

    if (showEasterEgg) {
        return (
            <div
                className="egg-container"
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <img
                    className="easter-egg"
                    src="./src/assets/cat-jumping.gif"
                    alt="You found it the easter egg!"
                />
                <h3>Congratulations! You found the easter-egg!</h3>
            </div>
        )
    }

    return (
        <motion.div
            className="cube-container"
            drag
            style={{ x, y }}
            onDrag={handleDrag}
            dragConstraints={{ left: -500, right: 500, top: -100, bottom: 100 }}
            whileHover={{ cursor: "grab" }}
            whileDrag={{ scale: 0.9, cursor: "grabbing" }}
            transition={{ bounceStiffness: 100 }}
        >
            <div className="cube interactive-3d-container" ref={ref}>
                <div
                    className={getSideClass('front')}
                    style={{ ...resetStyle, opacity: visibleSides[0] ? 1 : 0 }}
                >
                    <h2>⋅</h2>
                </div>

                <div
                    className={getSideClass('back')}
                    style={{ ...resetStyle, opacity: visibleSides[1] ? 1 : 0 }}
                >
                    <h2>⁚</h2>
                </div>

                <div
                    className={getSideClass('left')}
                    style={{ ...resetStyle, opacity: visibleSides[2] ? 1 : 0 }}
                >
                    <h2>⋰</h2>
                </div>

                <div
                    className={getSideClass('right')}
                    style={{ ...resetStyle, opacity: visibleSides[3] ? 1 : 0 }}
                >
                    <h2>⸬</h2>
                </div>

                <div
                    className={getSideClass('top')}
                    style={{ ...resetStyle, opacity: visibleSides[4] ? 1 : 0 }}
                >
                    <h2>⁙</h2>
                </div>

                <div
                    className={getSideClass('bottom')}
                    style={{ ...resetStyle, opacity: visibleSides[5] ? 1 : 0 }}
                >
                    <h2>⁝ ⁝</h2>
                </div>
            </div>
        </motion.div>
    );
};