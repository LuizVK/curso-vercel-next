'use client'

import { useCallback, useEffect, useState } from "react"
import getAllColors, { Color, Palette } from "../../lib/tests"
import PaletteColor from "./paletteColor"

export default function MyPalette({ palette }: { palette: Palette}) {
    const [currentColor, setCurrentColor] = useState<string>('#FFFFFF')

    function mouseColorOver(color: string) {
        setCurrentColor(color)
    }

    function forEachPalette() {
        return (palette.map((color: Color, i: number) => (
            <PaletteColor key={`${i.toString()}-${color.name}`} color={color} mouseColorOver={mouseColorOver} />
        )))
    }

    return (
        <div className="w-full min-w-[1000px] h-full rounded-md bg-white px-3 overflow-y-scroll" style={{ backgroundColor: currentColor}}>
            <h1 className="font-bold text-3xl text-center py-10 text-black">Paleta de cores do Tailwind</h1>
            <div className="grid grid-cols-1 gap-y-0.5">
                {forEachPalette()}
            </div>
        </div>
    )
}