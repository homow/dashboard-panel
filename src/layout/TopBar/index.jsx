import ThemeSection from './ThemeSection.jsx'
import Account from "@/layout/TopBar/Account.jsx";
import Notification from "@/layout/TopBar/Notification.jsx";
import SearchBar from "@/layout/TopBar/SearchBar.jsx";

export default function TopBar() {
    return (
        <div className={"flex items-center justify-between"}>

            {/* left top bar */}
            <SearchBar/>

            {/* right top bar */}
            <div className={"flex items-center justify-between gap-2"}>
                <ThemeSection/>
                <Notification/>
                <Account/>
            </div>
        </div>
    )
}
