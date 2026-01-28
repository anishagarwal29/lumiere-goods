import React, { useEffect, useState } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';

interface ContactUsProps {
    onBack: () => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formState, setFormState] = useState({
        name: '',
        email: '',
        orderNumber: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        // Simulate submission
        setTimeout(() => {
            // In a real app, this would send data
        }, 1000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6">
                <button
                    onClick={onBack}
                    className="group flex items-center text-slate-500 hover:text-black transition-colors mb-8"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Store
                </button>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Left Side - Info */}
                    <div className="lg:w-1/3 pt-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
                            We're here for you.
                        </h1>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            Questions about shipping or returns? Check our FAQ first for the fastest answer.
                        </p>

                        <div className="space-y-4 mb-12">
                            <div>
                                <a href="#" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between border-b border-gray-100 py-3 group">
                                    Track My Order
                                    <span className="text-slate-400 group-hover:text-blue-600 transition-colors">→</span>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="text-lg font-medium text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between border-b border-gray-100 py-3 group">
                                    Shipping Info
                                    <span className="text-slate-400 group-hover:text-blue-600 transition-colors">→</span>
                                </a>
                            </div>
                            <div>
                                <a href="#" className="font-medium text-lg text-slate-900 hover:text-blue-600 transition-colors flex items-center justify-between border-b border-gray-100 py-3 group">
                                    Returns
                                    <span className="text-slate-400 group-hover:text-blue-600 transition-colors">→</span>
                                </a>
                            </div>
                        </div>

                        <div>
                            <p className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-2">Email Us</p>
                            <a href="mailto:lumieregoodshelp@gmail.com" className="text-xl font-medium text-slate-900 hover:underline">
                                lumieregoodshelp@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="lg:w-2/3">
                        <div className="bg-slate-50 p-8 md:p-12 rounded-3xl">
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="w-8 h-8 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
                                    <p className="text-slate-600">We'll get back to you as soon as possible.</p>
                                    <button
                                        onClick={() => setIsSubmitted(false)}
                                        className="mt-8 px-6 py-2 text-sm font-medium text-slate-900 border border-slate-300 rounded-full hover:bg-white transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-slate-700">Name</label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formState.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formState.email}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="orderNumber" className="text-sm font-medium text-slate-700">Order Number <span className="text-slate-400 font-normal">(Optional)</span></label>
                                        <input
                                            type="text"
                                            id="orderNumber"
                                            name="orderNumber"
                                            value={formState.orderNumber}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all"
                                            placeholder="#12345"
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            value={formState.message}
                                            onChange={handleChange}
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-black transition-all resize-none"
                                            placeholder="How can we help you today?"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-black transform transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-slate-900/20"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
