import classNames from "classnames";
import { ReactNode, useEffect } from "react";

export interface ModalProps {
    show: boolean,
    onClose: () => void,
    modalTitle: string,
    children: ReactNode,
    footer?: ReactNode,
}

export function OverlayShadow ({closeModal,show}: {closeModal:()=> void, show:boolean}){
    return(
        <>
            {show && (
                <div onClick={closeModal} className="fixed z-0 top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            )}        
        </>
    )
}

export function ColseBtn({closeModal}: {closeModal:()=> void}) {
    return(
        <button onClick={closeModal} className="rounded-sm h-8 w-8 flex place-items-center place-content-center shrink-0 transition bg-gray-800 hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 aspect-square">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>

        </button>
    )
}

export function Modal({children,onClose,show,modalTitle}:ModalProps){

    useEffect(()=>{
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        show && document.body.classList.add('overflow-hidden')
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        !show && document.body.classList.remove('overflow-hidden')
    },[show]);

    return(
        <div className={classNames('fixed w-full h-full overflow-y-auto z-[100] top-0 left-0 ', {
            'opacity-100 ':show,
            'opacity-0 top-full':!show,
        })}>
            <OverlayShadow closeModal={onClose} show={show} />
            <div className={classNames('py-10 lg:py-10 transition-all container lg:px-10 relative z-50 max-w-2xl',{
                'opacity-100 top-0':show,
                'opacity-0 -top-full':!show,
            })}>
                <div className="relative flex flex-col mx-auto bg-background w-full rounded-lg">
                    <header className={'relative z-10 py-3 flex gap-3 justify-between items-center shadow px-4 lg:px-5'}>
                        <h3 className="w-full font-bold font-title text-xl">{modalTitle}</h3>
                        <ColseBtn closeModal={onClose}/>
                    </header>
                    <div className="p-4 lg:p-8">{children}</div>
                </div>
            </div>
        </div>
    )
}