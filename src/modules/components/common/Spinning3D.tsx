import { useAnimationFrame } from "framer-motion"
import { useRef } from "react"
import type { Spinning3DType } from "~/shared"
import '~styles/components/spinning-3D.scss'

export const Spinning3D = ({ speed }: Spinning3DType) => {
    const ref = useRef<HTMLDivElement>(null)
    const timeRef = useRef(0)

    useAnimationFrame((t, delta) => {
        if (!ref.current) return

        timeRef.current += delta * speed
        const currentTime = timeRef.current

        const rotate = Math.sin(currentTime / 10000) * 250
        const y = (1 + Math.sin(currentTime / 1000)) * -35
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`
    })

    return (
        <div className="cube-container">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
        </div>
    )
}