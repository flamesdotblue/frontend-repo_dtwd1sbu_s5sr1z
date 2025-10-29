import React from 'react'
import { Shield, Phone, BookOpen } from 'lucide-react'

const FooterSection = () => {
  return (
    <footer className="mt-8 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h4 className="font-semibold text-gray-900">Safety & Support</h4>
          <p className="mt-2 text-sm text-gray-600">
            If you or someone you know is in immediate danger, call your local emergency number.
          </p>
          <ul className="mt-3 text-sm text-gray-700 space-y-1">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-500" /> Suicide & Crisis Lifeline (US): 988</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-500" /> Samaritans (UK & IE): 116 123</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-rose-500" /> Lifeline (AU): 13 11 14</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">Bullying Help</h4>
          <p className="mt-2 text-sm text-gray-600">
            Learn how to recognize, document, and safely report bullying.
          </p>
          <a href="#" className="inline-block mt-3 text-sm font-semibold text-sky-700 hover:underline">Read the guide</a>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 flex items-center gap-2"><Shield className="h-4 w-4 text-emerald-600" /> Privacy first</h4>
          <p className="mt-2 text-sm text-gray-600">
            Your journal is private. We use secure storage and transparent consent for any AI features. No ads. No resale.
          </p>
          <a href="#" className="inline-flex items-center gap-2 mt-3 text-sm font-semibold text-gray-900">
            <BookOpen className="h-4 w-4" /> Read our ethics & privacy policy
          </a>
        </div>
      </div>
      <div className="border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">© {new Date().getFullYear()} Auranest — Heal. Reflect. Grow.</p>
          <div className="text-sm text-gray-600">Made with care for students & young adults</div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
