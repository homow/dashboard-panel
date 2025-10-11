import img1 from "@img/home/3d-image-1.webp"
import img2 from "@img/home/3d-image-2.webp"

// section 3D image profit
function Section3DImages({data}) {
    const {img, title, number, profit, text, bg, color} = data;

    return (
        <div className={`relative w-full space-y-5 bg-main-bg rounded-md shadow-custom p-5`}>
            <img className={`absolute right-0 -bottom-5`} src={img} alt="3d img"/>

            <p className={"font-medium"}>{title}</p>

            <div className={"space-x-1"}>
                <span className={"font-medium text-lg md:text-xl 2xl:text-2xl"}>{number}</span>
                <span className={"text-xs text-green-500"}>{profit}</span>
            </div>

            <span className={`p-1.5 text-xs rounded-full ${bg} ${color}`}>{text}</span>
        </div>
    )
}

export default function TopSection() {
    const data = [
        {img: img1, title: "Ratings", number: "13K", profit: "+15.6%", text: "Year of 2021", bg: "bg-sky-500/10", color: "text-sky-500"},
        {img: img2, title: "Sessions", number: "24.5k", profit: "-20%", text: "Last Week", bg: "bg-gray-500/10", color: "text-gray-400"},
    ];

    return (
        <section id="top-section" className={"grid grid-cols-2 gap-6"}>
            <Section3DImages data={data[0]}/>
            <Section3DImages data={data[1]}/>
        </section>
    )
}
