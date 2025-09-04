import React from 'react'
import { checkRows } from '../data/mock'
export default function CheckTable(){
  return (
    <div className="card p-5">
      <div className="font-semibold mb-3">Check Table</div>
      <table className="table">
        <thead><tr><th>Name</th><th>Progress</th><th>Quantity</th><th>Date</th></tr></thead>
        <tbody>
          {checkRows.map((r)=>(
            <tr key={r.name}>
              <td>{r.name}</td>
              <td className="text-slate-600 dark:text-textSoft">{r.progress}</td>
              <td>{r.quantity}</td>
              <td className="text-slate-600 dark:text-textSoft">{r.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
