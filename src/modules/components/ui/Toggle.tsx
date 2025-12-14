import { useState } from "react";
import { motion } from "framer-motion";
import type { ToggleType } from "~/shared";
import '~styles/components/toggle.scss'

export const Toggle = ({ isActive, onToggle }: Partial<ToggleType>) => {
    const [internalIsActive, setInternalIsActive] = useState(false);
    const isControlled = isActive !== undefined;
    const active = isControlled ? isActive : internalIsActive;

    const handleClick = () => {
        if (isControlled && onToggle) {
            onToggle();
        } else {
            setInternalIsActive(!internalIsActive);
        }
    };

    return (
        <button
            className="toggle-container"
            style={{
                justifyContent: "flex-" + (active ? "end" : "start"),
                opacity: active ? 1 : 0.6
            }}
            onClick={handleClick}
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