import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { pie } from '../data/mock'
const COLORS=['#6F5BFF','#7C5CFF','#58D7FF']
export default function PieCard(){
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <div>Your Pie Chart</div>
        <div className="badge">Monthly</div>
      </div>
      <div className="h-48 mt-3">
        <ResponsiveContainer>
          <PieChart>
            <Pie data={pie} dataKey="value" nameKey="name" innerRadius={50} outerRadius={70} paddingAngle={3} stroke="none">
              {pie.map((e,i)=>(<Cell key={e.name} fill={COLORS[i%COLORS.length]} />))}
            </Pie>
            <Tooltip/>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="grid grid-cols-3 gap-2 text-xs text-slate-600 dark:text-textSoft">
        {pie.map((e,i)=>(<div key={e.name} className="flex items-center gap-1"><span className="w-2 h-2 rounded-full" style={{background: COLORS[i%COLORS.length]}}></span>{e.name} {e.value}%</div>))}
      </div>
    </div>
  )
}
