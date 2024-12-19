"use client"

import {
  SidebarTrigger
} from "@/components/ui/sidebar"
import * as React from "react"
import { useState } from "react"

import {
  Accessibility,
  Book,
  Frame,
  Home,
  LayoutDashboard,
  ListOrderedIcon,
  MailCheckIcon,
  Map,
  PhoneCall,
  PieChart,
  Pin,
  Projector,
  Quote,
  SquareTerminal,
  User2
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavSales } from "./nav-sales"
import { NavCustomers } from "./nav-customers"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Data } from "@/types/sidebat"
import AgentData from "./AgentData"
import LeadData from "./LeadData"




export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogOpen1, setIsDialogOpen1] = useState(false);

  const handleLeadClick = () => {
    // e.preventDefault(); 
    setIsDialogOpen(true);  
  };
  const handleLeadClick1 = () => {
    // e.preventDefault(); 
    setIsDialogOpen1(true);  
  };

  // const closeDialog = () => {
  //   setIsDialogOpen(false);  
  // };
  // const closeDialog1 = () => {
  //   setIsDialogOpen1(false);  
  // };

  // This is sample data.
const data:Data = {
  navMain: [
    {
      title: "Home",
      icon: Home,
  },
    {
      title: "Recent",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Pinned",
      url: "#",
      icon: Pin,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Sales accelerator",
      url: "#",
      icon: Accessibility,
    },
    {
      name: "Dashboard",
      url: "#",
      icon: LayoutDashboard,
    },
    {
      name: "Activities",
      url: "#",
      icon: Map,
    },
  ],
  customers: [
    {
      name: "Quotes",
      url: "#",
      icon: Quote,
    },
    {
      name: "Orders",
      url: "#",
      icon: ListOrderedIcon,
    },
        {
      name: "Invoices",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Products",
      url: "#",
      icon: Projector,
    },
    {
      name: "Sales Literature",
      url: "#",
      icon: PieChart,
    },
  ],
  sales: [
    {
      name: "Lead",
      url: "",
      icon: PhoneCall,
      onClick:handleLeadClick
    },
    {
      name: "opportunities",
      url: "#",
      icon: Book,
    },
    {
      name: "Competitors",
      url: "#",
      icon: User2,
    },
    {
      name: "Agent Skills",
      url: "#",
      icon: PieChart,
      onClick:handleLeadClick1
    },
  ],
}
  

  return (
        <div className="flex">
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        {/* <TeamSwitcher teams={data.teams} /> */}
        <SidebarTrigger className="-ml-1" />

      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
          <NavProjects projects={data.projects} />
        <NavSales sales={data.sales} />
          <NavCustomers customers={data.customers} />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
      </Sidebar>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[60rem]">
          <DialogTitle className="flex gap-2"> <MailCheckIcon color="blue"/> Engage with Jane Reyes</DialogTitle>
          <DialogDescription>

            <LeadData />
          </DialogDescription>
        </DialogContent>
      </Dialog>
      <div className="div">
        
      <Dialog open={isDialogOpen1} onOpenChange={setIsDialogOpen1}>
        <DialogContent className="max-w-[60rem]">
          <DialogTitle></DialogTitle>
            <DialogDescription>
              <AgentData/>
          </DialogDescription>
        </DialogContent>
      </Dialog>
</div>
  </div>
  )
}
