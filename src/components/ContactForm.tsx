// components/ContactForm.tsx
"use client";
import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("sent");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error sending form:", error);
            setStatus("error");
        }

        // Reset status after 3 seconds
        setTimeout(() => setStatus("idle"), 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    return (
        <section id="contact" className="my-12">
            <h2 className="text-2xl font-bold mb-6">Contact Me</h2>

            <form onSubmit={handleSubmit} className="max-w-lg space-y-4">
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                        required
                    />
                </div>

                <div>
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                        required
                    />
                </div>

                <div>
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500"
                        required
                    />
                </div>

                <div>
          <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-green-500 resize-vertical"
              required
          />
                </div>

                <button
                    type="submit"
                    disabled={status === "loading"}
                    className="px-6 py-3 rounded bg-green-600 text-white hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                {status === "sent" && (
                    <p className="text-green-600 font-medium">✓ Message sent successfully!</p>
                )}
                {status === "error" && (
                    <p className="text-red-600 font-medium">✗ Failed to send. Please try again.</p>
                )}
            </form>
        </section>
    );
}