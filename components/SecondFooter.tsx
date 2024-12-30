export function SecondFooter() {
    return (
        <div className="flex gap-1.5 justify-center py-4 text-sm font-extralight">
            <p className="opacity-70">© Все права защищены</p>
            <p className="font-extralight opacity-30">/</p>
            <a target="_blank" href="https://github.com/aladairmaxwell/SP" className="opacity-70 transition-colors duration-200 hover:opacity-100 hover:text-blue">github</a>
            <p className="font-extralight opacity-30">/</p>
            <a target="_blank" href="https://discord.gg/XqHb7AhXc3" className="opacity-70 transition-colors duration-200 hover:opacity-100 hover:text-blue">discord</a>
        </div>
    )
}