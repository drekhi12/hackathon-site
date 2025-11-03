// app/page.tsx
'use client';
import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed w-full bg-opacity-90 backdrop-blur-md bg-slate-900 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              HackHub 2025
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#about" className="text-gray-300 hover:text-white transition">About</a>
              <a href="#schedule" className="text-gray-300 hover:text-white transition">Schedule</a>
              <a href="#sponsors" className="text-gray-300 hover:text-white transition">Sponsors</a>
              <a href="#faq" className="text-gray-300 hover:text-white transition">FAQ</a>
            </div>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition">
              Register
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Build the Future.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Together.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of developers, designers, and innovators for 48 hours of non-stop coding, collaboration, and creation.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105">
              Register Now
            </button>
            <button className="border-2 border-purple-400 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-opacity-50 bg-slate-800">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              500+
            </div>
            <p className="text-gray-300 mt-2">Participants</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              $50K
            </div>
            <p className="text-gray-300 mt-2">Prize Pool</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              48hrs
            </div>
            <p className="text-gray-300 mt-2">Building Time</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">What is HackHub?</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-300 text-lg mb-4">
                HackHub is an annual hackathon bringing together creative minds to build innovative projects. Whether you're a seasoned developer or just starting your coding journey, there's a place for you here.
              </p>
              <div className="space-y-4">
                {['Build amazing projects', 'Network with like-minded developers', 'Win exciting prizes', 'Learn new technologies'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center">
                      ✓
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg p-8 border border-purple-500/30">
              <div className="aspect-video bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Your Video Here</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-4 bg-opacity-50 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Timeline</h2>
          <div className="space-y-6">
            {[
              { time: 'Friday 6 PM', event: 'Check-in & Opening Ceremony', desc: 'Welcome to HackHub 2025!' },
              { time: 'Friday 8 PM', event: 'Hacking Begins', desc: 'Start building your projects' },
              { time: 'Saturday 12 PM', event: 'Midpoint Boost', desc: 'Workshops and mentor sessions' },
              { time: 'Sunday 6 AM', event: 'Final Sprint', desc: '2 hours left to finalize your project' },
              { time: 'Sunday 8 AM', event: 'Judging & Awards', desc: 'Project demonstrations and winners announcement' }
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-24 font-semibold text-purple-400 flex-shrink-0">{item.time}</div>
                <div className="flex-1 border-l-2 border-purple-500/50 pl-6 pb-6">
                  <h3 className="text-xl font-bold text-white">{item.event}</h3>
                  <p className="text-gray-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Sponsors</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Tech Corp', 'Code Labs', 'Dev Studio', 'Cloud Pro'].map((sponsor, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg p-8 border border-purple-500/20 text-center hover:border-purple-500/50 transition">
                <div className="text-gray-400 font-semibold">{sponsor}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-opacity-50 bg-slate-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">FAQ</h2>
          <div className="space-y-6">
            {[
              { q: 'Do I need prior experience?', a: 'No! We welcome all skill levels from beginners to experts.' },
              { q: 'What should I bring?', a: 'Just bring your laptop, charger, and your creativity!' },
              { q: 'Is there a registration fee?', a: 'HackHub is completely free for all participants!' },
              { q: 'Can I work alone?', a: 'Yes, but we encourage team formation for better collaboration.' }
            ].map((item, i) => (
              <details key={i} className="group border-l-4 border-purple-500/50 pl-6 cursor-pointer">
                <summary className="text-white font-semibold text-lg hover:text-purple-400 transition list-none">
                  {item.q}
                </summary>
                <p className="text-gray-400 mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-gray-400 py-8 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>© 2025 HackHub. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Discord</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
