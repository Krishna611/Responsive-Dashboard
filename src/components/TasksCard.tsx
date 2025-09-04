import React from 'react'
import { tasks } from '../data/mock'
export default function TasksCard(){
  return (
    <div className="card p-5">
      <div className="font-semibold">Tasks</div>
      <div className="mt-3 space-y-3">
        {tasks.map(t=>(
          <label key={t} className="flex items-center gap-3">
            <input type="checkbox" className="accent-[#6F5BFF]" />
            <span>{t}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
