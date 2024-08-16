import React from 'react';

// Array of profile objects with id, name, role, and image properties
const profiles = [
    {
        id: 1,
        name: 'Alex Johnson',
        role: 'Frontend Developer',
        image: 'https://i.postimg.cc/3xgFrYqd/p1.jpg',
    },
    {
        id: 2,
        name: 'Maya Patel',
        role: 'Backend Developer',
        image: 'https://i.postimg.cc/hPQ0w9b8/p-2.jpg',
    },
    {
        id: 3,
        name: 'Samuel Lee',
        role: 'Full Stack Developer',
        image: 'https://i.postimg.cc/4xC1TmBD/p3.jpg',
    },
];

const TeamMemberCardEffect = () => {
    return (
        <div className="my-10">
            <h1 className="text-3xl font-bold my-10 text-center">Team Member Card Effect</h1>
            <div className="flex justify-center items-center w-[90vw] sm:w-[80vw] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                    {profiles.map((profile) => (
                        <div
                            key={profile?.id} // Key should be based on unique id
                            className="relative w-full sm:w-[20rem] md:w-[25rem] lg:w-[20rem] xl:w-[22rem] h-[20rem] sm:h-[25rem] md:h-[30rem] lg:h-[25rem] xl:h-[30rem] group transition-transform duration-500 ease-in-out"
                        >
                            {/* Container for the profile image with hover effect */}
                            <div className="absolute inset-0 z-20 transition-transform duration-500 ease-in-out group-hover:translate-x-[-3.5rem] group-hover:translate-y-[-3.5rem]">
                                <img
                                    src={profile?.image}
                                    alt={profile?.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Container for the name and role with hover effect */}
                            <div className="absolute inset-0 p-4 flex  justify-center items-end bg-white z-10 transition-transform duration-500 ease-in-out group-hover:translate-x-[3.5rem] group-hover:translate-y-[3.5rem] text-center">
                                <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-900 leading-8 tracking-wide">
                                    {profile?.name}
                                    <br />
                                    <span className="text-gray-600 text-base sm:text-lg md:text-xl font-light tracking-wider">
                                        {profile?.role}
                                    </span>
                                </h2>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default TeamMemberCardEffect;
