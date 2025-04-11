import { menu } from "@/components/Page/Header/navigation";
import classNames from "classnames";
import Link from "next/link";

export function MobileNavigation({ active }: { active: boolean }){
    return (
        <div className={classNames('w-full md:hidden transition-all bg-background translate-t-full', {
            'opacity-100 h-[calc(100vh_-_72px)]':active,
            'opacity-0 h-0': !active
        })}>
            <ul className="container flex flex-col gap-8 lg:gap-12 py-4 pb-14 text-center items-center justify-center h-full">
                {menu.map((item, index)=>(
                    <li key={index}>
                        <Link href={item.path}  legacyBehavior>
                            <a className="cursor-pointer block transition py-3 px-4 text-2xl text-light hover:underline hover:text-indigo-300">
                                {item.title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}