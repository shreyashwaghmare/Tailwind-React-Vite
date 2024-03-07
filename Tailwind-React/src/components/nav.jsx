import React from "react";
import logo from "../assets/HYDRA LOGO.png"

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Our Projects', href: '#', current: false },
    { name: 'Services', href: '#', current: false },
    { name: 'About US', href: '#', current: false },
  ]
  
const nav = () =>{ 
    return (
       
        <div className=" flex h-16 items-center justify-between p-10 lg:flex-row">
        
            <div className="flex flex-shrink-0 items-center">
                <img className="h-8 w-auto" src={logo} alt="HYDRA CORPORATION"></img>
                <a className="text-white font-mono text-3xl tracking-wider flex items-center">Hydra Corporation</a>
            </div>
            <div className="hidden sm:ml-6 sm:block">
             <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className= {(
                            (item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white") +  
                            "rounded-md px-3 py-2 text-sm font-medium")}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
              </div>
             </div>
        </div>
        
       
    )
}

export default nav ;