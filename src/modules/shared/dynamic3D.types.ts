import type { Spinning3DType } from "./spinning3D.types"

export interface Dynamic3DType extends Spinning3DType {
    cubeStyle: string;
    visibleSides: boolean[];
    easterEggReady?: boolean;
}