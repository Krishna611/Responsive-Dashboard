import React from 'react'
export default function Sidebar(){
  return (
    <aside className="hidden lg:block w-72 bg-slate-50 text-slate-900 dark:bg-[#0b1432] dark:text-white min-h-screen p-6 border-r border-slate-200 dark:border-border">
      <div className="text-lg font-extrabold tracking-wide">HORIZON FREE</div>
      <nav className="mt-6 space-y-2 text-sm">
        {['Dashboard','NFT Marketplace','Tables','Kanban','Profile','Sign In'].map(i=>(
          <div key={i} className="px-4 py-3 rounded-xl bg-white border border-slate-200 shadow-soft hover:shadow dark:bg-surface dark:border-border cursor-pointer">{i}</div>
        ))}
      </nav>
      <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 shadow-soft dark:bg-surface dark:border-border text-center">
        <div className="mx-auto w-20 h-20 rounded-full bg-primary/20 mb-3" />
        <div className="font-semibold">Upgrade to PRO</div>
        <div className="text-xs text-slate-500 dark:text-textSoft mt-1">Get access to all features</div>
      </div>
    </aside>
  )
}
