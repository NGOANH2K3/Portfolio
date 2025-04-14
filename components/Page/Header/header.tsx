import Link from "next/link";
import Image from "next/image";
import { ButtonMenuMobile } from "@/components/Page/Header/buttonMenuMobile";
import { useState } from "react";
import { MobileNavigation } from "@/components/Page/Header/mobileNavigation";
import { Navigation } from "@/components/Page/Header/navigation";
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface IHeaderProps {}
export function Header ({}:IHeaderProps) {
    const [showMenu,setShowMenu] = useState(false)
    return (
        <header className=" fixed w-full z-50">
            <nav className="py-4 bg-background">
                <div className="container flex flex-wrap justify-between items-center mx-auto">
                    {/* logo */}
                    <Link href="/" className="flex items-center">
                        <span className="mr-3 aspect-square h-6 sm:h-9 relative overflow-hidden rounded-full">
                            <Image
                            src="/images/avatar.jpg"
                            alt="logo"
                            fill
                            priority
                            style={{ objectFit: 'cover' }}
                            />
                        </span>
                        <span className="self-center text-xl font-semibold whitespace-nowrap">Ngo Anh</span>
                    </Link>
                    {/* button mobile */}
                    <ButtonMenuMobile active={showMenu} onClick={()=>setShowMenu(!showMenu)} />
                    {/* Nevigation */}
                    <Navigation/>
                </div>
            </nav>
            <MobileNavigation active={showMenu} />
        </header>
    )
}