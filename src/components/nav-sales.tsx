"use client"

import {
  Folder,
  Forward,
  MoreHorizontal,
  Trash2,
  type LucideIcon,
} from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Item } from "@/types/sidebar"

export function NavSales({
  sales,
}: {
  sales: Item[]
}) {


  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel className="font-medium text-black text-sm">Sales</SidebarGroupLabel>
      <SidebarMenu>
      {sales.map((item) => (
  <SidebarMenuItem key={item.name}>
    <SidebarMenuButton
      
      asChild>
      <button
         onClick={ () => item.onClick  ? item?.onClick?.() : null}
        className="border-0 outline-none flex items-center"> 
        <item.icon />
        <span>{item.name}</span>
      </button>
    </SidebarMenuButton>

  </SidebarMenuItem>
))}

      </SidebarMenu>
    </SidebarGroup>
  )
}