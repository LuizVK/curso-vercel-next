'use client'

import { Color, Tone } from "../../lib/tests"
import PaletteItem from "./peletteItem"

export default function PaletteColor({ color, mouseColorOver }: { color: Color, mouseColorOver?: (color:string) => void}) {
    function forEachTones(colorName: string, tones: Tone[]) {
        return (tones.map((tone: Tone) => (
            <PaletteItem key={`${color}-${tone.tone}`} colorName={colorName} tone={tone.tone} hexColor={tone.hexColor} mouseColorOver={mouseColorOver} />
        )))
    }

    return (
        <div className="grid grid-cols-12 gap-x-1">
            <div className="flex flex-col justify-center items-center h-12">
                <p className="text-black font-bold text-md capitalize">{color.name}</p>
            </div>
            {forEachTones(color.name, color.tones)}
        </div>
    )
}