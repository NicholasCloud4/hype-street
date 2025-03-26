"use client";

import Link from "next/link";
import {
    ShoppingCartIcon,
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { useCartStore } from "@/store/CartStore";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState<boolean>(false);
    const { items } = useCartStore();
    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileOpen(false);
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <nav className="sticky top-0 z-50 bg-gray-100 shadow border-b border-gray-300">
            <div className="container mx-auto flex items-center justify-between px-4 py-4">
                <Link
                    href="/"
                    className="text-2xl font-bold hover:text-lime-400"
                >
                    Hype Street
                </Link>
                <div className="hidden md:flex space-x-8 text-lg font-medium">
                    <Link href="/" className="hover:text-lime-400">
                        Home
                    </Link>
                    <Link href="/products" className="hover:text-lime-400">
                        Products
                    </Link>
                    <Link href="/checkout" className="hover:text-lime-400">
                        Checkout
                    </Link>
                </div>
                <div className="flex items-center space-x-6">
                    <Link href="/checkout" className="relative">
                        <ShoppingCartIcon className="h-6 w-6 hover:text-lime-400" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                    <Button
                        variant="ghost"
                        className="md:hidden hover:bg-lime-400 hover:text-white"
                        onClick={() => setMobileOpen((prev) => !prev)}
                    >
                        {mobileOpen ? (
                            <XMarkIcon className="h-6 w-6" />
                        ) : (
                            <Bars3Icon className="h-6 w-6" />
                        )}
                    </Button>
                </div>
            </div>
            {mobileOpen && (
                <nav className="md:hidden bg-gray-100 shadow-md">
                    <ul className="flex flex-col p-4 space-y-4">
                        <li>
                            <Link
                                href="/"
                                className="block hover:text-lime-400"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/products"
                                className="block hover:text-lime-400"
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/checkout"
                                className="block hover:text-lime-400"
                            >
                                Checkout
                            </Link>
                        </li>
                    </ul>
                </nav>
            )}
        </nav>
    );
}
