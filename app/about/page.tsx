
export default function page() {
  return (
    <main className="bg-gradient-to-b from-white to-emerald-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-6">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-emerald-800 mb-3">About AankMokssh</h1>
          <p className="text-lg text-gray-600">Sacred gemstones, hand-selected and respectfully prepared for devotion, meditation, and spiritual care.</p>
        </header>

        <section className="bg-white shadow-md rounded-lg p-8 mb-6">
          <h2 className="text-2xl font-semibold text-emerald-700 mb-3">Our Purpose</h2>
          <p className="text-gray-700 leading-relaxed">At AankMokssh we honour ancient traditions by sourcing gemstones that hold spiritual value and purity. Each piece is chosen for its energetic qualities and prepared with intention so it may support prayer, healing, and ritual practice.</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2 mb-6">
          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-medium text-emerald-700 mb-3">What We Offer</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="ml-3">Handpicked gemstones blessed for spiritual use</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="ml-3">Ethical sourcing &amp; expert verification</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span className="ml-3">Care instructions and guidance for ritual use</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <h3 className="text-lg font-medium text-emerald-700 mb-3">Our Promise</h3>
            <p className="text-gray-700 mb-3">We are committed to authenticity, reverence, and service. Every gemstone arrives with clear provenance and a gentle blessing — ready to accompany your prayers, practices, and life milestones.</p>
            <p className="text-gray-700">Whether you seek focus, protection, or a meaningful gift, our collection connects tradition with care.</p>
          </div>
        </section>

        <section className="bg-white rounded-lg p-6 shadow mb-6">
          <h3 className="text-lg font-medium text-emerald-700 mb-3">How to Choose</h3>
          <p className="text-gray-700">Listen to intention: choose by the property you seek (calm, clarity, protection) and allow the stone’s feel to guide you. Our team is happy to advise on selection and ritual preparation.</p>
        </section>

        <footer className="text-center text-sm text-gray-500">Blessings and gratitude — <span className="font-medium text-emerald-700">AankMokssh</span></footer>
      </div>
    </main>
  )

}
