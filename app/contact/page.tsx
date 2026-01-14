
"use client"

import React, { useState } from "react"

export default function page() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState<any>({})
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")

  function validate() {
    const e: any = {}
    if (!name.trim()) e.name = "Please enter your name"
    if (!email.trim()) e.email = "Please enter your email"
    else if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email"
    if (!phone.trim()) e.phone = "Please enter a phone number"
    else if (!/^\+?[0-9\s\-()]{7,20}$/.test(phone)) e.phone = "Enter a valid phone number"
    if (!message.trim()) e.message = "Please enter a message"
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const eObj = validate()
    setErrors(eObj)
    if (Object.keys(eObj).length) return

    setStatus("sending")

    // Simulate an API call — replace with real API if you have one
    await new Promise((r) => setTimeout(r, 900))

    setStatus("sent")
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")

    setTimeout(() => setStatus("idle"), 3000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50 py-16 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Info card */}
          <section className="space-y-6">
            <div className="bg-gradient-to-br from-emerald-50 to-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Contact us</h1>
              <p className="text-slate-600 mt-2">Have a question, partnership idea or feedback? Send us a message — we typically reply within 1-2 business days.</p>

              <div className="mt-6 grid gap-3 text-sm">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <div className="text-slate-600">hello@aankmokssh.example</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m0 12h.01M6 21h6m8-6v6a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h6"></path></svg>
                  <div>
                    <div className="font-medium text-slate-900">Phone</div>
                    <div className="text-slate-600">+1 (555) 123-4567</div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <div className="rounded-lg overflow-hidden">
                  <img src="/Emarald.avif" alt="contact" className="w-full h-48 object-cover brightness-95" />
                </div>
              </div>
            </div>

            <div className="text-sm text-slate-500">Prefer to reach out on social? We're on Twitter and LinkedIn — we'd love to connect.</div>
          </section>

          {/* Right: Form */}
          <section>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-slate-100">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-slate-900">Send a message</h2>
                <span className="text-sm text-slate-500">We respond fast — usually within a day</span>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col">
                  <span className="text-sm font-medium text-slate-700">Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={`mt-2 px-4 py-3 rounded-lg border ${errors.name ? "border-rose-400" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-emerald-200`}
                    placeholder="Your full name"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    type="text"
                  />
                  {errors.name && <span id="name-error" className="mt-1 text-rose-600 text-sm">{errors.name}</span>}
                </label>

                <label className="flex flex-col">
                  <span className="text-sm font-medium text-slate-700">Email</span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className={`mt-2 px-4 py-3 rounded-lg border ${errors.email ? "border-rose-400" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-emerald-200`}
                    placeholder="you@example.com"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? "email-error" : undefined}
                    type="email"
                  />
                  {errors.email && <span id="email-error" className="mt-1 text-rose-600 text-sm">{errors.email}</span>}
                </label>

                <label className="flex flex-col sm:col-span-2">
                  <span className="text-sm font-medium text-slate-700">Phone</span>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={`mt-2 px-4 py-3 rounded-lg border ${errors.phone ? "border-rose-400" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-emerald-200`}
                    placeholder="+1 (555) 123-4567"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    type="tel"
                  />
                  {errors.phone && <span id="phone-error" className="mt-1 text-rose-600 text-sm">{errors.phone}</span>}
                </label>

                <label className="flex flex-col sm:col-span-2">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className={`mt-2 px-4 py-3 rounded-lg border h-32 resize-y ${errors.message ? "border-rose-400" : "border-slate-200"} focus:outline-none focus:ring-2 focus:ring-emerald-200`}
                    placeholder="How can we help?"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && <span id="message-error" className="mt-1 text-rose-600 text-sm">{errors.message}</span>}
                </label>
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-300"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  )}
                  <span>{status === "sending" ? "Sending..." : "Send message"}</span>
                </button>

                {status === "sent" && <div className="text-emerald-600 font-medium">Message sent — thanks! ✅</div>}

                <div className="ml-auto text-sm text-slate-500">Or email <a className="text-emerald-600 underline" href="mailto:hello@aankmokssh.example">hello@aankmokssh.example</a></div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  )
}
