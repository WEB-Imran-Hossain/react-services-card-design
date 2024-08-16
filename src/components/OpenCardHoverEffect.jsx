import React from "react";
const OpenCardHoverEffect = () => {
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
    <div className="my-10">
      <h1 className="text-3xl font-bold my-10 text-center">
        Open Drawer Hover Effect
      </h1>
      <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-[80vw] mx-auto">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className="relative w-full h-72 overflow-hidden group cursor-pointer"
          >
            {/* Overlay for user icon */}
            <div className="absolute inset-0 flex items-center justify-center bg-blue-700 transition-transform duration-500 transform translate-y-12 group-hover:translate-y-0"></div>

            {/* Main card content */}
            <div className="absolute inset-0 flex items-center justify-center p-5 bg-white shadow-lg transition-transform duration-500 transform group-hover:-translate-y-32 sm:group-hover:-translate-y-36 md:group-hover:-translate-y-44">
              <div className="text-center">
                <h3 className="text-lg sm:text-xl md:text-2xl text-gray-800">
                  {card.title}
                </h3>
                <p className="text-sm sm:text-base md:text-gray-600">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Image */}
            <img
              src={card.imageUrl}
              alt={card.overlayText}
              className="absolute inset-0 object-cover w-full h-full opacity-30 transition-opacity duration-500 group-hover:opacity-100"
            />

            {/* Bottom highlight */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-700 w-6 sm:w-7 md:w-8 h-1"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OpenCardHoverEffect;
