

const products = [
    {
        id: 1,
        name: "Emerald",
        price: "Rs1,200",
        category: "Green Stone",
        img: "/Emarald.avif",
        description: "Rich green emerald with excellent clarity — ideal for bespoke jewelry."
    },
    {
        id: 2,
        name: "Ruby",
        price: "Rs980",
        category: "Red Stone",
        img: "/Emarald.avif",
        description: "Deep red ruby with vibrant saturation and well-cut facets."
    },
    {
        id: 3,
        name: "Sapphire",
        price: "Rs850",
        category: "Blue Stone",
        img: "/Emarald.avif",
        description: "Royal blue sapphire, durable and brilliant for everyday wear."
    },
    {
        id: 4,
        name: "Diamond",
        price: "Rs5,500",
        category: "Clear Stone",
        img: "/Emarald.avif",
        description: "Premium cut diamond with exceptional sparkle and fire."
    }
]

export default function page() {
    return (
        <main className="min-h-screen bg-slate-50 py-12 px-6 sm:px-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">Explore Stones</h1>
                    <p className="text-sm text-slate-600">Quality stones, clear pricing — browse our selection below.</p>
                </div>

                <div className="space-y-5">
                    {products.map((p) => (
                        <article key={p.id} className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col sm:flex-row items-stretch gap-4 p-4 sm:p-6 transform transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-lg focus-within:-translate-y-1">
                            {/* Left column: product image & name */}
                            <div className="w-full sm:w-1/3 flex items-center">
                                <img src={p.img} alt={p.name} className="w-full h-40 object-cover rounded-lg shadow-sm transform transition-transform duration-300 group-hover:scale-105" />
                            </div>

                            {/* Right column: about and price */}
                            <div className="w-full sm:w-2/3 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h2 className="text-lg font-semibold text-slate-900">{p.name}</h2>
                                            <div className="text-sm text-slate-500 mt-1">{p.category}</div>
                                        </div>

                                        <div className="text-right">
                                            <div className="text-emerald-600 font-bold text-lg">{p.price}</div>
                                            <div className="text-sm text-slate-500">per piece</div>
                                        </div>
                                    </div>

                                    <p className="mt-3 text-slate-700">{p.description}</p>
                                </div>

                                <div className="mt-4 flex items-center gap-3">
                                    <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-emerald-700">Buy</button>
                                    <button className="text-slate-600 px-3 py-2 rounded-lg border border-slate-200 text-sm hover:bg-slate-50">Details</button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
