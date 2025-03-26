import Image from "next/legacy/image";
import { stripe } from "@/lib/stripe";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
    const products = await stripe.products.list({
        expand: ["data.default_price"],
        limit: 6,
    });

    const featuredProduct = products.data[5];

    return (
        <div>
            <section className="rounded bg-gray-100 py-8 sm:py-12">
                <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
                    <div className="max-w-md space-y-4">
                        <h2 className="text-4xl font-extrabold text-black tracking-wide md:text-5xl">
                            Welcome to Hype Street
                        </h2>
                        <p className="text-gray-600 text-lg inline-flex">
                            Discover the freshest streetwear trends, curated for
                            those who stand out. Elevating streetwear culture
                            with unique, high-quality pieces.
                        </p>
                        <div className="bg-yellow-500 text-black py-2 px-4 rounded-lg">
                            <h3 className="font-bold text-lg">
                                Limited Time Offer!
                            </h3>
                            <p>
                                Get 20% off your first purchase with code{" "}
                                <strong>NEW20</strong>
                            </p>
                        </div>
                        <Button
                            asChild
                            variant="default"
                            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white hover:bg-lime-400 hover:text-black transition-all duration-300"
                        >
                            <Link href="/products">Shop Now</Link>
                        </Button>
                    </div>
                    <Image
                        alt="Hero Image"
                        src={featuredProduct.images[0]}
                        className="rounded-md shadow-xl hover:scale-105 transition-transform duration-300"
                        width={500}
                        height={600}
                    />
                </div>
            </section>
            <section className="py-8 px-8">
                <h2 className="text-3xl font-extrabold text-center mb-8 mt-15">
                    Featured Products
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {products.data.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
                        >
                            <div className="relative w-full h-72">
                                <Image
                                    src={product.images[0]}
                                    alt={product.name}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-md"
                                />
                            </div>
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold mt-4">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600">
                                    {product.description}
                                </p>
                            </div>
                            <Button
                                asChild
                                className="mt-auto w-full bg-black text-white hover:bg-lime-400 hover:text-black"
                            >
                                <Link href={`/products/${product.id}`}>
                                    View Product
                                </Link>
                            </Button>
                        </div>
                    ))}
                </div>
            </section>
            <section className="py-12 bg-black text-white text-center">
                <div className="max-w-3xl mx-auto px-8">
                    <h2 className="text-3xl font-extrabold mb-4">About Us</h2>
                    <p className="text-lg leading-relaxed">
                        Hype Street is more than just a clothing brand —
                        it&apos;s a movement. Inspired by urban culture, we
                        design bold, trendsetting apparel that empowers
                        self-expression. Our mission is to keep you fresh,
                        fearless, and authentic in every outfit you wear.
                    </p>
                </div>
            </section>
            <section className="py-12 bg-gray-100 text-center">
                <div className="max-w-3xl mx-auto px-8">
                    <h2 className="text-3xl font-extrabold mb-4">
                        Stay in the Loop
                    </h2>
                    <p className="text-lg text-gray-700 mb-6">
                        Be the first to know about exclusive drops, discounts,
                        and new collections. Sign up now!
                    </p>
                    <form className="flex flex-col sm:flex-row justify-center gap-4">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-3 w-full sm:w-2/3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        <Button className="bg-black text-white px-6 py-6 rounded-lg hover:bg-lime-400 hover:text-black">
                            Sign Up
                        </Button>
                    </form>
                </div>
            </section>
        </div>
    );
}
