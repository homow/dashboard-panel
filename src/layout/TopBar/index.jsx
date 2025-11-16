import RightTopBar from './RightTopBar/RightTopBar'
import LeftTopBar from "./LeftTopBar/LeftTopBar";

export default function TopBar() {
    return (
        <header className={"flex items-center justify-between top-0 h-16 md:justify-end"}>

            {/* left top bar */}
            <LeftTopBar/>

            {/* right top bar */}
            <RightTopBar/>
        </header>
    )
}
