"use client";
import Image from "next/legacy/image";
import Stripe from "stripe";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/CartStore";

interface Props {
    product: Stripe.Product;
}

export default function ProductDetail({ product }: Props) {
    const { items, addItem, removeItem } = useCartStore();
    const price = product.default_price as Stripe.Price;

    const cartItem = items.find((item) => {
        return item.id === product.id;
    });

    const quantity = cartItem ? cartItem.quantity : 0;

    function onAddItem() {
        addItem({
            id: product.id,
            name: product.name,
            price: price.unit_amount as number,
            imageUrl: product.images ? product.images[0] : null,
            quantity: 1,
        });
    }

    return (
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-8 items-center bg-gray-100 text-black">
            {product.images && product.images[0] && (
                <div className="relative h-200 w-full md:w-1/2 rounded-lg overflow-hidden shadow-md">
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 hover:scale-105"
                    />
                </div>
            )}

            <div className="md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                {product.description && (
                    <p className="text-gray-400 mb-4">{product.description}</p>
                )}
                {price && price.unit_amount && (
                    <p className="text-lg font-semibold text-lime-400">
                        ${(price.unit_amount / 100).toFixed(2)}
                    </p>
                )}

                <div className="flex items-center space-x-4">
                    <Button
                        variant={"outline"}
                        onClick={() => removeItem(product.id)}
                    >
                        -
                    </Button>
                    <span>{quantity}</span>
                    <Button variant={"outline"} onClick={onAddItem}>
                        +
                    </Button>
                </div>
            </div>
        </div>
    );
}
