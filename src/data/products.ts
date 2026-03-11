export interface Product {
  num: string;
  name: string;
  desc: string;
  img: string;
  images: string[];
  details: string;
  features: string[];
  applications: string[];
}

export const products: Product[] = [
  {
    num: "01",
    name: "PVC Panels",
    desc: "Practical and stylish PVC wall panels for modern interiors with dampness-resistant properties and quick installation.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
    ],
    details: "Our PVC wall panels are a practical and stylish solution for modern interiors, especially for areas affected by dampness. The biggest advantage is that they can be directly installed on damp walls without plywood backing, making installation quick and cost-effective.",
    features: [
      "Direct installation on damp walls",
      "100% waterproof and moisture resistant",
      "Termite and borer proof",
      "Low maintenance and easy to clean",
      "Quick and hassle-free installation",
      "Durable with modern designs"
    ],
    applications: ["Walls", "Ceilings", "Partitions", "Commercial Spaces", "Residential Interiors"]
  },
  {
    num: "02",
    name: "WPC Panels",
    desc: "Modern and durable wood plastic composite panels offering premium wall paneling with easy installation.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
    ],
    details: "Our WPC (Wood Plastic Composite) wall panels offer a modern and durable solution for premium wall paneling. Designed for both style and functionality, these panels can be directly installed on the wall without the need for plywood backing, making installation quicker and more cost-effective. One of the biggest advantages of WPC panels is that they can also be installed on damp walls, helping cover moisture-affected surfaces while giving the space a clean, seamless, and elegant look.",
    features: [
      "Direct installation on walls without plywood backing",
      "Suitable for installation on damp walls",
      "Termite proof and moisture proof",
      "Strong, durable, and long-lasting",
      "Low maintenance and easy to clean",
      "Premium textures and modern designs"
    ],
    applications: ["Walls", "Ceilings", "Partitions", "Commercial Spaces", "Residential Interiors"]
  },
  {
    num: "03",
    name: "Premium Laminates",
    desc: "Premium decorative laminates combining style, durability, and functionality for furniture and surfaces.",
    img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
    ],
    details: "Our premium laminate collection features over 500 different finishes and textures, from classic wood grains to contemporary solid colors and abstract patterns. These high-pressure laminates are perfect for furniture, cabinetry, countertops, and wall paneling, offering both style and functionality with scratch and stain resistance.",
    features: [
      "Premium surface finish with elegant designs",
      "Scratch and stain resistant",
      "Easy to clean and maintain",
      "Durable and long-lasting",
      "Wide range of colors, textures, and patterns",
      "Cost-effective alternative to natural materials",
      "Available in various thicknesses"
    ],
    applications: ["Furniture", "Cabinets", "Countertops", "Wall Panels", "Office Interiors"]
  },
  {
    num: "04",
    name: "Designer Wallpapers",
    desc: "Easy and elegant wallpapers to transform walls with modern patterns and custom printing options.",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80"
    ],
    details: "Transform your spaces with our curated collection of designer wallpapers. From subtle textures to bold patterns, our wallpapers are sourced from premium manufacturers worldwide. Available in various materials including vinyl, non-woven, and fabric-backed options for different applications. We also offer custom wallpaper printing services.",
    features: [
      "Stylish designs and contemporary patterns",
      "High-quality finish for a premium look",
      "Custom wallpaper printing available",
      "Easy and quick installation",
      "Durable and easy to maintain",
      "Wide variety of textures, colors, and themes",
      "Washable and durable surfaces",
      "Lightfast and fade-resistant",
      "Available in multiple materials"
    ],
    applications: ["Accent Walls", "Feature Walls", "Bedrooms", "Living Rooms", "Commercial Spaces"]
  },
  {
    num: "05",
    name: "Glass Films & Privacy Solutions",
    desc: "Stylish glass films that enhance privacy while maintaining a modern look and reducing glare.",
    img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80"
    ],
    details: "Enhance privacy and aesthetics with our premium glass films. Available in frosted, tinted, decorative patterns, and UV-protection options. These films provide excellent glare reduction, heat rejection, and privacy while maintaining natural light transmission. Perfect for decorative and functional use on glass surfaces.",
    features: [
      "Enhances privacy without blocking natural light",
      "Stylish patterns and frosted finishes available",
      "Reduces glare and improves comfort",
      "Easy to install and maintain",
      "Ideal for decorative and functional use on glass surfaces",
      "UV protection and heat rejection",
      "Privacy enhancement",
      "Decorative patterns available",
      "Energy-efficient properties",
      "Various opacity levels"
    ],
    applications: ["Office Partitions", "Residential Windows", "Commercial Glass", "Bathroom Privacy", "Conference Rooms"]
  },
  {
    num: "06",
    name: "Bamboo Charcoal & Eco Range",
    desc: "Innovative bamboo charcoal panels offering sustainable wall paneling with premium finishes.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
    ],
    details: "Our eco-friendly range features sustainable materials that are both beautiful and environmentally conscious. Bamboo charcoal panels offer natural air purification properties while our other eco-materials provide durable, low-impact alternatives to traditional interior finishes.",
    features: [
      "Natural air purification properties",
      "Sustainable and eco-friendly materials",
      "Low VOC emissions",
      "Natural aesthetic appeal",
      "Durable and long-lasting",
      "Biodegradable options available"
    ],
    applications: ["Living Rooms", "Bedrooms", "Eco-Friendly Projects", "Commercial Interiors", "Sustainable Buildings"]
  },
  {
    num: "07",
    name: "Decorative Panels",
    desc: "Decorative panels designed to add depth, texture, and premium visual appeal to interior spaces.",
    img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
    ],
    details: "Create stunning focal points with our decorative panel collection. Available in metallic finishes, wood veneers, and abstract designs, these panels add texture, depth, and visual interest to any space. Perfect for feature walls, ceilings, and custom installations with unique patterns and stylish designs.",
    features: [
      "Unique patterns and stylish designs",
      "Enhances wall aesthetics instantly",
      "Durable and long-lasting material",
      "Easy to install and maintain",
      "Suitable for modern interior concepts",
      "Wide range of finishes and textures",
      "Custom design options available",
      "Easy installation systems",
      "Acoustic properties available",
      "Fire-rated options",
      "Lightweight construction"
    ],
    applications: ["Feature Walls", "Ceilings", "Reception Areas", "Hotels", "Corporate Offices"]
  },
  {
    num: "08",
    name: "Floorings",
    desc: "Premium flooring collection with vinyl, laminated wooden, SPC, and LVT options for style and comfort.",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
      "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
    ],
    details: "Our flooring collection offers durable, stylish solutions for every application. From luxury vinyl planks to engineered hardwood and laminate flooring, we provide options that combine beauty, functionality, and long-term performance with wide range including Vinyl, Laminated Wooden, SPC, and LVT flooring.",
    features: [
      "Wide range including Vinyl, Laminated Wooden, SPC, and LVT flooring",
      "Stylish finishes that enhance interior aesthetics",
      "Durable and resistant to daily wear",
      "Easy and quick installation",
      "Low maintenance and easy to clean",
      "Water-resistant and durable surfaces",
      "Wide range of colors and textures",
      "Sound-absorbing properties",
      "Scratch and stain resistant",
      "Various installation methods"
    ],
    applications: ["Residential", "Commercial Spaces", "Offices", "Retail", "Hospitality"]
  }
];
