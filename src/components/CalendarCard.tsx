import React from 'react'
import { calendar } from '../data/mock'
export default function CalendarCard(){
  const days = Array.from({length: calendar.days}, (_,i)=>i+1)
  const isSel = (d:number)=>calendar.selected.includes(d)
  return (
    <div className="card p-5">
      <div className="font-semibold">{calendar.month} {calendar.year}</div>
      <div className="grid grid-cols-7 gap-2 mt-4 text-center">
        {['M','T','W','T','F','S','S'].map(d=>(<div key={d} className="text-slate-600 dark:text-textSoft text-xs">{d}</div>))}
        {days.map(d=>(
          <div key={d} className={`py-2 rounded-lg ${isSel(d)?'bg-primary text-white':'bg-transparent border border-slate-200 text-slate-700 dark:border-border dark:text-textMain'}`}>{d}</div>
        ))}
      </div>
    </div>
  )
}
