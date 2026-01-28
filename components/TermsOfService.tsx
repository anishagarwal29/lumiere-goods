import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';

interface TermsOfServiceProps {
    onBack: () => void;
}

const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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

                <h1 className="text-3xl font-bold mb-2">Terms of Service for Lumiere Goods</h1>
                <p className="text-slate-500 mb-8">Last Updated: 28 Jan 2026</p>

                <div className="prose prose-slate max-w-none">
                    <p className="lead mb-6">
                        Welcome to Lumiere Goods. By accessing our website and purchasing from us, you agree to the following terms. Please read them carefully.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">1. General Conditions</h2>
                    <p className="mb-6 text-slate-700">
                        We reserve the right to refuse service to anyone for any reason at any time. You agree not to reproduce, duplicate, copy, or resell any part of our service or products without express written permission from us.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">2. Products & Shipping (Important)</h2>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                        <li><strong>Third-Party Fulfillment:</strong> We work with global suppliers to source our products. This means your items may be shipped directly from our partners overseas.</li>
                        <li><strong>Shipping Times:</strong> Because our products ship from various global locations, shipping times may vary (typically 7–20 business days). By placing an order, you accept these shipping timelines.</li>
                        <li><strong>Split Shipments:</strong> If you order multiple items, they may arrive in separate packages at different times.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-8 mb-4">3. Pricing & Modifications</h2>
                    <p className="mb-6 text-slate-700">
                        Prices for our products are subject to change without notice. We reserve the right to modify or discontinue a product at any time. We are not liable to you or any third party for any price change, suspension, or discontinuance of the service.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">4. Returns & Refunds</h2>
                    <ul className="list-disc pl-5 space-y-2 mb-6 text-slate-700">
                        <li><strong>Defective Items:</strong> If you receive a damaged or incorrect item, please contact us within 7 days of delivery with photos, and we will arrange a replacement or refund.</li>
                        <li><strong>Change of Mind:</strong> You may return items within 14 days at your own shipping expense.</li>
                    </ul>

                    <h2 className="text-xl font-bold mt-8 mb-4">5. Accuracy of Information</h2>
                    <p className="mb-6 text-slate-700">
                        We try our best to display colors and images accurately. However, we cannot guarantee that your computer monitor's display of any color will be accurate. We do not warrant that the quality of any products will meet your expectations, though we strive for excellence.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">6. Limitation of Liability</h2>
                    <p className="mb-6 text-slate-700">
                        Lumiere Goods is not liable for any delays caused by shipping carriers or customs clearance processes. In no case shall our directors, employees, or affiliates be liable for any injury, loss, or claim arising from your use of our service.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">7. Governing Law</h2>
                    <p className="mb-6 text-slate-700">
                        These Terms of Service shall be governed by and construed in accordance with the laws of Singapore.
                    </p>

                    <h2 className="text-xl font-bold mt-8 mb-4">8. Contact Information</h2>
                    <p className="mb-6 text-slate-700">
                        Questions about the Terms of Service should be sent to us at <a href="mailto:alishanfidai12@gmail.com" className="text-blue-600 hover:underline">alishanfidai12@gmail.com</a>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
