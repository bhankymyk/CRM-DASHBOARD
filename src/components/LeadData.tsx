import { useState } from "react";
import Image from "next/image";

export default function LeadData() {
  const [activeButton, setActiveButton] = useState(1)

  return (
    <div>
      <div className="shadow-sm p-4 rounded-lg border-2">

      <div className="flex flex-row">
        <Image
          src="/images/pic-person-03.jpeg"
          width={30}
          height={30}
          className="rounded-full"
          alt="dp"
          />
        <div className="flex-col ml-3">
          <h3 className="text-base font-semibold text-gray-900">Jane Reyes</h3>
          <p className="text-[10px] text-gray-600">COO Northwind Traders</p>
        </div>
      </div>
      </div>
      <div className="mt-5">
        <div className="flex justify-between bg-blue-50 p-4 rounded-lg">
          <div className="mr-10 whitespace-nowrap">
            <p className="text-sm">Jane maybe interested in upgrading expresso machines for her in-store coffee shop</p>
</div>
          <div className="flex space-x-2">
            <p>Edit</p>
            <p>Approve</p>
</div>
        </div>
      </div>
      <div className="flex space-x-10  mt-2 shadow-sm  rounded-lg p-2">
           <button onClick={() => setActiveButton(1)}
              className={`font-medium text-lg ${
                activeButton === 1 ? "underline text-blue-800 font-bold text-base" : "text-black"
              } hover:bg-blue-200`}>  
              Engage
                  </button>
                  <button onClick={() => setActiveButton(2)}
              className={`font-medium text-lg ${
                activeButton === 2 ? "underline text-blue-800 font-bold text-base" : "text-black"
              } hover:bg-blue-200`}> 
              Search
                  </button>
      </div>
      {activeButton === 1 && (
        <div className="p-4 bg-blue-100 mt-3 rounded-lg">
          <p className="font-bold text-base">Click on search to see it content</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio officia ducimus, debitis veritatis accusantium magni! In natus ipsa maiores quo?</p>
        </div>
      )}
      
      {activeButton === 2 && (

        <div className="p-4 bg-blue-100 mt-3 rounded-lg">
        <h1 className="text-blue-500 text-base">Why i picked this lead</h1>
        <ul className="list-disc p-5">
          <li className="whitespace-nowrap">Jane is a <span className="font-bold">Key decision maker and was browsing </span>and was browsing<span className="font-bold">"expresso machine"</span>on First's coffee website</li>
          <li>Multiple people at her company have reported 'slowness' <span>servive requests</span></li>
          <li>Northwind Traders currently see <span className="font-bold">$200m in revenue</span> from their in-store coffee shops</li>
        </ul>
        <div className="flex gap-5">
      <div className="shadow-md p-4 rounded-lg bg-white w-[13rem]">
      <div className="flex flex-row">
        <Image
          src="/images/pic-person-03.jpeg"
          width={30}
          height={30}
          className="rounded-full"
          alt="dp"
          />
        <div className="flex-col ml-3">
          <h3 className="text-base font-normal text-gray-600">Decision Maker</h3>
          <p className="text-base text-gray-900 font-semibold">Yes</p>
        </div>
      </div>
          </div>

          <div className="shadow-md p-4 rounded-lg bg-white w-[15rem]">
      <div className="flex flex-row">
        <Image
          src="/images/pic-person-03.jpeg"
          width={30}
          height={30}
          className="rounded-full"
          alt="dp"
          />
        <div className="flex-col ml-3">
          <h3 className="text-base font-normal text-gray-600">Potential deal value</h3>
          <p className="text-base text-gray-900 font-semibold">$1m</p>
        </div>
      </div>
          </div>

          <div className="shadow-md p-4 rounded-lg bg-white w-[13rem]">
      <div className="flex flex-row">
        <Image
          src="/images/pic-person-03.jpeg"
          width={30}
          height={30}
          className="rounded-full"
          alt="dp"
          />
        <div className="flex-col ml-3">
          <h3 className="text-base font-normal text-gray-600">Intent</h3>
          <p className="text-base text-gray-900 font-semibold">High</p>
        </div>
      </div>
      </div>
        </div>
      </div>

      ) }
      <div className="border-2 border-gray-100 mt-5 p-4 rounded-lg shadow-sm">
        <h1>About Jane</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati est blanditiis ducimus quasi, laborum voluptas hic. Harum iure itaque iusto minima exercitationem cum odio dolorum cumque asperiores perferendis. Mollitia, neque!</p>
      </div>
    </div>
  );
}
