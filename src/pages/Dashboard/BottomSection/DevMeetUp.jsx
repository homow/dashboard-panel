import cn from "@/lib/utils/cn"
import lapTopImg from "@img/home/Image.webp"

const DevMeetUpDate = ({text, subText, icon}) => {
    return (
        <div className={"flex flex-row gap-2.5 items-start text-secondary-txt text-xs"}>
            <span>
                <svg className={"size-5"}>
                    <use href={`#${icon}-icon`}></use>
                </svg>
            </span>

            <div>
                <p>{text}</p>
                <p>{subText}</p>
            </div>
        </div>
    )
}

const IconActionMeetUP = ({icon, text, color = "text-secondary-txt"}) => {
    return (
        <div className={"flex flex-col items-center justify-center gap-1"}>
            <span>
                <svg className={cn(`size-5 ${color}`)}>
                    <use href={`#${icon}-icon`}></use>
                </svg>
            </span>
            <p className={`text-xs ${color}`}>{text}</p>
        </div>
    )
}

export default function DevMeetUp() {
    return (
        <div className={"bg-main-bg rounded-md shadow-custom overflow-hidden"}>

            {/* img wrapper */}
            <div>
                <img className={"w-full"} src={`${lapTopImg}`} alt="laptop picture" loading={"lazy"}/>
            </div>

            {/* details wrapper */}
            <div className={"px-5 *:py-4 divide-y divide-divider-light"}>
                {/* title and sub-title */}
                <div className={"flex flex-row items-center gap-4"}>
                    {/* date wrapper */}
                    <div className={"bg-sky-100 rounded-md p-2.5 text-center"}>
                        <p className={"text-sm text-sky-600"}>
                            Jan
                        </p>
                        <p className={"text-lg font-medium text-sky-600 md:text-xl"}>
                            24
                        </p>
                    </div>

                    {/* title wrapper */}
                    <div className={"space-y-2"}>
                        <p className={"font-medium"}>Developer Meetup</p>
                        <p className={"text-secondary-txt text-xs"}>
                            The React open source, declarative UI library is the community behind...
                        </p>
                    </div>
                </div>

                {/* icon action wrapper */}
                <div className={"flex flex-row items-center justify-between"}>
                    <IconActionMeetUP icon={"circleTick"} text={"Interested"}/>
                    <IconActionMeetUP icon={"user"} text={"Joined"} color={"text-sky-600"}/>
                    <IconActionMeetUP icon={"star"} text={"Invited"}/>
                    <IconActionMeetUP icon={"horizontalMore"} text={"More"}/>
                </div>

                {/* dev meetup date info */}
                <div className={"space-y-2"}>
                    <DevMeetUpDate text={"Tuesday, 24 january, 10:20 - 12:30"} icon={"clock"} subText={"After 1 week"}/>
                    <DevMeetUpDate text={"The Richard NYC"} icon={"location"} subText={"1305 Lexington Ave, New York"}/>
                </div>
            </div>
        </div>
    )
}
