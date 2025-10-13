export default function Button({children, ...props}) {
    return (
        <button {...props} className={"bg-sky-500 text-white text-sm cursor-pointer font-medium rounded-md px-2.5 py-2 disabled:bg-sky-700 hover:bg-sky-700 active:bg-sky-700 transition-all"}>
            {children}
        </button>
    )
}
