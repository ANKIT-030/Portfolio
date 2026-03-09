import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({name:'', email:'', message:''})
  const handleChange = e => setForm({...form, [e.target.name]: e.target.value})
  const handleSubmit = e => { e.preventDefault(); alert('This demo form does not send — add backend to submit.'); }

  return (
    <section id="contact" className="mt-12">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="glass p-6 rounded-md">
          <label className="block text-sm text-slate-300">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full mt-1 mb-3 p-2 rounded bg-transparent border border-slate-700 outline-none glow-input" />

          <label className="block text-sm text-slate-300">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="w-full mt-1 mb-3 p-2 rounded bg-transparent border border-slate-700 outline-none glow-input" />

          <label className="block text-sm text-slate-300">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full mt-1 mb-3 p-2 rounded bg-transparent border border-slate-700 outline-none glow-input h-32" />

          <button type="submit" className="btn-neon px-4 py-2 rounded">Send Message</button>
        </form>

        <div className="glass p-6 rounded-md flex flex-col justify-center">
          <div className="text-slate-300">Connect with me</div>
          <div className="mt-4 flex gap-3">
            <a href="#" className="text-slate-300">GitHub</a>
            <a href="#" className="text-slate-300">LinkedIn</a>
            <a href="mailto:youremail@example.com" className="text-slate-300">Email</a>
          </div>
        </div>
      </div>
    </section>
  )
}
