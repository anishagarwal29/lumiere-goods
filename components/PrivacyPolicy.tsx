import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
    onBack: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-16 px-6 bg-white min-h-screen">
            <div className="max-w-3xl mx-auto">
                <button
                    onClick={onBack}
                    className="group flex items-center text-slate-500 hover:text-black transition-colors mb-8"
                >
                    <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Store
                </button>

                <h1 className="text-3xl font-bold mb-2">Privacy Policy for Lumiere Goods</h1>
                <p className="text-slate-500 mb-8">Last Updated: 28 Jan 2026</p>

                <div className="prose prose-slate max-w-none">
                    <p className="lead mb-6">
                        At Lumiere Goods, we value your privacy. We are real people running a small business, and we respect your data. This policy outlines what we collect and how we use it.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">1. Information We Collect</h2>
                    <p className="mb-4">When you browse or buy from our store, we collect:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                        <li><strong>Order Information:</strong> Your name, shipping address, and email so we can process your order.</li>
                        <li><strong>Payment Details:</strong> We do not store your credit card info. All payments are processed securely through safe payment processors.</li>
                        <li><strong>Device Info:</strong> Basic data like your IP address and time zone to help our site load correctly for you.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-8 mb-4">2. How We Use Your Information</h2>
                    <p className="mb-4">We use your data strictly to:</p>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                        <li>Fulfill and ship your orders.</li>
                        <li>Send you order confirmations and tracking updates.</li>
                        <li>Screen for potential risk or fraud.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-8 mb-4">3. Sharing with Third Parties</h2>
                    <p className="mb-6 text-slate-700">
                        Since we work with global partners to create our products, we share your shipping name and address with our suppliers solely for the purpose of delivering your package. We do not sell your personal data to marketing agencies or other third parties.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">4. Cookies</h2>
                    <p className="mb-6 text-slate-700">
                        We use cookies (small data files) to remember what’s in your cart and keep you logged in. You can disable these in your browser settings, but the site might not work as perfectly.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">5. Your Rights</h2>
                    <p className="mb-6 text-slate-700">
                        If you want to know what personal data we hold about you, or if you want us to delete it, just email us at <a href="mailto:lumieregoodshelp@gmail.com" className="text-blue-600 hover:underline">lumieregoodshelp@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
