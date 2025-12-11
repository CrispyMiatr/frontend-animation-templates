import type { RangeSliderType } from "~/shared";


export const RangeSlider = ({ value, min = 0, max = 10, step = 0.1, label, onChange }: RangeSliderType) => {
    return (
        <div className="range-slider">
            <label htmlFor="range-input" className="range-slider__label">
                {label} <span className="range-slider__value">×{value.toFixed(1)}</span>
            </label>
            <input
                id="range-input"
                className="range-slider__input"
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(event) => onChange(parseFloat(event.target.value))}
            />
        </div>
    );
};