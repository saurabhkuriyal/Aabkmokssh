const products = [
    {
        id: 1,
        name: 'Blue Stone',
        href: '/crystal/1',
        price: 'Rs. 500',
        imageSrc: "/Blue_stone.jpg",
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Emarald',
        href: '/crystal/2',
        price: 'Rs. 1000',
        imageSrc: '/Emaral.jpg',
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Blue Gem',
        href: '/crystal/3',
        price: 'Rs. 750',
        imageSrc: '/Blue_Rectangular.jpg',
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Green Stone',
        href: '/crystal/4',
        price: 'Rs. 600',
        imageSrc: '/Green_Stone.jpg',
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Red Stone',
        href: '/crystal/5',
        price: 'Rs. 800',
        imageSrc: '/curr_hero.jpg',
        imageAlt: 'Paper card sitting upright in walnut card holder on desk.',
    },
    {
        id: 6,
        name: 'Emarald Gemstone',
        href: '/crystal/6',
        price: 'Rs. 1200',
        imageSrc: '/Emarald.avif',
        imageAlt: 'Stack of 3 small drab green cardboard paper card refill boxes with white text.',
    },
    {
        id: 7,
        name: 'Dark Blue Gemstone',
        href: '/crystal/7',
        price: 'Rs. 700',
        imageSrc: '/Blue_Rectangular.jpg',
        imageAlt: 'Brass scissors with geometric design, black steel finger holes, and included upright brass stand.',
    },
    {
        id: 8,
        name: "Green Gemstone",
        href: '/crystal/8',
        price: 'Rs. 650',
        imageSrc: '/Green_Stone.jpg',
        imageAlt: 'Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.',
    },
]

export default function Items() {
    return (
        <div className="bg-gradient-to-b from-white via-pink-100 to-white/30">
            <div className="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
                <h2 className="sr-only">Products</h2>

                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 ">
                    {products.map((product) => (
                        <a key={product.id} href={product.href} className="group">
                            <img
                                alt={product.imageAlt}
                                src={product.imageSrc}
                                className="aspect-square w-full rounded-lg bg-gray-400 object-cover group-hover:opacity-75 xl:aspect-7/8"
                            />
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}
