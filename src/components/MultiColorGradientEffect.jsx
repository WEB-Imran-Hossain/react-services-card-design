import { useState } from 'react';
import { webDevCardsData } from '../data/webDevCardData';

const MultiColorGradientEffect = () => {
    const [gradient, setGradient] = useState(webDevCardsData)
    
    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold my-10 text-center'>Gradient Hover Effect</h1>

            {/* Grid container for the cards */}
            <div className="py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-[80vw] mx-auto">
                {webDevCardsData.map((webDevCard) => (
                    // Card container with background image and hover effect
                    <div
                        key={webDevCard?.id}
                        className="relative shadow-lg group container rounded-md bg-white flex justify-center items-center mx-auto bg-cover bg-center transition-all duration-300 ease-in-out"
                        style={{
                            backgroundImage: `url(${webDevCard?.imageUrl})`,
                        }}
                    >
                        {/* Gradient overlay that appears on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent group-hover:from-sky-500 group-hover:via-yellow-500 group-hover:to-red-500 opacity-90 transition-all duration-300 ease-in-out rounded-md"></div>

                        {/* Content inside the card */}
                        <div className="relative z-10">
                            <div>
                                {/* Placeholder for image or content */}
                                <div className="w-full h-64 rounded-t-md bg-cover" />

                                {/* Card text content, opacity changes on hover */}
                                <div className="py-8 px-4 bg-white rounded-b-md opacity-100 group-hover:opacity-25 transition-opacity duration-300">
                                    <span className="block text-lg text-gray-800 font-bold tracking-wide">
                                        {webDevCard?.title}
                                    </span>
                                    <span className="block text-gray-600 text-sm">
                                        {/* Example placeholder text */}
                                        Vivamus ac ligula sit amet erat luctus laoreet ac quis ligula. Donec bibendum faucibus purus eget cursus. Proin enim ante, scelerisque vel sem sit amet, ultrices mollis risus. Praesent justo felis, ullamcorper a cursus sed, condimentum at dui.
                                    </span>
                                </div>
                            </div>

                            {/* Content visible on hover */}
                            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <span className="text-3xl font-bold text-white tracking-wider leading-relaxed font-sans">
                                    {webDevCard?.overlayText}
                                </span>
                                <div className="pt-8 text-center">
                                    <button className="rounded-md p-3 bg-white text-gray-700 font-bold text-lg">
                                        Learn more
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MultiColorGradientEffect;