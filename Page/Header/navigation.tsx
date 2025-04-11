import Link from "next/link"

export const menu = [
    {
        title: 'Home',
        path: '/#hero'
    },
    {
        title: 'About',
        path: '/#about'
    },
    {
        title: 'Project',
        path: '/#project'
    },
    {
        title: 'Contact',
        path: '/#contact'
    },
    

]
export function Navigation () {
    return (
        <div className="hidden md:block w-fit">
            <ul className="flex gap-16 font-medium">
                {menu.map((item, index)=>(
                    <li key={index}>
                        <Link href={item.path}  legacyBehavior>
                            <a className="cursor-pointer block text-stone-100 hover:underline hover:text-indigo-300 transition">
                                {item.title}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}