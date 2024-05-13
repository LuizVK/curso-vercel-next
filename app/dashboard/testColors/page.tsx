import { Metadata } from "next"
import getAllColors, { Palette } from "../../lib/tests"
import MyPalette from "./myPalette"

export const metadata: Metadata = {
    title: "Color Palette"
}

export default async function Page() {
    const palette: Palette = await getAllColors()

    return (
        <MyPalette palette={palette} />
    )
}