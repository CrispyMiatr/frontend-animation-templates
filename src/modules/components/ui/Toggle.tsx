import { motion } from "framer-motion";
import type { ToggleType } from "~/shared";
import '~styles/components/toggle.scss'

export const Toggle = ({ isActive, onToggle }: ToggleType) => {
    return (
        <button
            className="toggle-container"
            style={{
                justifyContent: "flex-" + (isActive ? "end" : "start"),
                opacity: isActive ? 1 : 0.5
            }}
            onClick={onToggle}
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