import React from 'react'
import {  UserButton} from '@clerk/nextjs'

function Files() {
  return ( 
    // user button for signing out
    <div>Files  
      <UserButton afterSignOutUrl="/"/>
    </div>
  )
}

export default Files