import {useCollapsedMenu} from "@/context/CollapsedMenuContext";
import Icon from "@components/ui/icons/Icon";
import {cn} from "@/lib/utils.js";

export default function SideBarHeader() {
    const {collapsed, setCollapsed, currentCollapsed} = useCollapsedMenu();

    // toggle collapse when click to button
    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <div className={"relative flex items-center justify-between h-16"}>

            {/* brand and logo */}
            <a target="_blank" href="https://homow.ir" className={"pl-4 flex flex-row items-center gap-2 hover:opacity-100"}>
                <Icon icon={"logo"} className={"w-7.5 h-[23px]"}/>
                <span className={cn("font-medium", currentCollapsed && "hidden")}>MATERIAL</span>
            </a>

            <span
                onClick={toggleCollapse}
                className={cn("hidden md:flex absolute -right-5.5 cursor-pointer transition-all duration-500", collapsed && "-rotate-180")}
            >
                <Icon className={"size-5.5"} icon={"chevronDoubleRight"}/>
            </span>
        </div>
    );
};
