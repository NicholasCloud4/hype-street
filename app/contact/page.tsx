"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission (send to an API, etc.)
        setIsSubmitted(true);
    };

    return (
        <div className="min-h-screen flex flex-col container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-center text-gray-700 mb-8">
                Have questions? We'd love to hear from you!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Contact Information
                    </h2>
                    <p>Email: contact@hypestreet.com</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Address: 123 Hype St, New York, NY</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <h2 className="text-2xl font-semibold">
                        Send Us a Message
                    </h2>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your Name"
                        className="w-full"
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Your Email"
                        className="w-full"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Your Message"
                        className="w-full"
                        required
                    />
                    <Button type="submit" className="w-full">
                        Send Message
                    </Button>
                    {isSubmitted && (
                        <p className="text-green-500 text-center">
                            Thank you for reaching out!
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}
