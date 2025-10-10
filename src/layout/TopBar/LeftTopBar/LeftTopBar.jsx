import SearchBar from "./SearchBar.jsx";
import OpenMobileNavMenuBtn from "./OpenMobileNavMenuBtn.jsx";

export default function LeftTopBar({setMobileNavOpen}) {
    return (
        <div>
            <OpenMobileNavMenuBtn setMobileNavOpen={setMobileNavOpen} />
            <SearchBar className={"hidden md:block"}/>
        </div>
    )
}
