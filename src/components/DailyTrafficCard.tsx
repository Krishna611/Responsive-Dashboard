import React from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts'
import { dailyTraffic } from '../data/mock'
export default function DailyTrafficCard(){
  return (
    <div className="card p-5">
      <div className="text-slate-500 dark:text-textSoft text-xs">Daily Traffic</div>
      <div className="text-2xl font-bold">2,579</div>
      <div className="h-48 mt-3">
        <ResponsiveContainer>
          <BarChart data={dailyTraffic}>
            <XAxis dataKey="name" tick={{ fill:'#94a3b8', fontSize:12 }} axisLine={false} tickLine={false}/>
            <Tooltip/>
            <Bar dataKey="uv" fill="#6F5BFF" radius={[8,8,0,0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
