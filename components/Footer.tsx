import Link from "next/link";
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Brand Info */}
                <div>
                    <h2 className="text-3xl font-extrabold">Hype Street</h2>
                    <p className="mt-2 text-gray-400">
                        Bold fashion for the fearless. Stay fresh. Stay real.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/products"
                                className="hover:text-lime-400"
                            >
                                Shop
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-lime-400">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/contact"
                                className="hover:text-lime-400"
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <Link href="https://instagram.com" target="_blank">
                            <FaInstagram className="text-2xl hover:text-lime-400" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank">
                            <FaTwitter className="text-2xl hover:text-lime-400" />
                        </Link>
                        <Link href="https://facebook.com" target="_blank">
                            <FaFacebook className="text-2xl hover:text-lime-400" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
                &copy; {new Date().getFullYear()} Hype Street. All Rights
                Reserved.
            </div>
        </footer>
    );
}
