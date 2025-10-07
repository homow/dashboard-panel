import {useEffect, useState} from "react";

export default function ScrollUp({triggerRef}) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const target = triggerRef?.current;
        if (!target) return;

        const observer = new IntersectionObserver(([entry]) => {
            setVisible(!entry.isIntersecting);
        });

        observer.observe(target);

        return () => observer.disconnect();
    }, [triggerRef]);

    return (
        <a
            id="scroll-up"
            href="#"
            className={`fixed left-2.5 bottom-2.5 p-2 rounded-full bg-violet-600 text-white cursor-pointer z-10 hover:opacity-100 ${visible ? "inline-block" : "hidden"}`}
        >
            <svg className={"size-4"}>
                <use href="#upArrow-icon"></use>
            </svg>
        </a>
    )
}
