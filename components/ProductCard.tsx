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
        <Link href={`/products/1`}>
            <Card>
                {product.images && product.images[0] && (
                    <div className="relative h-80 w-full">
                        <Image
                            src={product.images[0]}
                            alt={product.name}
                            layout="fill"
                            objectFit="cover"
                            className="transition-opacity duration-500 ease-in-out"
                        />
                    </div>
                )}
                <CardHeader>
                    <CardTitle>{product.name}</CardTitle>
                    <CardContent>{product.description}</CardContent>
                    <CardContent>
                        {price && price.unit_amount && (
                            <p className="text-xl text-black">
                                ${(price.unit_amount / 100).toFixed(2)}
                            </p>
                        )}
                        <Button>View Details</Button>
                    </CardContent>
                </CardHeader>
            </Card>
        </Link>
    );
}
