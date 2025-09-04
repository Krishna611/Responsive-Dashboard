import React from 'react'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import StatCard from './components/StatCard'
import LineChartCard from './components/LineChartCard'
import WeeklyRevenueCard from './components/WeeklyRevenueCard'
import DailyTrafficCard from './components/DailyTrafficCard'
import PieCard from './components/PieCard'
import CheckTable from './components/CheckTable'
import ComplexTable from './components/ComplexTable'
import TasksCard from './components/TasksCard'
import CalendarCard from './components/CalendarCard'
import FooterSection from './components/FooterSection'
import { stats } from './data/mock'

export default function App(){
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-bg dark:text-textMain">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <Topbar />

          {/* Top Stat row */}
          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 mb-6">
            {stats.map(s => <StatCard key={s.title} title={s.title} value={s.value}/>)}
          </div>

          {/* Row: Line + Weekly Revenue */}
          <div className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-12 xl:col-span-8"><LineChartCard/></div>
            <div className="col-span-12 xl:col-span-4"><WeeklyRevenueCard/></div>
          </div>

          {/* Row: Daily traffic + Pie */}
          <div className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-12 xl:col-span-4"><DailyTrafficCard/></div>
            <div className="col-span-12 xl:col-span-8"><PieCard/></div>
          </div>

          {/* Tables + Tasks + Calendar */}
          <div className="grid grid-cols-12 gap-4 mb-6">
            <div className="col-span-12 xl:col-span-8 space-y-4">
              <CheckTable/>
              <ComplexTable/>
            </div>
            <div className="col-span-12 xl:col-span-4 space-y-4">
              <TasksCard/>
              <CalendarCard/>
            </div>
          </div>

          {/* Footer (4 cards) */}
          <FooterSection />

          <div className="text-xs text-slate-500 dark:text-textSoft mt-8">© 2025 Horizon. All Rights Reserved.</div>
        </main>
      </div>
    </div>
  )
}
