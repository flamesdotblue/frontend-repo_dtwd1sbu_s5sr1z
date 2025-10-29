import React from 'react'
import HeroSection from './components/HeroSection'
import ChatPreview from './components/ChatPreview'
import JournalPreview from './components/JournalPreview'
import FooterSection from './components/FooterSection'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            <span className="text-gray-900">Auranest</span>
            <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-[#C8A2C8] via-[#A0E9FF] to-[#A8E6CF]">beta</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
            <a href="#chat" className="hover:text-gray-900">AI Therapist</a>
            <a href="#journal" className="hover:text-gray-900">Journal</a>
            <a href="#" className="hover:text-gray-900">Resources</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-full border border-gray-200 text-sm font-semibold">Log in</button>
            <button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm font-semibold">Sign up</button>
          </div>
        </div>
      </header>

      <main>
        <HeroSection />
        <ChatPreview />
        <JournalPreview />
      </main>

      <FooterSection />
    </div>
  )
}

export default App
