import React from 'react'
import { Bot, User, AlertTriangle } from 'lucide-react'

const ChatBubble = ({ role, text }) => {
  const isUser = role === 'user'
  return (
    <div className={`flex items-start gap-2 ${isUser ? 'justify-end' : 'justify-start'}`}>
      {!isUser && (
        <div className="shrink-0 mt-1 rounded-full bg-[#C8A2C8]/20 p-2 text-[#6b3b6b]">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm leading-relaxed shadow-sm ${
          isUser ? 'bg-[#A0E9FF] text-sky-900' : 'bg-white text-gray-800 border border-gray-200'
        }`}
      >
        {text}
      </div>
      {isUser && (
        <div className="shrink-0 mt-1 rounded-full bg-sky-100 p-2 text-sky-700">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  )
}

const ChatPreview = () => {
  return (
    <section id="chat" className="max-w-6xl mx-auto px-6 py-12">
      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-[#FFDAB9]/20 p-6 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Aurora AI Therapist</h2>
            <p className="text-sm text-gray-600">Empathetic, concise, and supportive guidance</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 text-rose-700 px-3 py-1 text-xs">
            <AlertTriangle className="h-4 w-4" />
            Safety checks enabled
          </div>
        </div>

        <div className="h-64 overflow-y-auto space-y-3 p-3 bg-white/60 rounded-xl border border-gray-100">
          <ChatBubble role="assistant" text="Hi, I’m Aurora. Thanks for reaching out today. What’s on your mind?" />
          <ChatBubble role="user" text="I feel anxious about exams and can’t focus." />
          <ChatBubble role="assistant" text="That sounds heavy. A quick grounding trick: breathe in for 4, hold for 4, out for 6. Would you like a 2‑minute guided exercise or study focus tips?" />
          <ChatBubble role="user" text="Focus tips please." />
          <ChatBubble role="assistant" text="Try the 25/5 Pomodoro with a calming playlist. I can also help you set a small plan for today: one topic, one practice sheet, one stretch break. Sound okay?" />
        </div>

        <div className="mt-4 flex items-center gap-2">
          <input
            type="text"
            disabled
            placeholder="Type a message… (demo)"
            className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none"
          />
          <button className="rounded-xl bg-[#A8E6CF] text-emerald-900 font-semibold px-4 py-3 disabled:opacity-60" disabled>
            Send
          </button>
        </div>
        <p className="mt-3 text-xs text-gray-500">
          Note: In the full app, Aurora detects sensitive phrases (e.g., suicidal ideation) and offers immediate resources and professional referrals.
        </p>
      </div>
    </section>
  )
}

export default ChatPreview
