import React from 'react'
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip } from 'recharts'
import { weeklyRevenue } from '../data/mock'
export default function WeeklyRevenueCard(){
  return (
    <div className="card p-5">
      <div className="font-semibold">Weekly Revenue</div>
      <div className="h-56 mt-2">
        <ResponsiveContainer>
          <BarChart data={weeklyRevenue}>
            <XAxis dataKey="name" tick={{ fill:'#94a3b8', fontSize:12 }} axisLine={false} tickLine={false}/>
            <Tooltip cursor={{ fill:'rgba(2,6,23,0.05)' }}/>
            <Bar dataKey="uv" stackId="a" fill="#6F5BFF" radius={[8,8,0,0]}/>
            <Bar dataKey="pv" stackId="a" fill="#58D7FF" radius={[8,8,0,0]}/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
