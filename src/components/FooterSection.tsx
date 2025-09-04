import React from 'react'
export default function FooterSection(){
  return (
    <div className="grid grid-cols-12 gap-4">
      {/* New Session */}
      <div className="col-span-12 xl:col-span-4 card p-6">
        <div className="flex items-center gap-3 text-sm text-slate-500 dark:text-textSoft">
          <div className="w-8 h-8 rounded-full bg-primary/20" />
          <span>Business Design • New session is available</span>
        </div>
        <div className="mt-3 font-semibold">What do you need to know to create better products?</div>
        <div className="mt-4 flex items-center gap-3 text-xs text-slate-600 dark:text-textSoft">
          <span>⏱ 85 mins</span>
          <span>🎬 Video format</span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex -space-x-2">
            <img className="w-7 h-7 rounded-full border border-white dark:border-surface" src="/assets/avatars/user1.png"/>
            <img className="w-7 h-7 rounded-full border border-white dark:border-surface" src="/assets/avatars/user2.png"/>
            <img className="w-7 h-7 rounded-full border border-white dark:border-surface" src="/assets/avatars/user3.png"/>
          </div>
          <button className="px-4 py-2 rounded-xl bg-primary text-white">Get Started</button>
        </div>
      </div>

      {/* Team Members */}
      <div className="col-span-12 xl:col-span-4 card p-6">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Team members</div>
          <button className="text-slate-500 dark:text-textSoft">⠇</button>
        </div>
        <div className="mt-3 space-y-3">
          {[['Adela Parkson','Creative Director'],['Christian Mel','Product Designer'],['Jason Staham','Junior Graphic Designer']].map(([name,role],i)=>(
            <div key={name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img className="w-8 h-8 rounded-full" src={`/assets/avatars/user${i+1}.png`} />
                <div>
                  <div className="text-sm font-medium">{name}</div>
                  <div className="text-xs text-slate-600 dark:text-textSoft">{role}</div>
                </div>
              </div>
              <button className="text-slate-500 dark:text-textSoft">⋮</button>
            </div>
          ))}
        </div>
      </div>

      {/* Control Card Security */}
      <div className="col-span-12 xl:col-span-2 card p-6 flex flex-col justify-between">
        <div>
          <div className="w-12 h-12 rounded-full bg-primary/20 mb-3" />
          <div className="font-semibold">Control card security</div>
          <div className="text-xs text-slate-600 dark:text-textSoft">in-app with a tap</div>
        </div>
        <button className="mt-6 px-4 py-2 rounded-xl bg-primary text-white">Cards</button>
      </div>

      {/* Starbucks */}
      <div className="col-span-12 xl:col-span-2 card p-0 overflow-hidden">
        <img src="/assets/coffee.jpg" alt="coffee" className="w-full h-28 object-cover"/>
        <div className="p-6">
          <div className="font-semibold">Starbucks</div>
          <div className="text-xs text-slate-600 dark:text-textSoft mt-1">10% cashback is off</div>
        </div>
      </div>
    </div>
  )
}