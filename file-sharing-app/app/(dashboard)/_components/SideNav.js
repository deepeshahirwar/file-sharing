"use client";
import { Shield, Upload, File,User } from 'lucide-react';
import React, { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link component

function SideNav() {
    const menuList = [ 
        {
            id: 1,
            name: "UserDashboard",
            icon: User,
            path: "/userDashboard"
        },
        {
            id: 2,
            name: "Upload",
            icon: Upload,
            path: "/upload"
        },
        {
            id: 3,
            name: "Files",
            icon: File,
            path: "/files"
        },
        {
            id: 4,
            name: "Upgrade",
            icon: Shield,
            path: "/upgrade"
        },
       
    ];

    const [active, setActive] = useState(0);

    return (
        <div className="shadow-sm border-r h-full"> 
            <div className="p-5 border-b w-full"> 
                Logo
            </div>  

            <div className="flex flex-col text-left">
                {menuList.map((item, index) => (
                    <Link href={item.path} key={item.id}>
                        <button 
                            className={`flex gap-2 p-4 px-6 
                            hover:text-primary
                            ${index === active ? "bg-blue-50 text-primary" : null}`}
                            onClick={() => setActive(index)}
                        >
                            <item.icon />
                            <h2>{item.name}</h2>
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default SideNav;
