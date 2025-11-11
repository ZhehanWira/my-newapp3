import { ReactNode } from "react"

type Props = {
   children: ReactNode
   type: "button" | "submit" | "reset",
   onClick?: () => void
   className?: string
}

export const ButtonSuccess = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-green-600 text-white rounded-md py-2 px-4 hover:bg-green-700 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>

            {children}
       </button>
   )
}


export const ButtonWarning = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}


export const ButtonDanger = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}

export const ButtonSuccessOutline = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-white text-green-500 rounded-md border border-green-500 py-2 px-4 hover:bg-green-700 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}

export const ButtonDangerOutline = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-white text-red-500 rounded-md border border-red-500 py-2 px-4  hover:bg-red-700  font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}

export const ButtonInfoOutline = ({ children, type, onClick, className }: Props) => {
   return (
       <button className={`text-sm bg-white text-blue-500 rounded-md border border-blue-500 py-2 px-4 hover:bg-blue-700 font-bold ${className}`}
           type={type} onClick={() => { if (onClick) onClick() }}>
           {children}
       </button>
   )
}


