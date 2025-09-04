import React from 'react'
type Props={ title:string; value:string }
export default function StatCard({title,value}:Props){
  return (
    <div className="stat">
      <div>
        <div className="text-slate-500 dark:text-textSoft text-xs">{title}</div>
        <div className="text-2xl font-extrabold mt-1">{value}</div>
      </div>
      <div className="w-9 h-9 rounded-full bg-primary/20 dark:bg-primary/30" />
    </div>
  )
}
