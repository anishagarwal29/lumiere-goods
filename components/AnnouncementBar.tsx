import React from 'react';

const AnnouncementBar: React.FC = () => {
    const text = "50% OFF — <span class='font-normal opacity-90'>With Global Shipping</span>";
    const separator = " • ";
    // Create an array to repeat the text enough times to fill the screen + buffer
    const items = Array(10).fill(`${text}${separator}`);

    return (
        <div className="bg-blue-600 text-white overflow-hidden py-3 sticky top-0 z-[100] shadow-md border-b border-blue-700">
            <div className="whitespace-nowrap flex animate-marquee">
                {/* Render content twice for seamless loop */}
                <div className="flex items-center">
                    {items.map((item, i) => (
                        <span key={`1-${i}`} className="mx-4 text-sm font-bold tracking-wider uppercase" dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </div>
                <div className="flex items-center">
                    {items.map((item, i) => (
                        <span key={`2-${i}`} className="mx-4 text-sm font-bold tracking-wider uppercase" dangerouslySetInnerHTML={{ __html: item }} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AnnouncementBar;
