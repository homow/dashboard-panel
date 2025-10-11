import lapTopImg from "@img/home/Image.webp"

export default function DevMeetUp() {
    return (
        <div className={"bg-main-bg rounded-sm overflow-hidden space-y-4"}>

            {/* img wrapper */}
            <div>
                <img className={"w-full"} src={`${lapTopImg}`} alt="laptop picture" loading={"lazy"}/>
            </div>

            {/* details wrapper */}
            <div className={"px-5 pb-5"}>
                {/* title and sub-title */}
                <div className={"flex flex-row items-center gap-4"}>
                    {/* date wrapper */}
                    <div className={"bg-sky-100 rounded-md p-2.5"}>
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
            </div>
        </div>
    )
}
