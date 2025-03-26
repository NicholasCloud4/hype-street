import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Hype Street",
    description: "Puchase your favorite street wear from Hype Street",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={"flex min-h-full flex-col bg-gray-100"}>
                <Navbar />
                <main className="flex-grow container mx-auto px-4 py-8">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    );
}
