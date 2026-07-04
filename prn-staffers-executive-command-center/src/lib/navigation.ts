import {
  BarChart3,
  BrainCircuit,
  BriefcaseBusiness,
  HeartHandshake,
  Home,
  Megaphone,
  Settings,
} from "lucide-react";
import type { NavItem } from "@/lib/types";

export const navItems: NavItem[] = [
  { href: "/", label: "Executive Dashboard", icon: Home },
  { href: "/operations", label: "Operations", icon: BriefcaseBusiness },
  { href: "/ai-center", label: "AI Center", icon: BrainCircuit },
  { href: "/caregivers", label: "Caregivers", icon: HeartHandshake },
  { href: "/marketing", label: "Marketing", icon: Megaphone },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

