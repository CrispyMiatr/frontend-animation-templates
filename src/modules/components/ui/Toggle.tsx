import { motion } from "framer-motion";
import { useState } from "react"
import '~styles/components/toggle.scss'

export const Toggle = () => {
    const [isOn, setIsOn] = useState(false)

    const toggleSwitch = () => setIsOn(!isOn)

    return (
        <button
            className="toggle-container"
            style={{
                justifyContent: "flex-" + (isOn ? "start" : "end"),
            }}
            onClick={toggleSwitch}
        >
            <motion.div
                className="toggle-handle"
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.3,
                }}
            />
        </button>
    )
}