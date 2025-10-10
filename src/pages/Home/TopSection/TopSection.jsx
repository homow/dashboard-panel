import img1 from "@img/home/3d-image-1.webp"
import img2 from "@img/home/3d-image-2.webp"

function Section3DImages({data}) {
    const {img, title, number, profit, text, bg, color} = data;

    return (
        <div className={`relative flex flex-col gap-5 bg-main-bg rounded-md shadow-custom p-5`}>
            <img className={`absolute right-0 bottom-0`} src={img} alt="3d img"/>

            <p className={"font-medium"}>{title}</p>

            <div>
                <span>{number}</span>
                <span className={"text-green-500"}>{profit}</span>
            </div>

            <span className={`p-2 text-xs font-light rounded-full ${bg} ${color}`}>{text}</span>
        </div>
    )
}

export default function TopSection() {
    const data = [
        {img: img1, title: "Ratings", number: "13K", profit: "+15.6%", text: "Year of 2021", bg: "bg-sky-500/10", color: "bg-sky-500"},
        {img: img2, title: "Sessions", number: "24.5k", profit: "-20%", text: "Last Week", bg: "bg-gray-500/10", color: "bg-gray-500"},
    ];

    return (
        <div>
            <Section3DImages data={data[0]}/>
            <Section3DImages data={data[1]}/>
        </div>
    )
}
