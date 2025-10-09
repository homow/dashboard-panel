export default function SideBarHeader({collapsed, setCollapsed}) {

    const toggleCollapse = () => {
        document.documentElement.style.setProperty(
            "--spacing-custom",
            !collapsed ? "80px" : "260px"
        );
        setCollapsed(!collapsed)
    };

    return (
        <div className={"relative flex items-center justify-between h-16"}>

            {/* brand and logo */}
            <div className={"pl-4 flex flex-row items-center gap-2"}>
                {/*<img className={"w-7.5"} src={`${logo}`} alt="Logo"/>*/}
                <span>
                    <svg className={"w-7.5 h-[23px]"}>
                        <use href="#logo-icon"></use>
                    </svg>
                </span>
                <strong className={`${collapsed && "hidden"}`}>MATERIAL</strong>
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
    );
};
