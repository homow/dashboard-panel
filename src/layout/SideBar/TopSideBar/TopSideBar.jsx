import logo from "@/assets/left-side/Logo.webp"

export default function TopSideBar({collapsed, setCollapsed}) {

    const toggleCollapse = () => {
        document.documentElement.style.setProperty(
            "--spacing-custom",
            !collapsed ? "70px" : "260px"
        );

        setCollapsed(!collapsed)
    }

    return (
        <div className={"relative flex items-center justify-between h-16"}>

            {/* brand and logo */}
            <div className={"pl-4 flex flex-row items-center gap-2"}>
                <img className={"w-7.5"} src={`${logo}`} alt="Logo"/>
                <strong className={`${collapsed && "hidden"}`}>MATERIO</strong>
            </div>

            <span
                onClick={toggleCollapse}
                className={`absolute -right-5.5 cursor-pointer transition-all duration-500 ${collapsed && "-rotate-180"}`}
            >
                <svg className={"size-5"}>
                    <use href="#chevronDoubleRight-icon"></use>
                </svg>
            </span>
        </div>
    )
}
