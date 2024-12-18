"use client"

import { useState } from "react"
import {
  SidebarTrigger
} from "@/components/ui/sidebar"
import * as React from "react"

import {
  BookOpen,
  Bot,
  Frame,

  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
// import { NavCustomers } from "./nav-customers"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import LeadData from "./LeadData"
import AgentData from "./AgentData"


interface NavItem {
  title: string;
  url?: string;
  icon?: any; // Replace 'any' with the actual type of the icon
  isActive?: boolean;
  items?: NavItem[];
}

// Define the structure for projects, customers, and sales items
interface Item {
  name: string;
  url: string;
  icon: any; // Replace 'any' with the actual type of the icon
  onClick?: () => void;
}

// Define the main data structure
interface Data {
  navMain: NavItem[];
  projects: Item[];
  customers: Item[];
  sales: Item[];
}



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
  // user: {
  //   name: "shadcn",
  //   email: "m@example.com",
  //   avatar: "/avatars/shadcn.jpg",
  // },
  // teams: [
  //   {
  //     name: "Acme Inc",
  //     logo: GalleryVerticalEnd,
  //     plan: "Enterprise",
  //   },
  //   {
  //     name: "Acme Corp.",
  //     logo: AudioWaveform,
  //     plan: "Startup",
  //   },
  //   {
  //     name: "Evil Corp.",
  //     logo: Command,
  //     plan: "Free",
  //   },
  // ],
  navMain: [
    {
      title: "Home",
      icon: SquareTerminal,
  },
    {
      title: "Homes",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
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
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Sales accelerator",
      url: "#",
      icon: Frame,
    },
    {
      name: "Dashboard",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Activities",
      url: "#",
      icon: Map,
    },
  ],
  customers: [
    {
      name: "Account",
      url: "#",
      icon: Frame,
    },
    {
      name: "Contacts",
      url: "#",
      icon: PieChart,
    },
  ],
  sales: [
    {
      name: "Lead",
      url: "",
      icon: Frame,
      onClick:handleLeadClick
    },
    {
      name: "opportunities",
      url: "#",
      icon: PieChart,
    },
    {
      name: "Competitors",
      url: "#",
      icon: PieChart,
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
        <NavProjects projects={data.sales} />
          <NavProjects projects={data.projects} />
          <NavProjects projects={data.customers} />
      </SidebarContent>
      <SidebarFooter>
        {/* <NavUser user={data.user} /> */}
      </SidebarFooter>
      <SidebarRail />
      </Sidebar>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[60rem]">
          <DialogTitle>Engage with Jane Reyes</DialogTitle>
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
