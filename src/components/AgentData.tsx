import { AlignCenter, BookAIcon, ChevronDown, ChevronUp, Copy, Ear, User, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function AgentData() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="mt-5">
      <h1 className="font-semibold text-lg text-black flex"> <Image src="/images/copilot.svg" width={25} height={25} className="mr-2" alt="co" /> Agent skill</h1>

      <div className="rounded-lg border border-gray-300 p-4 mt-4">
        <div className="flex justify-between">
          <p className="text-black font-medium text-base">
            Check if on-hand inventory will allow all sales orders to ship
            without delay
          </p>
          <button onClick={toggleVisibility}>
            {isVisible ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        {isVisible && (
          <div className="div">
            <p className="font-normal text-base space-y-4  text-black  whitespace-nowrap">
              When{" "}
              <span className="inline-flex bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-32">
                {" "}
                <User size={20} className="mr-1" /> any vendor
              </span>{" "}
              send an email with changes to{" "}
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <BookAIcon size={20} className="mr-1" />
                confirmed purchase orders,
              </span>
              check if the resulting{" "} <br />
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <AlignCenter size={20} className="mr-2" /> on hand inventory
              </span>
              will allow
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <Copy size={20} className="mr-1" /> all sales orders
              </span>{" "}
              to{" "}
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <User size={20} className="mr-1" /> ship without delay
              </span>{" "}
              if so{" "} <br />
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <Ear size={20} className="mr-1" /> update the purchase order 
              </span>
               to reflect the change.
            </p>
          </div>
        )}
          </div>
          <div className="mt-5 relative">
              <p className="font-bold text-lg text-black flex"> <Image src="/images/outlook.svg" width={25} height={25} className="mr-2" alt="co" /> Enable email access</p>
              <p className="mt-3">Allow the agent to access the email inboxes to read email from unknown vendors </p>
              <div className="flex justify-between gap-5 mt-3 ">
                  <input type="text"  placeholder="" className="border border-gray-300 w-full rounded-lg" />
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-lg whitespace-nowrap">Allow access</button>
        </div>
        <div className="flex bg-gray-200 rounded-lg w-44 absolute lg:top-[77px]  top-[100px] left-2">
          <p className="text-[10px] text-black bg-yellow-100 rounded-full px-2">P</p>
          <div className="border w-28 h-5 flex bg-gray-200">
              <p className="text-black font-normal text-[10px] ml-2">puchasing@contoso.com</p>
          </div>
          <X className="ml-2" size={20}/>
        </div>
      </div>
      <div className="flex justify-between space-x-5 mt-32">
        <div className="div"></div>
        <div className="space-x-5">
        <button className=" bg-gray-200 border-3 border-gray-100 text-gray-100 px-3 py-2 rounded-lg font-semibold text-base">Activate</button>
        <button className="border-2 border-gray-100 bg-white text-black px-3 py-2 rounded-lg font-semibold text-base">Close</button>
        </div>
      </div>
    </div>
  );
}
