import Image from 'next/image'
import Link from 'next/link'
const HeroImage = ()=>{
    return (
        <div className="w-full relative">
            <div className="w-1/2  max-w-md lg:max-w-3/7 md:w-1/2 lg:w-2/3  aspect-square rounded-full overflow-hidden block mx-auto relative shrink-0">
                <Image src="/images/hero.jpg" alt="main hero" fill style={{ objectFit: 'cover' }}/>
                <div className='hidden lg:block absolute h-1 w-1 scale-[2.1] translate-y-12 -translate-x-8 border border-stone-700 rounded-full'></div>
            </div>

            <div className="z-10 w-full  md:max-w-xl lg:max-w-lg scale-110 aspect-[8/7] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute">
                <Image src={'/images/decors/decor 3d.png'} alt='3d' fill/>
            </div>
        </div>
    )
    
  
    
}

const HeroContent = ()=>{
    return <div className='bg-background lg:order-first py-8 lg:py-12 flex flex-col gap-8 xl:gap-10 relative lg:max-w-lg shrink-0'>
        <div className='aspect-square absolute top-0 -right-10 w-5 translate-x-full'>
            <Image src={'/images/decors/decor plus.png'} alt='plus' fill/>    
        </div>
        <div className="flex flex-col gap-6 lg:gap-8">
            <h1 className="heading-01">Ngô Anh</h1>
            <div className="flex flex-col gap-4">
                <p className="p-light2 lg:text-lg lg:leading-loose">
                    Web developer. I love building interfaces, web app, and everything between!
                </p>
                <p className="p-light lg:text-lg lg:leading-loose font-medium">
                    👉 ngo24395@gmail.com
                </p>
            </div>
            <ul className="p-light2 flex gap-12">
                <li className="hover:underline text-indigo-300 transition">
                    <a href="#" target='_blank'>Facebook</a>
                    
                </li>
                <li className="hover:underline text-indigo-300 transition">                  
                    <a href="#" target='_blank'>Github</a>
                </li>
                <li className="hover:underline text-indigo-300 transition">
                    <a href="#" target='_blank'>Telegram</a>
                </li>
            </ul>
            <div className="flex gap-4 mt-4">
                <Link href={'/#projects'} legacyBehavior>
                    <a className="text-sm px-5 py-3 flex w-fit gap-2 items-center font-semibold rounded-full transition bg-primary hover:bg-primary2">
                        <span className="relative aspect-square h-6">
                            <Image src={'/images/decors/mdi_magnify.png'} alt={'search'} fill  />
                        </span>
                        <span>My Projects</span>
                    </a>
                </Link>
                <Link href={'/#contact'}  legacyBehavior>
                    <a className="text-sm px-5 py-3 flex w-fit gap-2 items-center font-semibold rounded-full transition border-2 border-dark1 hover:bg-dark1">
                        
                        <span>contact</span>
                    </a>
                </Link>
            </div>
        </div>
    </div>
}

export function HeroSection(){
    return (
        <section id="hero" className="overflow-hidden pt-16">
            <div className="container max-w-none relative">
                <div className="w-16 aspect-[27/22] absolute bottom-1/2 right-0 translate-y-1/2 -translate-x-1/3">
                    <Image src={'/images/decors/decor dots.png'} alt='dots' fill/>
                </div>
                <div className="absolute bottom-1/4 left-0 w-10 aspect-square translate-y-1/2 translate-x-full">
                    <Image src={'/images/decors/decor plus.png'} alt='plus' fill/>
                </div>
                <div className="py-10 lg:py-14 flex flex-col lg:items-center lg:flex-row lg:gap-10 xl:gap-16">
                    <HeroImage/>
                    <HeroContent/>
                </div>
            </div>
        </section>
    )
}