import { Modal } from "@/components/modal";
import Image from "next/image";
import { useState } from "react";
// import ReactPlayer from 'react-player'
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });
const project_data: ProjectItemProps[] =[
    {
        image_url: '/images/Rectangle 12.png',
        title: 'project 01',
        video_url: 'https://www.youtube.com/watch?v=SR4dFgdKUyI',
        date: 'Aprill 2025',
        desc: 'Stacks: NextJs, TailwindCSS, TypeScript <br/>' + 
            'For this projects: based on the old site from WordPress, I was recreating the site with Nextjs and TailwindCSS.',
    },
    {
        image_url: '/images/Rectangle 12.png',
        title: 'project 01',
        github_link: 'https://github.com/NGOANH2K3',
        video_url: 'https://www.youtube.com/watch?v=SR4dFgdKUyI',
        date: 'Aprill 2025',
        desc: 'Stacks: NextJs, TailwindCSS, TypeScript <br/>' + 
        'For this projects: based on the old site from WordPress, I was recreating the site with Nextjs and TailwindCSS.',
    },
    {
        image_url: '/images/Rectangle 12.png',
        title: 'project 01',
        video_url: 'https://www.youtube.com/watch?v=SR4dFgdKUyI',
        date: 'Aprill 2025',
        desc: 'Stacks: NextJs, TailwindCSS, TypeScript <br/>' + 
            'For this projects: based on the old site from WordPress, I was recreating the site with Nextjs and TailwindCSS.',
    },
    
]

export interface ProjectItemProps{
    image_url: string
    title: string
    preview_link?: string
    github_link?: string
    date: string
    desc: string
    video_url?: string
    openModal?: () => void
    
}

export function ProjectItem({image_url, title, preview_link, github_link, date, desc, video_url, openModal}:ProjectItemProps){
    return(
        <div className="flex flex-col gap-6 lg:gap-10 lg:flex-row lg:items-center">
            <div className="flex-col gap-3 lg:gap-5 shrink-0 w-full block max-w-lg">
                <div className="group relative transition w-full block max-w-lg rounded-lg aspect-[3/2] overflow-hidden">
                    {video_url && (
                        <div className="group-hover:opacity-100 opacity-0 transition">
                            <button 
                                onClick={openModal} 
                                className="hover:opacity-75 transition absolute z-20 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-stone-800">
                                    <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-20 h-20">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                    </svg>
                            </button>
                            <div className="absolute w-full h-full left-0 top-0 bg-white bg-opacity-30 z-10"></div>
                        </div>
                    )}
                    <Image src={image_url} alt={title} fill objectFit="cover" objectPosition="center"/>
                </div>
                <p className="font-medium tracking-wide text-lg lg:text-2xl lg:text-right">{date}</p>
            </div>
            <div className="flex flex-col gap-3">
                <h4 className="text-2xl lg:text-5xl lg:leading-normal tracking-wide font-medium">{title}</h4>
                <div className="text-sm leading-loose">
                    {preview_link && (
                        <div className="flex gap-3">
                            <span>Link:</span>
                            <a href={preview_link} className="hover:underline text-indigo-200" target="_blank">
                                {preview_link}
                            </a>
                        </div>
                    )}
                    {github_link && (
                        <div className="flex gap-3">
                            <span>Github:</span>
                            <a href={github_link} className="hover:underline text-indigo-200" target="_blank">
                                {github_link}
                            </a>
                        </div>
                    )}
                    {video_url && (
                        <div className="flex gap-3">
                            <button onClick={openModal}>See Video 🎥</button>
                        </div>
                    )}
                </div>

                <p className="p-light2 text-sm" dangerouslySetInnerHTML={{__html: desc}}></p>
            </div>
        </div>
    )
}

export function Project(){
    const [modal, setModal] = useState(false);
    const [modalVideoUrl, setModalVideoUrl] = useState('')
    const [loadPosts,setLoadPosts] = useState(2)

    const openModalVideo = (video_url: string|undefined)=> {
        if(video_url){
            setModalVideoUrl(video_url)
            setModal(true)
        }
    }
    return (
        <section id="project" className="bg-background2">
            <div className="container relative">
                <div className="absolute top-1/2 right-0 w-32 aspect-square translate-x-1/3 xl:-translate-x-1/3">
                    <Image src={'/images/decors/Cube-1.png'} alt="" fill />
                </div>

                <div className="py-14 flex flex-col gap-6 lg:flex-row lg:gap-8 relative z-10 ">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h2 className="heading-01">Project</h2>
                        </div>

                        <div className="border-l border-stone-800 py-6 pl-6 md:pl-10 md:py-10">
                            <div className="flex flex-col gap-16">
                                <p className="p-light2">A collection of my favorites projects I&apos;ve done recenly</p>

                                <div className="flex flex-col gap-20">
                                    {project_data.filter((item,index)=> index < loadPosts).map((item,index)=>(
                                        <ProjectItem openModal={()=> openModalVideo(item.video_url)} {...item} key={index} />
                                    ))}
                                    {loadPosts < project_data.length && (
                                        <button 
                                            onClick={()=>setLoadPosts(loadPosts + 2)} 
                                            className="text-sm px-5 py-3 flex w-fit gap-2 items-center font-semibold rounded-full transition border-2 border-dark1 hover:bg-dark1"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>

                                            <span>load more</span>       
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                show={modal}
                onClose={() => setModal(false)}
                modalTitle="video"            
            >
                <ReactPlayer width={'100%'} height={'24rem'} url={modalVideoUrl}/>
            </Modal>

        </section>
    )
}