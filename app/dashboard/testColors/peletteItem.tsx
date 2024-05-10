'use client'
import clsx from "clsx";
import { useState } from "react";

export default function PaletteItem(
    { colorName, tone, hexColor, mouseColorOver }: 
    { colorName: string, tone: string, hexColor: string, mouseColorOver?: (color:string) => void }
) {

    function handleMouseOverColor(e: any) {
        if (e.target.nodeName === "DIV") {
            const color = e.target?.children[1]?.childNodes[0]?.data ?? ''
            mouseColorOver?.(color)
        }
    }

    function handleMouseLeave(e: any) {
        mouseColorOver?.("#FFFFFF")
    }

    return (
        <div onMouseOver={handleMouseOverColor} onMouseLeave={handleMouseLeave} className={`flex flex-col justify-center items-center h-12 rounded-md bg-${colorName.toLocaleLowerCase()}-${tone}`}>
            <p className={clsx(
                "text-xs",
                {
                    "text-white": Number(tone) >= 600,
                    "text-black": Number(tone) < 600
                }
            )}>
                {tone}
            </p>
            <p className={clsx(
                "text-xs",
                {
                    "text-white": Number(tone) >= 600,
                    "text-black": Number(tone) < 600
                }
            )}>
                {hexColor}
            </p>
        </div>
    )
}