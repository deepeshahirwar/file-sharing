 "use client"
 import React from 'react'
import SideNav from './_components/SideNav';
import TopHeader from './_components/TopHeader';

function layout({children}) { 
  const [toggle, setToggle] = React.useState(false);
  return ( 
 
    <div>
      <div className=" h-full w-64 flex-col 
      fixed inset-y-0 x-50 md:flex hidden">
        <SideNav closeSideNav={()=>setToggle(false)}/>
      </div> 

     <div className="md:ml-64"> 
        <TopHeader closeSideNav={()=>setToggle(false)}/>
        {children}
      </div> 
     
    </div>
    
  )
}

export default layout;