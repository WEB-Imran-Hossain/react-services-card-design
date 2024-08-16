import React from 'react';
import { FaReact } from "react-icons/fa6";

const IconHoverEffect = () => {
    const cardsData = [
        {
          id: 1,
          title: "Responsive Design",
          description:
            "Learn the principles of responsive design and how to create websites that look great on any device.",
          imageUrl:
            "https://i.ibb.co/GpQz13q/amy-hirschi-K0c8ko3e6-AA-unsplash.jpg",
        },
        {
          id: 2,
          title: "JavaScript Frameworks",
          description:
            "Explore the latest JavaScript frameworks like React, Angular, and Vue.js for building dynamic web applications.",
    
          imageUrl:
            "https://i.ibb.co/XjBpCZh/brooke-cagle-WHWYBmtn3-0-unsplash.jpg",
        },
        {
          id: 3,
          title: "CSS Grid & Flexbox",
          description:
            "Master the art of layout with CSS Grid and Flexbox for creating complex and flexible web layouts.",
    
          imageUrl:
            "https://i.ibb.co/2qJn2K3/desola-lanre-ologun-USp4-Gzr-Hdw-unsplash.jpg",
        },
        {
          id: 4,
          title: "Web Performance",
          description:
            "Optimize web performance to ensure fast loading times and a smooth user experience.",
    
          imageUrl:
            "https://i.ibb.co/KG1jvQN/domenico-loia-h-GV2-Tf-Oh0ns-unsplash.jpg",
        },
        {
          id: 5,
          title: "Web Accessibility",
          description:
            "Ensure your websites are accessible to everyone by following web accessibility best practices.",
    
          imageUrl:
            "https://i.ibb.co/xfKrzrp/headway-5-Qg-Iuu-Bx-Kw-M-unsplash.jpg",
        },
        {
          id: 6,
          title: "Version Control with Git",
          description:
            "Learn how to manage your code effectively with Git, the essential tool for modern web development.",
    
          imageUrl: "https://i.ibb.co/jMgpfmw/mimi-thian-Gy-RC8m-ZKDU-unsplash.jpg",
        },
        {
          id: 7,
          title: "API Integration",
          description:
            "Integrate third-party APIs into your web projects to add powerful features and services.",
    
          imageUrl: "https://i.ibb.co/xhRtZQz/mimi-thian-lp1-AKIUV3yo-unsplash.jpg",
        },
        {
          id: 8,
          title: "DevOps for Web Development",
          description:
            "Discover the importance of DevOps practices in web development for continuous integration and deployment.",
    
          imageUrl:
            "https://i.ibb.co/ZmKVTCN/nordwood-themes-ub-IWo074-Ql-U-unsplash.jpg",
        },
      ];
      return (
        <div className="className='my-20 ">
          <h1 className="text-3xl font-bold my-10 text-center">
            Icon Hover Effect
          </h1>
          <div className="flex justify-center py-12">
            <div className="relative overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-[80vw]">
              {cardsData.map((card) => (
                <div
                  key={card?.id}
                  className="group relative cursor-pointer overflow-hidden px-6 pt-10 pb-8 shadow-lg rounded-md border border-gray-200 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:rounded-lg bg-green-700 bg-opacity-50"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundImage: `url(${card?.imageUrl})` }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-green-900 bg-opacity-50 transition-opacity duration-300 group-hover:bg-opacity-60" />
                  {/* Decorative element */}
                  <span className="absolute top-10 z-0 h-20 w-20 rounded-md bg-yellow-400 transition-all duration-300 group-hover:scale-[20]" />
                  <div className="relative z-10">
                    {/* Icon */}
                    <span className="grid h-20 w-20 place-items-center rounded-full bg-yellow-400 transition-all duration-300 group-hover:bg-yellow-300">
                      
                      <FaReact className="h-10 w-10 text-white transition-all" />
                    </span>
                    {/* Card content */}
                    <div className="space-y-6 pt-5 text-base leading-7 text-gray-300 transition-all duration-300 group-hover:text-white/80">
                      <p className="text-white text-lg font-semibold">
                        {card?.title}
                      </p>
                      <p className="text-white text-base font-semibold">
                        {card?.description}
                      </p>
                    </div>
                    {/* Read more link */}
                    <div className="pt-5 text-base font-semibold leading-7">
                      <p>
                        <a
                          href="#"
                          className="text-yellow-400 transition-all duration-300 group-hover:text-white"
                        >
                          Read more →
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
};

export default IconHoverEffect;