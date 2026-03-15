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
    img: "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331787/PVC_INSIDE_IMAGE_bl8xoi.png",
    images: [
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331787/PVC_INSIDE_IMAGE_bl8xoi.png",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331784/PVC_INSIDE_2_wxurxr.png",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331783/IMG_0903_mvtkds.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331783/IMG_0902_snvgdn.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331782/IMG_0900_iaafvq.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331782/IMG_0901_tizdlv.jpg",
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
    img: "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331782/WPC_INSIDE_gcooay.png",
    images: [
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331782/WPC_INSIDE_gcooay.png",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331782/IMG_0907_da6ecf.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331781/IMG_0904_qgjczk.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331781/IMG_0905_ldcab9.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331780/IMG_0906_nxu2bz.jpg",
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
    img: "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331783/IMG_0908_xafson.jpg",
    images: [
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331783/IMG_0908_xafson.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331780/IMG_0909_ayp6sm.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331777/IMG_0912_vvy62j.jpg",
      "hhttps://res.cloudinary.com/dtjgaihu7/image/upload/v1773331776/IMG_0910_eeytt4.jpg"
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
    img: "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331776/IMG_0920_e6co7r.jpg",
    images: [
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331776/IMG_0920_e6co7r.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331776/IMG_0919_jkpcc8.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331776/IMG_0916_yoaaqa.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331775/IMG_0914_r5mmua.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331775/IMG_0917_mqeuo6.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331775/IMG_0913_bpv8bj.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331769/IMG_0915_duzjgh.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331768/IMG_0918_qgc9r2.jpg"
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
    img: "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331767/IMG_0924_ttgruv.jpg",
    images: [
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331767/IMG_0924_ttgruv.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331767/IMG_0923_atocz4.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331767/IMG_0921_fx93fa.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331766/IMG_0925_ghgmzu.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331766/IMG_0922_re9vdh.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331766/IMG_0926_pyw30c.jpg",
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
    img: "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331774/Bamboo_Charcoal_5_a4fy6e.png",
    images: [
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331774/Bamboo_Charcoal_5_a4fy6e.png",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331765/Bamboo_Charcoal_2_hzhnbe.png",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331765/Bamboo_Charcoal_1_zt2gs9.png",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331759/Bamboo_Charcoal_3_i3aptq.png",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331758/Bamboo_Charcoal_4_a1kflb.png"
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
    img: "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331757/IMG_0932_uykain.jpg",
    images: [
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331757/IMG_0932_uykain.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331757/IMG_0928_ummyrf.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331757/IMG_0930_yebbey.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331757/IMG_0931_y3mwqv.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331755/IMG_0929_j500br.jpg"
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
    img: "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331758/IMG_0934_xnoul8.jpg",
    images: [
      "hhttps://res.cloudinary.com/dtjgaihu7/image/upload/v1773331758/IMG_0934_xnoul8.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331755/Flooring_1_s2ll8h.png",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331754/Flooring_2_nzdqnj.png",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331754/IMG_0935_hlzvmi.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773331752/IMG_0936_ncqzn9.jpg"
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
  },
  {
    num: "09",
    name: "Furnishing & Blinds",
    desc: "Premium furnishing and blinds collection designed to enhance aesthetics and functionality with modern window treatments.",
    img: "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773333178/IMG_0941_ke73au.jpg",
    images: [
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773333178/IMG_0941_ke73au.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773333180/IMG_0940_wjlg9y.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773333176/IMG_0939_ztib9i.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773333174/IMG_0937_ydcpxu.jpg",
      "https://res.cloudinary.com/dtjgaihu7/image/upload/v1773333172/IMG_0942_oxxmdw.jpg"
    ],
    details: "Our furnishing and blinds collection is designed to enhance both the aesthetics and functionality of your interiors. From stylish fabrics to modern window blinds, these solutions help control light, improve privacy, and add a refined finishing touch to any space. We offer a wide range of premium furnishing fabrics and blinds that combine elegance with practical performance.",
    features: [
      "Wide range of premium furnishing fabrics and blinds",
      "Enhances interior décor with modern designs",
      "Provides privacy and effective light control",
      "Durable and easy to maintain",
      "Suitable for both residential and commercial spaces",
      "Custom sizing and color options available",
      "Professional installation support",
      "UV-resistant materials",
      "Thermal insulation properties",
      "Noise-reducing capabilities"
    ],
    applications: ["Windows", "Doors", "Bedrooms", "Living Rooms", "Commercial Interiors", "Hotels", "Offices"]
  }
];
