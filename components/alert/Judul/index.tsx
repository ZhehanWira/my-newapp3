import { ReactNode } from "react"

type Prop = {
   children: ReactNode
   warna: string
   ukuran : number
}

export const Judul = ({ children, warna, ukuran }: Prop) => {
   return (
       <div>
        <h2 className={`text-${ukuran}xl 
        font-bold text-${warna}-500`}>{children}
    
        </h2>
        
       </div>
     



   )
}