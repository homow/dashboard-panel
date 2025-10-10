

function Section3DImages({data}) {
    const {img, title, number, profit, text, bg, color} = data;

    return (
        <div className={"relative flex flex-col gap-5 bg-main-bg rounded-md shadow-custom p-5"}>
            <img className={"absolute right-0 bottom-0"} src={img} alt="3d img"/>

            <strong>{title}</strong>

            <div>
                <span>{number}</span>
                <span className={"text-green-500"}>{profit}</span>
            </div>

            <span className={`p-1 rounded-full ${bg} ${color}`}>{text}</span>
        </div>
    )
}

export default function TopSection() {
    const data = [
        {img:}
    ];

    return (
        <div>
            <Section3DImages/>
        </div>
    )
}
