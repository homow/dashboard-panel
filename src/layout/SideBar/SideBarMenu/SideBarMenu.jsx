import {Link} from "react-router-dom";

function SideBarLinks(props) {
    const {title, dataLinks} = props.data;

    return (
        <div>
            {/* title links */}
            <p className={"text-sm text-disable-txt"}>{title}</p>

            {/* list of links */}
            <ul className={"mt-3"}>
                {dataLinks && dataLinks.map(link => (
                    <li key={link.text}>
                        <Link to={link.url} className="flex flex-row gap-2 w-full">

                            {/* icon */}
                            <span>
                                <svg className={"size-4"}>
                                    <use href={`#${link.icon}-icon`}></use>
                                </svg>
                            </span>

                            {/* text of link */}
                            <span>
                                {link.text}
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function SideBarMenu() {
    const dataLinks = [
        {
            title: "Dashboard", dataLinks: [
                {text: "Analytics", url: "/analytics", icon: "analyze"}
            ]
        },
        {
            title: "Dashboard", dataLinks: [
                {text: "Analytics", url: "/analytics", icon: "analyze"}
            ]
        }
    ];

    return (
        <div>

        </div>
    )
}
