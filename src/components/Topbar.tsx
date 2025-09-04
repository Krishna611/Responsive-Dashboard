import React, { useEffect, useState } from 'react'
export default function Topbar(){
  const [dark,setDark]=useState(true)
  useEffect(()=>{document.documentElement.classList.toggle('dark', dark)},[dark])
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <div className="text-slate-500 dark:text-textSoft text-sm">Pages / Dashboard</div>
        <h1 className="text-2xl font-bold">Main Dashboard</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-soft dark:bg-surface dark:border-border">
          <span className="opacity-60">Search</span>
          <input className="bg-transparent outline-none text-sm w-32" placeholder="..." />
        </div>
        <button className="p-2 rounded-full border border-slate-200 dark:border-border" onClick={()=>setDark(!dark)} title="Toggle theme">
          {dark ? '🌙' : '☀️'}
        </button>
        <img className="w-9 h-9 rounded-full" src="/assets/avatars/user1.png" alt="user" />
      </div>
    </div>
  )
}
