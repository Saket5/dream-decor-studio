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
  { name: "Founder & CEO", role: "Visionary leader with 15+ years in the interior industry", initials: "NK" },
  { name: "Head of Sales", role: "Driving pan-Bengal distribution and client relationships", initials: "RS" },
  { name: "Design Consultant", role: "Expert in material selection and interior design trends", initials: "PM" },
];
