import { Shield, MapPin, Headphones } from "lucide-react";

export interface Stat {
  number: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { number: 500, suffix: "+", label: "Projects Completed" },
  { number: 350, suffix: "+", label: "Happy Clients" },
  { number: 12, suffix: "+", label: "Premium Product Lines" },
  { number: 7, suffix: "+", label: "Years of Experience" },
];

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  desc: string;
}

export const features: Feature[] = [
  { icon: Shield, title: "Quality Assured Products", desc: "Every product in our catalogue is rigorously tested to meet durability and finish standards." },
  { icon: MapPin, title: "Pan-Bengal Network", desc: "Serving architects, contractors, builders, and homeowners across the entire state." },
  { icon: Headphones, title: "Expert Consultation", desc: "Our design experts guide you from selection to installation for a seamless experience." },
];

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  text: string;
}

export const testimonials: Testimonial[] = [
  { name: "Rajesh Dutta", role: "Business Owner, Kolkata", initials: "RD", text: "Nashnal Trend Decor transformed our entire office with their WPC panels and glass films. The quality is outstanding and the team was incredibly professional. Highly recommend!" },
  { name: "Priya Sharma", role: "Interior Designer, Howrah", initials: "PS", text: "Exceptional product range at very competitive pricing. We've been sourcing laminates and floorings for our residential projects from them for 3 years now. Never disappointed." },
  { name: "Arjun Mukherjee", role: "Hotel Developer, Siliguri", initials: "AM", text: "The bamboo charcoal panels we used for our hotel lobby have been an absolute showstopper. Guests always comment on the elegance. Nashnal delivered exactly what was promised." },
];

export const clients: string[] = ["Merlin Group", "Srijan Realty", "Ambuja Neotia", "PS Group", "DTC Builders", "Bengal Shrachi", "Orion Constructions", "Nandan Homes", "Siddha Group", "Unimark Group"];
