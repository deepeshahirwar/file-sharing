"use client"
import React from 'react'
import { useEffect } from 'react'

function FilePreview({params}) { 

    useEffect(() => {
        console.log(params?.fileld)
    }, [])
  return (
    <div>FilePreview</div>
  )
}

export default FilePreview;