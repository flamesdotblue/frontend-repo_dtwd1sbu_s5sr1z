import React from 'react'
import { Calendar, Smile, Frown, Heart, Activity } from 'lucide-react'

const Bar = ({ value, color }) => (
  <div className="flex flex-col items-center">
    <div className="w-8 bg-gray-100 rounded-t-md overflow-hidden h-24 flex items-end">
      <div className="w-full rounded-t-md" style={{ height: `${value}%`, backgroundColor: color }} />
    </div>
  </div>
)

const Tag = ({ children, color = 'bg-gray-100 text-gray-700' }) => (
  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${color}`}>
    {children}
  </span>
)

const JournalPreview = () => {
  return (
    <section id="journal" className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Calendar className="h-5 w-5 text-[#C8A2C8]" />
            <h3 className="text-lg font-semibold text-gray-900">Journal & Mood Log</h3>
          </div>
          <textarea
            disabled
            rows={5}
            className="w-full resize-none rounded-xl border border-gray-200 p-4 text-sm text-gray-700 placeholder:text-gray-400"
            placeholder="Write how you feel today… (demo)"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            <Tag color="bg-[#A0E9FF]/40 text-sky-900">calm</Tag>
            <Tag color="bg-[#FFDAB9]/60 text-orange-900">grateful</Tag>
            <Tag color="bg-[#C8A2C8]/40 text-purple-900">anxious</Tag>
            <Tag color="bg-[#A8E6CF]/60 text-emerald-900">motivated</Tag>
          </div>
          <button className="mt-4 rounded-xl bg-gray-900 text-white px-4 py-2 text-sm font-semibold disabled:opacity-60" disabled>
            Save entry (demo)
          </button>
          <p className="mt-2 text-xs text-gray-500">Entries are privately stored. AI sentiment runs on-device or securely in the cloud.</p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-[#A0E9FF]/20 via-white to-[#A8E6CF]/20 p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <Activity className="h-5 w-5 text-emerald-600" />
            <h3 className="text-lg font-semibold text-gray-900">Mood Trends (7 days)</h3>
          </div>
          <div className="grid grid-cols-7 gap-3 items-end mt-4">
            {[35, 60, 45, 70, 55, 80, 65].map((v, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <Bar value={v} color={i % 2 === 0 ? '#A0E9FF' : '#A8E6CF'} />
                <span className="text-[10px] text-gray-500">{['M','T','W','T','F','S','S'][i]}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-center gap-2 text-sm text-gray-700">
            <Smile className="h-4 w-4 text-emerald-600" />
            You’ve felt calmer this week compared to last.
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
            <Frown className="h-4 w-4 text-rose-500" />
            Stress spikes on Wed — try a 2‑minute breathing break.
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
            <Heart className="h-4 w-4 text-rose-400" />
            3‑day gratitude streak — keep it up!
          </div>
        </div>
      </div>
    </section>
  )
}

export default JournalPreview
