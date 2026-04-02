import { Shield, Users, Gem, Award } from "lucide-react";

export interface Value {
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
}

export const values: Value[] = [
  { icon: Shield, title: "Quality First", desc: "Every product undergoes rigorous testing for durability and finish standards." },
  { icon: Users, title: "Customer Focus", desc: "Building lasting relationships through exceptional service and support." },
  { icon: Gem, title: "Innovation", desc: "Continuously sourcing the latest global trends and materials." },
  { icon: Award, title: "Integrity", desc: "Transparent pricing and honest business practices since day one." },
];

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export const team: TeamMember[] = [
  {
    name: "Ravi Shankar Jhunjhunwala",
    role: "Founder - Visionary leader with 25+ years in the interior industry",
    initials: "RSJ"
  },
  {
    name: "Pankaj Jhunjhunwala",
    role: "Co-Founder - Driving growth, scaling operations, and leading strategic expansion.",
    initials: "PJ"
  },
  {
    name: "Dhruv Jhunjhunwala",
    role: "Managing Partner - Driving Pan-Bengal distribution and client relationships.",
    initials: "DJ"
  },
];
