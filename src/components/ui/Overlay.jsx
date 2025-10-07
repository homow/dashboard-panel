import React from 'react'

export default function Overlay({flag, setFlag}) {
    return (
        <div onClick={() => setFlag(false)} className={`fixed z-20 inset-0 bg-black/50 w-full h-full ${flag ? "block" : "hidden"}`}></div>
    )
}
