import React from 'react'
import { complex } from '../data/mock'
export default function ComplexTable(){
  return (
    <div className="card p-5">
      <div className="font-semibold mb-3">Complex Table</div>
      <table className="table">
        <thead><tr><th>Name</th><th>Status</th><th>Date</th><th>Progress</th></tr></thead>
        <tbody>
          {complex.map((r)=>(
            <tr key={r.name}>
              <td>{r.name}</td>
              <td><span className={`badge ${r.status==='Approved'?'border-green text-green':'border-red-400 text-red-400'}`}>{r.status}</span></td>
              <td className="text-slate-600 dark:text-textSoft">{r.date}</td>
              <td>
                <div className="w-full bg-slate-200/60 dark:bg-white/10 rounded-full h-2">
                  <div className="h-2 rounded-full bg-primary" style={{width: `${r.progress}%`}}/>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
