"use client"

import { useState } from "react";
import Image from "next/image";
import { ChevronRightCircle } from "lucide-react";

const cardData = [
  {
    name: "Jane Reyes",
    title: "COO • Northwind Traders",
    description: "Jane may be interested in upgrading espresso machines for her in-store coffee shops.",
    highlight: "Engage with Jane Reyes",
    footer: "Expand business • High buying intent",
  },
  {
    name: "Allan Munger",
    title: "Head of Real Estate Development • Contoso Coffee",
    description: "Prepare for high-buying intent meeting Copilot scheduled for 2 PM regarding upgrading  contract.",
    highlight: "Prepare for meeting with Allan",
    footer: "Upcoming meeting • Due today",
  },
  {
    name: "Josia Love",
    title: "Operations Lead • BrewCorp",
    description: "Josia is looking to upgrade service plans for premium customers all over the world.",
    highlight: "Upgrade service plan for Josia",
    footer: "Premium plans • Immediate need",
  },
  {
    name: "Rachel Michael",
    title: "Manager • Espresso Solutions",
    description: "Rachel wants to address key service concerns regarding EspressoMaster.",
    highlight: "Resolve service issues with Rachel",
    footer: "Address service concerns • Customer",
  },
  {
    name: "Halle Griffiths",
    title: "CEO • Gourmet Coffee Ltd.",
    description: "Halle is expanding their business and looking for large equipment contracts.",
    highlight: "Discuss expansion with Halle",
    footer: "Expand operations • Strategic partner",
  },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-5xl">
      <div className="flex relative">

        <div className="relative flex items-center  overflow-hiddn rounded-lg">
          <div className="flex w-full">
            {cardData.slice(currentIndex, currentIndex + 2).map((card, index) => (
              <div
                key={index}
                className="max-w-[25rem] px-2 "
              >
                    <div className="bg-white rounded-lg shadow-lg p-4 mb-5">
                        <div className="flex flex-row">
                        <Image src="/images/pic-person-03.jpeg" width={30} height={30} className="rounded-full" alt="dp" />
                        <div className="flex-col ml-3">            
                              <h3 className="text-base font-semibold text-gray-900"> {card.name}</h3> 
                  <p className="text-[10px] text-gray-600">{card.title}</p>
                    </div>
                        </div>
                  <div className="p-4 bg-gray-50 rounded-lg shadow-sm mb-4">
                    <p className="font-semibold mb-1 text-sm">{card.highlight}</p>
                    <p className="text-gray-700 text-[10px]">{card.description}</p>
                  </div>
                  <p className="text-sm text-gray-500">{card.footer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={goToNext}
        >
        <ChevronRightCircle color="gray" className="absolute right-1" />
        </button>
      </div>


      <div className="relative  flex items-center justify-center">
        <div className="w-20 bg-gray-200 h-1 rounded-full">
          <div
            className="h-1 bg-blue-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / (cardData.length - 1)) * 100}%` }}
          ></div>
        </div>
      </div>


      {/* <div className="mt-2 flex justify-center gap-2">
        {cardData.slice(0, cardData.length - 1).map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`block w-2.5 h-2.5 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></span>
        ))}
      </div> */}
    </div>
  );
}