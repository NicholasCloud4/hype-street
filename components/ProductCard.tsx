import Link from "next/link";
import Stripe from "stripe";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Image from "next/legacy/image";
import { Button } from "./ui/button";

interface Props {
    product: Stripe.Product;
}

export default function ProductCard({ product }: Props) {
    const price = product.default_price as Stripe.Price;

    return (
        <Link href={`/products/${product.id}`} className="block h-full">
            <Card className="group hover:shadow-xl transition-shadow duration-300 py-0 h-full flex flex-col bg-gray-900 text-white gap-0">
                {product.images && product.images[0] && (
                    <div className="relative h-80 w-full overflow-hidden rounded-t-lg">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="group-hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                )}
                <CardHeader className="p-4">
                    <CardTitle className="text-xl font-bold text-white">
                        {product.name}
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-4 flex-grow flex flex-col justify-between">
                    <p className="text-gray-400 text-sm">
                        {product.description}
                    </p>
                    {price && price.unit_amount && (
                        <p className="text-lg text-lime-400 font-semibold">
                            ${(price.unit_amount / 100).toFixed(2)}
                        </p>
                    )}
                    <Button className="bg-white text-black font-bold uppercase w-full py-2 hover:bg-lime-400 transition-all duration-300">
                        View Details
                    </Button>
                </CardContent>
            </Card>
        </Link>
    );
}
