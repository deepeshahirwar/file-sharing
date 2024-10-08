import { AlignJustify} from 'lucide-react' 
import { UserButton } from '@clerk/nextjs'
import React from 'react'

function TopHeader() {
  return (
    <div  className ="flex p-5 border-b justify-between
    items-center md:justify-end"> 
         
         <AlignJustify className=" cursor-pointer 
         md:hidden"/> 

         <div className="md:hidden"> logo </div> 
         <UserButton/>

    </div>
  )
}

export default TopHeader