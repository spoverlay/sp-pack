export function Footer() {
    return (
        <footer className="flex relative gap-1.5 justify-center items-center font-light h-[10dvh]">
            <a target="_blank" href="https://spoverlay.ru" className="opacity-70 transition-all duration-200 hover:opacity-100 hover:text-blue">by spoverlay</a>
            <p className="font-extralight opacity-30">/</p>
            <a target="_blank" href="https://modrinth.com/mod/dynamicpack" className="opacity-70 transition-all duration-200 hover:opacity-100 hover:text-blue">dynamicpack</a>
            <p className="font-extralight opacity-30">/</p>
            <a target="_blank" href="https://spworlds.ru" className="opacity-70 transition-all duration-200 hover:opacity-100 hover:text-blue">spworlds</a>
        </footer>
    )
}