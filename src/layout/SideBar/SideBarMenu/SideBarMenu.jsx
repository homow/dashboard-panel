import {Link} from "react-router-dom";

function SideBarLinks(props) {
    const {title, dataLinks} = props;

    return (
        <div>
            <p className={"text-sm text-disable-txt"}>{title}</p>

            <ul className={"mt-3"}>
                {dataLinks && dataLinks.map(link => (
                    <li key={link.text}>
                        <Link to={link.url} className="flex flex-row gap-2 w-full">
                            <span>
                                <svg className={"size-4"}>
                                    <use href={`#${link.icon}-icon`}></use>
                                </svg>
                            </span>
                            {link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function SideBarMenu() {
    return (
        <div>

        </div>
    )
}
