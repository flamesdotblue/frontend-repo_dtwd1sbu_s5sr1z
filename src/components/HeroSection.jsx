import React from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles, HeartHandshake } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[80vh] overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft lighting overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white" />
      <div className="pointer-events-none absolute -inset-x-32 -top-24 h-72 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#A0E9FF]/50 via-transparent to-transparent blur-2xl" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-16 pb-24 flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#A8E6CF]/30 text-emerald-700 px-3 py-1 text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            SDG 3 – Good Health & Well‑being
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900">
            Auranest
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#C8A2C8] via-[#A0E9FF] to-[#A8E6CF]">
              Grow through what you go through
            </span>
          </h1>
          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            An AI-powered well‑being and self‑improvement space that blends journaling, emotional insights, and gentle guidance to help you heal, reflect, and grow.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#chat"
              className="inline-flex items-center justify-center rounded-full bg-[#A0E9FF] text-sky-900 hover:bg-[#8adff7] px-6 py-3 font-semibold transition-colors"
            >
              Try Aurora AI
            </a>
            <a
              href="#journal"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white text-gray-800 hover:bg-gray-50 px-6 py-3 font-semibold"
            >
              Start Journaling
            </a>
          </div>
          <div className="mt-6 flex items-center gap-3 text-sm text-gray-600">
            <HeartHandshake className="h-5 w-5 text-rose-500" />
            Private by default • You control your data
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="rounded-2xl bg-white/70 backdrop-blur shadow-xl p-5 md:p-6 border border-white/60">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'AI Therapist', desc: 'Empathy-first guidance with gentle nudges.' },
                { title: 'Mood Tracker', desc: 'Tag emotions, see patterns over time.' },
                { title: 'Growth Hub', desc: 'Goals, streaks, and mindful routines.' },
                { title: 'Safety & Support', desc: 'Resources and helplines when you need them.' },
              ].map((f) => (
                <li key={f.title} className="rounded-xl border border-gray-200 p-4 bg-white">
                  <p className="font-semibold text-gray-900">{f.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{f.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
