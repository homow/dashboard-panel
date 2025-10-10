import Notification from "./Notification.jsx";
import Account from "./Account.jsx";
import ThemeSection from "./ThemeSection.jsx";
import SearchBar from "../LeftTopBar/SearchBar.jsx";

export default function RightTopBar() {
    return (
        <div className={"flex items-center justify-between gap-4 py-3"}>
            <SearchBar className={"md:hidden"}/>
            <ThemeSection/>
            <Notification/>
            <Account/>
        </div>
    )
}
