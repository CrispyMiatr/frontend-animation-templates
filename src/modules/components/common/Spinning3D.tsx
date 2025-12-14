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
        <div className="s-cube-container">
            <div className="s-cube" ref={ref}>
                <div className="s-side s-front" />
                <div className="s-side s-left" />
                <div className="s-side s-right" />
                <div className="s-side s-top" />
                <div className="s-side s-bottom" />
                <div className="s-side s-back" />
            </div>
        </div>
    )
}