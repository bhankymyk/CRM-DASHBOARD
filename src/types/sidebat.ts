import {
    LucideIcon
} from "lucide-react";

export interface NavItem {
    title: string;
    url?: string;
    icon?: any; // Replace 'any' with the actual type of the icon
    isActive?: boolean;
    items?: NavItem[];
  }
  
  // Define the structure for projects, customers, and sales items
  export interface Item {
    name: string | undefined;
    url: string | undefined;
    icon: LucideIcon; // Replace 'any' with the actual type of the icon
    onClick?: () => void;
  }
  
  // Define the main data structure
 export interface Data {
    navMain: NavItem[];
    projects: Item[];
    customers: Item[];
    sales: Item[];
  }
  
  