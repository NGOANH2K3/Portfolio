import { ButtonHTMLAttributes } from "react";
import classNames from 'classnames'
export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement>{
    active: boolean
}

export function ButtonMenuMobile ({active, ...rest}:IButton)  {
    return (
        <button 
            {...rest}
            type="button" 
            className="
            inline-flex items-center p-2 ml-3 text-sm text-stone-400 rounded-lg md:hidden hover:text-stone-200  hover:bg-stone-900 focus:outline-none focus:ring-2 focus:ring-gray-700
            " 
        >
        <span className="sr-only">
            Open main menu
        </span>
        <svg 
            className={classNames("w-5 h-5" ,{
                hidden: active,
            })} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 17 14"
        >
            <path 
                fillRule="evenodd"
                clipRule={'evenodd'}
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M1 1h15M1 7h15M1 13h15"
            />
        </svg>
        <svg 
            className={classNames("w-5 h-5" ,{
                hidden: !active,
            })} 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 17 14"
        >
            <path 
                fillRule="evenodd"
                clipRule={'evenodd'}
                stroke="currentColor" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M4 4L13 13M13 4L4 13"
            />
        </svg>
    </button>
    )
}