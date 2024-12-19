"use client"

import {
  type LucideIcon,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Item } from "@/types/sidebar"

export function NavProjects({
  projects,
}: {
  projects: Item[]
}) {
  // const { isMobile } = useSidebar()

  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="font-medium text-black text-sm" >My Works</SidebarGroupLabel>
      <SidebarMenu>
      {projects.map((item) => (
          <SidebarMenuItem key={item.name}>
            <SidebarMenuButton asChild>
              <a href={item.url}>
                <item.icon />
                <span>{item.name}</span>
              </a>
            </SidebarMenuButton>
                    </SidebarMenuItem>
        ))}      </SidebarMenu>
    </SidebarGroup>
  )
}
