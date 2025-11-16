import Notification from "./Notification";
import Account from "./Account";
import ThemeSection from "./ThemeSection";
import SearchBar from "./SearchBar";

export default function RightTopBar() {
    return (
        <div className={"flex items-center justify-between gap-4 py-3 md:flex-1"}>

            {/* search bar */}
            <SearchBar/>

            <div className={"flex items-center justify-between gap-4 py-3"}>
                <ThemeSection/>
                <Notification/>
                <Account/>
            </div>
        </div>
    )
}
