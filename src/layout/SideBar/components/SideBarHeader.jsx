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
                <span>
                    <svg className={"w-7.5 h-[23px]"}>
                        <use href="#logo-icon"></use>
                    </svg>
                </span>
                <span className={cn("font-bold", currentCollapsed && "hidden")}>MATERIAL</span>
            </a>

            <span
                onClick={toggleCollapse}
                className={cn("hidden md:inline absolute -right-5.5 cursor-pointer transition-all duration-500", collapsed && "-rotate-180")}
            >
                <Icon icon={"chevronDoubleRight"}/>
            </span>
        </div>
    );
};
