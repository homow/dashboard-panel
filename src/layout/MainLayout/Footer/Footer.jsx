function FooterCopyright() {
    return (
        <div>
            © 2025, Developed with ❤️ by <a target="_blank" href="https://card.homow.ir" className={"text-sky-500"}>homow</a>
        </div>
    )
}

function FooterLinks() {
    return (
        <div className={"flex flex-row items-center gap-4"}>
            <a target="_blank" href="https://github.com/homow" className={"text-sky-500"}>GitHub</a>
            <a target="_blank" href="https://homow.ir" className={"text-sky-500"}>Website</a>
            <a target="_blank" href="https://youtube.com/@homow_dev" className={"text-sky-500"}>YouTube</a>
            <a target="_blank" href="https://t.me/homow_dev" className={"text-sky-500"}>Telegram</a>
        </div>
    )
}

export default function Footer({className}) {
    return (
        <div className={`fixed bottom-0 right-0 left-0 w-full flex flex-row justify-between py-3 pr-6 pl-[calc(var(--spacing-custom)+24px)] bg-primary-bg ${className}`}>
            <FooterCopyright/>
            <FooterLinks/>
        </div>
    )
}
