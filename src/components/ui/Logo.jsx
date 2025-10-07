import {Link} from "react-router-dom";
import logo from "@/assets/logo.webp"

export default function Logo({className}) {
    return (
        <Link className={`w-full inline-block hover:opacity-100 ${className}`} to={"/"}>
            <img className={"w-full"} src={`${logo}`} alt="Logo picture"/>
        </Link>
    )
}
