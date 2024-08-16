import React from 'react';

const cardsData = [
    {
      id: 1,
      title: "Artificial Intelligence",
      description: "Explore the world of AI and how it's transforming industries.",
      imageUrl: "https://images.unsplash.com/photo-1593642632559-0c7e6b18b2ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      title: "Blockchain Technology",
      description: "Learn about blockchain and its impact on the future of finance.",
      imageUrl: "https://images.unsplash.com/photo-1519377345644-937ef9754740?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      title: "Cybersecurity",
      description: "Discover the importance of cybersecurity in the digital age.",
      imageUrl: "https://images.unsplash.com/photo-1496346651079-6ca5cb67f42f?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      title: "Cloud Computing",
      description: "Understand cloud computing and its role in modern infrastructure.",
      imageUrl: "https://images.unsplash.com/photo-1592496001020-5c0e6f563177?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      title: "Data Science",
      description: "Dive into data science and how it drives decision-making.",
      imageUrl: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      title: "Internet of Things (IoT)",
      description: "Learn about IoT and its applications in smart technology.",
      imageUrl: "https://images.unsplash.com/photo-1569691052840-c029a42ea46c?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 7,
      title: "Quantum Computing",
      description: "Explore the future of computing with quantum technology.",
      imageUrl: "https://images.unsplash.com/photo-1526659609186-1ff3c8e0a957?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      title: "Virtual Reality",
      description: "Experience the immersive world of virtual reality.",
      imageUrl: "https://images.unsplash.com/photo-1560448071-17d9ec1caaa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      title: "Virtual Reality",
      description: "Experience the immersive world of virtual reality.",
      imageUrl: "https://images.unsplash.com/photo-1560448071-17d9ec1caaa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      title: "Virtual Reality",
      description: "Experience the immersive world of virtual reality.",
      imageUrl: "https://images.unsplash.com/photo-1560448071-17d9ec1caaa7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    },
  ];
const BackGroundHovereffect = () => {
    return (
        <div className='my-20'>
            <h1 className='text-3xl font-bold my-10 text-center'>Background Hover Effect</h1>
            <div className="flex flex-wrap items-center justify-center mb-20">
            {
              cardsData.map((card) => (
                <div key={card?.id}
                  className="relative block max-w-[350px] bg-[#e0f2f1] rounded-[4px] p-8 m-3 no-underline z-0 overflow-hidden transition-all duration-300 ease-out hover:bg-[#004d40] before:content-[''] before:absolute before:z-[-1] before:top-[-16px] before:right-[-16px] before:bg-[#004d40] before:h-[32px] before:w-[32px] before:rounded-full before:transition-transform before:duration-250 before:ease-out hover:before:scale-[21]"
                  href="#"
                >
                  <h3 className="text-gray-800 text-lg font-bold leading-6 mb-3 transition-colors duration-300 ease-out hover:text-[#ffffff]">
                    {card?.title}
                  </h3>
        
                  <p className="text-base font-normal leading-5 text-gray-800 transition-colors duration-300 ease-out hover:text-[#ffffff]/80">
                    {card?.description}
                  </p>
        
                  <div
                    className="flex items-center justify-center absolute w-8 h-8 top-0 right-0 bg-[#004d40] rounded-tr-[4px] rounded-bl-[10px] transition-transform duration-300 ease-out"
                  >
                    <div className="-mt-1 -mr-1 text-white">→</div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        );
};

export default BackGroundHovereffect;