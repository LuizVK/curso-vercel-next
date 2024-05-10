import getAllColors, { Palette } from "../../lib/tests"
import MyPalette from "./myPalette"

export default async function Page() {
    const palette: Palette = await getAllColors()

    return (
        <MyPalette palette={palette} />
    )
}