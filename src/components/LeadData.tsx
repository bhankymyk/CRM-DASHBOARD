import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ChevronUp, Edit2, Loader2, Loader2Icon, LoaderIcon, MedalIcon, Send, Sparkles, ThumbsDown, ThumbsUp } from "lucide-react";

export default function LeadData() {
  const [activeButton, setActiveButton] = useState(1)
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <div>
      <div className="shadow-sm p-2 rounded-lg border">
      <div className="flex flex-row">
        <Image
          src="/images/pic-person-03.jpeg"
          width={30}
          height={30}
          className="rounded-full"
          alt="dp"
          />
        <div className="flex-col ml-3">
          <h3 className="text-base font-semibold text-gray-900">Jane Reyes </h3>
          <p className="text-[10px] text-gray-600">COO Northwind Traders</p>
        </div>
      </div>
      </div>
      <div className="mt-5">
        <div className="flex lg:justify-between bg-blue-50 p-4 rounded-2xl">
          <div className="mr-10 whitespace-nowrap">
            <p className="text-sm font-normal text-purple-400 flex"> <Sparkles size={20} color="blue" className="mr-2" />  Jane maybe interested in upgrading expresso machines for her in-store coffee shop</p>
</div>
          <div className="flex space-x-2">
            <div className="flex p-2 bg-white rounded-md">
              <Edit2 color="blue" size={15} className="mr-1 mt-1" />
            <p className="text-blue-600 text-sm font-normal">Edit</p>
            </div>
            <div className="flex p-2 bg-purple-600 rounded-sm">
<Send color="white" size={20} className="mr-1"/>
            <p className="text-white text-sm font-normal">Approve and send</p>
            </div>
</div>
        </div>
      </div>
      <div className="flex space-x-10  mt-4 shadow-md  rounded-lg px-3 pt-3 ">
           <button onClick={() => setActiveButton(1)}
              className={`font-medium text-lg ${
                activeButton === 1 ? "border-b-2 border-purple-600 text-purple-800 font-bold text-base" : "text-black"
              } hover:bg-blue-200`}>  
              Engage
                  </button>
                  <button onClick={() => setActiveButton(2)}
              className={`font-medium text-lg ${
                activeButton === 2 ? "border-b-2 border-purple-600 text-purple-800 font-bold text-base" : "text-black"
              } hover:bg-blue-200`}> 
              Search
                  </button>
      </div>
      {activeButton === 1 && (
        <div className="p-4 bg-blue-100 mt-3 rounded-lg">
          <p className="font-bold text-base text-black">Click on SEARCH to see it content</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio officia ducimus, debitis veritatis accusantium magni! In natus ipsa maiores quo?</p>
        </div>
      )}
      
      {activeButton === 2 && (
<div className="bg-gray-50 p-2 mt-3 rounded-lg">
          
        <div className="p-4 bg-blue-100 mt-3 rounded-lg relative">
          <div className="bg-white p-1 absolute right-0 top-0">
           <Sparkles size={20} color="blue" className="mr-2  " />
          </div>
        <h1 className="text-purple-500 text-base">Why i picked this lead</h1>
        <ul className="list-disc p-5">
          <li className="whitespace-nowrap">Jane is a <span className="font-bold">Key decision maker and was browsing </span>and was browsing<span className="font-bold">"expresso machine"</span>on First's coffee website</li>
          <li>Multiple people at her company have reported 'slowness' <span>servive requests</span></li>
          <li>Northwind Traders currently see <span className="font-bold">$200m in revenue</span> from their in-store coffee shops</li>
        </ul>
        <div className="flex gap-5">
      <div className="shadow-md p-4 rounded-lg bg-white w-[13rem]">
      <div className="flex flex-row">
                <LoaderIcon size={50} color="green"/>
        <div className="flex-col ml-3">
          <h3 className="text-base font-normal text-gray-600">Decision Maker</h3>
          <p className="text-base text-gray-900 font-semibold">Yes</p>
        </div>
      </div>
          </div>

          <div className="shadow-md p-4 rounded-lg bg-white w-[15rem]">
      <div className="flex flex-row">
                <MedalIcon color="yellow" className="" size={50}/>
        
        <div className="flex-col ml-3">
          <h3 className="text-base font-normal text-gray-600">Potential deal value</h3>
          <p className="text-base text-gray-900 font-semibold">$1m</p>
        </div>
      </div>
          </div>

          <div className="shadow-md p-4 rounded-lg bg-white w-[13rem]">
      <div className="flex flex-row">
                <Loader2Icon size={50} color="purple"/>
        <div className="flex-col ml-3">
          <h3 className="text-base font-normal text-gray-600">Intent</h3>
          <p className="text-base text-gray-900 font-semibold">High</p>
        </div>
      </div>
      </div>
        </div>
          </div>
          <div className="flex justify-between mt-2">
            <div className="flex space-x-1">
              <div className="border h-5 w-6 items-center bg-gray-200">
              <MedalIcon color="yellow" size={15} className="mt-[2px]"/>
              </div>
              <div className="border w-20 h-5 flex bg-gray-200">
                <Loader2 color="blue" size={15} className="mt-[2px] mr-1"/>
              <p className="text-black font-normal text-[10px]">D365 sales</p>
              </div>
              <div className="border w-5 h-5">
              <p className="text-black font-normal text-[10px] bg-gray-200">+2</p>
              </div>
</div>
            <div className="flex space-x-5"><p className="font-normal text-[10px] text-black bg-gray-200">AI generated content maybe incorrect</p>
              <ThumbsDown size={15} /> <ThumbsUp size={15} />
            </div>
          </div>
</div>

      ) }
      <div className="border-2 border-gray-100 mt-5 p-4 rounded-xl shadow-lg">
        <div className="flex justify-between">
        <h1 className="text-black font-semibold text-base">About Jane</h1>
         <button onClick={toggleVisibility}> {isVisible ? <ChevronUp/> : <ChevronDown/> }
          </button>
        </div>
        {isVisible && (

          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium voluptatem iste nisi eum cumque quae ex maiores non! Tenetur quibusdam ullam dolor aliquid accusamus distinctio amet blanditiis, beatae nostrum repellat voluptate doloribus aliquam laboriosam corporis dolores quae earum impedit hic totam ad nihil magni fugit eaque. Dolores rem corporis dolorum asperiores est aliquam laboriosam nisi illo pariatur ipsa, cumque sunt libero! Perspiciatis veniam accusamus omnis obcaecati soluta earum aspernatur aut qui. Dolor ullam molestiae itaque repudiandae, sed aliquam provident expedita.</p>
        )}
      </div>
      <div className="flex justify-between mt-3">
        <div className="div"><p className="text-blue-600 text-sm font-normal">Show all</p></div>
        <div className="flex space-x-5">
        <ThumbsDown size={15} /> <ThumbsUp size={15}/>

        </div>
      </div>
    </div>
  );
}
