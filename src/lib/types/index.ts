import { LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  link: string;
};

export type NavItemSidebar = {
  title: string;
  link: string;
  icon: LucideIcon;
};

export interface LayoutProps {
  children: React.ReactNode;
}
