import { ChevronDown, ChevronUp, User } from "lucide-react";
import React, { useState } from "react";

export default function AgentData() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="mt-5">
      <h1 className="font-semibold text-lg text-black">Agent skill</h1>

      <div className="rounded-lg border border-gray-300 p-4 mt-4">
        <div className="flex justify-between">
          <p>
            Check if on-hand inventory will allow all sales orders to ship
            without delay
          </p>
          <button onClick={toggleVisibility}>
            {isVisible ? <ChevronUp /> : <ChevronDown />}
          </button>
        </div>
        {isVisible && (
          <div className="div">
            <p className="font-normal text-base space-y-4   whitespace-nowrap">
              When{" "}
              <span className="inline-flex bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-32">
                {" "}
                <User size={20} className="mr-1" /> any vendor
              </span>{" "}
              send an email with changes to{" "}
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <User size={20} className="mr-1" />
                confirmed purchase orders,
              </span>
              check if the resulting{" "} <br />
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <User size={20} className="mr-2" /> on hand inventory
              </span>
              will allow
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <User size={20} className="mr-1" /> all sales orders
              </span>{" "}
              to{" "}
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <User size={20} className="mr-1" /> ship without delay
              </span>{" "}
              if so{" "} <br />
              <span className="inline-flex flex-row bg-blue-100 text-blue-300 px-2 py-1 rounded-full w-min-fit">
                {" "}
                <User size={20} className="mr-1" /> update the purchase order 
              </span>
               to reflect the change.
            </p>
          </div>
        )}
          </div>
          <div className="mt-5">
              <p className="font-bold text-lg text-black">Enable email access</p>
              <p className="mt-3">Allow the agent to access the email inboxes to read email from unknown vendors </p>
              <div className="flex justify-between gap-5 mt-3">
                  <input type="text"  placeholder="" className="border border-gray-100 w-full rounded-lg" />
                  <button className="bg-blue-500 text-white px-3 py-2 rounded-lg whitespace-nowrap">Allow access</button>
         </div>
          </div>
    </div>
  );
}