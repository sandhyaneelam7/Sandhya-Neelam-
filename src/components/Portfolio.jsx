import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Portfolio(){
  const [activeSection, setActiveSection] = useState('about')
  const projects = [
    { title: 'Generative AI Content Creator', desc: 'LLM prompt-based content generation.' },
    { title: 'Data Analyst Dashboard', desc: 'Dashboards with cleaning & visualization.' },
    { title: 'UI/UX Portfolio', desc: 'Figma prototypes and motion visuals.' }
  ]
  const skills = ['Generative AI','Data Analyst','Video Editing','UI/UX Design','Python','HTML','CSS']

  return (
    <>
      <nav className="fixed w-full top-0 left-0 z-50 bg-white/80 border-b">
        <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-pink-300 flex items-center justify-center text-white">🤖</div>
            <div>
              <div className="font-bold">SANDHYA NEELAM PORTFOLIO</div>
              <div className="text-xs text-gray-600">Building modern solutions with code</div>
            </div>
          </div>
          <ul className="hidden md:flex gap-6">
            <li><button onClick={()=>setActiveSection('about')} className="hover:text-indigo-600">About</button></li>
            <li><button onClick={()=>setActiveSection('skills')} className="hover:text-pink-600">Skills</button></li>
            <li><button onClick={()=>setActiveSection('projects')} className="hover:text-teal-600">Projects</button></li>
            <li><button onClick={()=>setActiveSection('contact')} className="hover:text-yellow-600">Contact</button></li>
            <li><button onClick={()=>setActiveSection('resume')} className="hover:text-purple-600">Resume</button></li>
          </ul>
        </div>
      </nav>

      <main id="main-content" className="pt-24 min-h-screen bg-gray-50">
        <div className="max-w-5xl mx-auto p-6">
          <motion.div initial={{opacity:0}} animate={{opacity:1}}>
            {activeSection === 'about' && (
              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold">About</h2>
                <p className="mt-2 text-gray-700">I am an all-round Software Engineer (B.Tech CSE — AI & ML, 2025) focused on Generative AI, Data Analysis, UI/UX and Video Editing.</p>
              </section>
            )}

            {activeSection === 'skills' && (
              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold">Skills</h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map(s=> <span key={s} className="px-3 py-1 bg-indigo-100 rounded">{s}</span>)}
                </div>
              </section>
            )}

            {activeSection === 'projects' && (
              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold">Projects</h2>
                <div className="mt-3 grid md:grid-cols-3 gap-3">
                  {projects.map(p=>(
                    <div key={p.title} className="p-3 bg-gradient-to-br from-white to-gray-100 rounded">
                      <h3 className="font-semibold">{p.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {activeSection === 'contact' && (
              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold">Contact</h2>
                <p className="mt-2">Email: sandhya.neelam.jobs@gmail.com</p>
              </section>
            )}

            {activeSection === 'resume' && (
              <section className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold">Resume</h2>
                <p className="mt-2 text-gray-700">Below is a summary of my resume. For the full resume use the Download button (if provided).</p>
                <div className="mt-4">
                  <h4 className="font-semibold">Education</h4>
                  <p className="text-sm">B.Tech CSE (AI & ML), 2025 — Sri Venkateswara College of Engineering & Technology</p>
                </div>
              </section>
            )}
          </motion.div>
        </div>
      </main>
    </>
  )
}
