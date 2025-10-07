import logo from "@/assets/left-side/Logo.webp"

export default function TopSideBar() {
    return (
        <div className={"flex flex-wrap items-center justify-between h-16"}>

            {/* brand and logo */}
            <div className={"pl-4 flex flex-row items-center gap-2"}>
                <img className={"w-7.5"} src={`${logo}`} alt="Logo"/>
                <strong>MATERIO</strong>
            </div>

            <span className={`cursor-pointer ${""}`}>
                <svg className={"size-5"}>
                    <use href="#chevronDoubleRight-icon"></use>
                </svg>
            </span>
        </div>
    )
}
