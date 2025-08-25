import React from 'react'
import { LineChart, Line, ResponsiveContainer, XAxis, Tooltip } from 'recharts'
import { activity } from '../data/mock'
export default function LineChartCard(){
  return (
    <div className="card p-5">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-slate-500 dark:text-textSoft text-xs">This month</div>
          <div className="text-2xl font-bold">$37.5K</div>
          <div className="text-green text-xs mt-1">On track</div>
        </div>
      </div>
      <div className="h-56 mt-4">
        <ResponsiveContainer>
          <LineChart data={activity}>
            <XAxis dataKey="name" tick={{ fill:'#94a3b8', fontSize:12 }} axisLine={false} tickLine={false}/>
            <Tooltip cursor={false}/>
            <Line type="monotone" dataKey="a" stroke="#6F5BFF" strokeWidth={3} dot={false}/>
            <Line type="monotone" dataKey="b" stroke="#58D7FF" strokeWidth={3} dot={false}/>
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
