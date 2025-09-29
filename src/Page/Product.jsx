import React, { useEffect, useState } from "react";

const Product = () => {
    const [products, setProducts] = useState([]);
    

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch("https://dummyjson.com/products");
                const data = await res.json();
                setProducts(data.products);
            } catch (e) {
                console.e(error)
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

    function makeEmail(title) {
        const slug = title.toLowerCase().replace(/\s+/g, "");
        return `${slug}@demo.com`;
    }

    return (
        <div className='ml-64'>
            <div className="p-6 bg-gray-50 min-h-screen">
                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {products.map((p) => (
                        <article
                            key={p.id}
                            className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col"
                        >
                            <div className="h-48 w-full relative">
                                <img
                                    src={p.images?.[0]}
                                    className="object-cover w-full h-full"
                                />
                            </div>

                            <div className="p-4 flex-1 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-semibold text-purple-600">{p.title}</h2>
                                    <p className="text-sm text-black-500 mt-1 line-clamp-3">{p.description}</p>
                                    <div className="mt-3 text-sm  text-purple-600">
                                        <span className="font-medium">Price:</span> ${p.price}
                                    </div>
                                </div>

                                <div className="mt-4 border-t pt-3">
                                    <h3 className="text-sm font-medium text-gray-600">Contact info</h3>
                                    <div className="mt-2 text-sm">
                                        <div className="flex items-center justify-between">
                                            <span className="text-gray-700">Full name</span>
                                            <span className="font-medium text-purple-600">{p.title}</span>
                                        </div>

                                        <div className="flex items-center justify-between mt-1">
                                            <span className="text-gray-700">Email</span>
                                            <span className="font-medium text-purple-600">{makeEmail(p.title)}</span>
                                        </div>
                                        <div className="mt-3 flex gap-2">
                                            <button className="flex-1 py-2 rounded-xl border border-purple-500 text-purple-600">Message</button>
                                            <button className="py-2 px-4 rounded-xl bg-purple-600 text-white">Call</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Product;
