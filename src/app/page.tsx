"use client"

import Image from "next/image"
import Carousel from "../components/Carousel"
import { AppSidebar } from "@/components/app-sidebar"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import LeadsTable from "../components/LeadTable"
import Card from "../components/Card"
import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';


export default  function Page() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  } 

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
               <div className="flex flex-1 flex-col gap-4 p-4 ">
          <div className="flex flex-col  rounded-xl bg-white shadow-lg border-2 border-blue-500 p-4">
            <div className="flex justify-between ">
            <p className='font-bold text-base flex'> <Image src="/images/copilot.svg" width={25} height={25} className="mr-2" alt="co" /> Hi Mona, <span className='text-blue-500'>68%</span>of goal achieved and rest can be achieved by focusing on 20 top leads </p>
              <button onClick={toggleVisibility} >
              {isVisible ?  <ChevronUp />  : <ChevronDown/> }
           </button>
            </div>
            {isVisible && (
              <div className="flex lg:flex-row flex-col mt-10">
              <div className="flex flex-col">
                <p className='text-sm font-normal mb-2'>Copilot has pinpointed 20 keyleads that shows strong purchase intent and actively engaging. This needs your focus</p>
                  <Carousel />
            </div>
                <div className="flex flex-col">
                  <p className='mb-2 text-sm font-semibold text-gray-700'>Other activities</p>
              <Card/>
              </div>
              </div>
            )}
          </div>
          <div className=" flex rounded-xl bg-muted/50 md:min-h-min" />
          <LeadsTable/>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
