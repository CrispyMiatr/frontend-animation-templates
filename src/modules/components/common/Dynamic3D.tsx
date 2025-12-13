import { motion, useAnimationFrame } from "framer-motion"
import { useRef, useState } from "react"
import type { Dynamic3DType } from "~/shared"
import '~styles/components/dynamic-3D.scss'

export const Dynamic3D = ({ speed, cubeStyle, visibleSides }: Dynamic3DType) => {
    const ref = useRef<HTMLDivElement>(null)
    const timeRef = useRef(0)
    const [dragColor, setDragColor] = useState<string>("");

    useAnimationFrame((t, delta) => {
        if (!ref.current) return

        timeRef.current += delta * speed
        const currentTime = timeRef.current

        const rotate = Math.sin(currentTime / 10000) * 250
        const y = (1 + Math.sin(currentTime / 1000)) * -35
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

    return (
        <div className="cube-wrapper" style={{ height: '370px' }}>
            <motion.div
                className="cube-container"
                drag
                dragConstraints={{ left: -300, right: 300, top: -100, bottom: 100 }}
                whileHover={{ cursor: "grab" }}
                whileDrag={{ scale: 0.9, cursor: "grabbing" }}
                transition={{ bounceStiffness: 50 }}
            >
                <div className="cube" ref={ref}>
                    <div
                        className={getSideClass('front')}
                        style={{ ...resetStyle, opacity: visibleSides[0] ? 1 : 0 }}
                    />
                    <div
                        className={getSideClass('back')}
                        style={{ ...resetStyle, opacity: visibleSides[1] ? 1 : 0 }}
                    />

                    <div
                        className={getSideClass('left')}
                        style={{ ...resetStyle, opacity: visibleSides[2] ? 1 : 0 }}
                    />

                    <div
                        className={getSideClass('right')}
                        style={{ ...resetStyle, opacity: visibleSides[3] ? 1 : 0 }}
                    />

                    <div
                        className={getSideClass('top')}
                        style={{ ...resetStyle, opacity: visibleSides[4] ? 1 : 0 }}
                    />

                    <div
                        className={getSideClass('bottom')}
                        style={{ ...resetStyle, opacity: visibleSides[5] ? 1 : 0 }}
                    />
                </div>
            </motion.div>
        </div>
    );
};