import ThemeSection from './ThemeSection.jsx'
import Account from "@/layout/TopBar/Account.jsx";
import Notification from "@/layout/TopBar/Notification.jsx";
import SearchBar from "@/layout/TopBar/SearchBar.jsx";

export default function TopBar() {
    return (
        <div className={"flex items-center justify-between sticky top-0 h-16"}>

            {/* left top bar */}
            <SearchBar/>

            {/* right top bar */}
            <div className={"flex items-center justify-between gap-4 py-3"}>
                <ThemeSection/>
                <Notification/>
                <Account/>
            </div>
        </div>
    )
}
