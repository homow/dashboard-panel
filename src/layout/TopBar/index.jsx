import ThemeSection from './ThemeSection.jsx'
import Account from "@/layout/TopBar/Account.jsx";

export default function TopBar() {
    return (
        <div className={"flex items-center justify-between"}>
            <div className={"flex items-center justify-between gap-2"}>
                <ThemeSection/>
                <Account/>
            </div>
        </div>
    )
}
