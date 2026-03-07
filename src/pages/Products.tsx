import Layout from "@/components/Layout";
import { Link } from "react-router-dom";

const products = [
  { num: "01", name: "PVC & WPC Panels", desc: "High-density, water-resistant PVC and Wood Polymer Composite panels ideal for walls, ceilings and partitions in residential and commercial spaces.", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" },
  { num: "02", name: "Louvers", desc: "Architectural louver panels that blend aesthetics with functionality — perfect for feature walls, facades, partitions, and ventilation screens.", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" },
  { num: "03", name: "Bamboo Charcoal", desc: "Eco-friendly bamboo charcoal panels offering natural air purification, moisture control, and a timeless organic texture for luxury interiors.", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" },
  { num: "04", name: "Laminates", desc: "High-pressure laminates in hundreds of finishes — matte, gloss, textured, and wood grain — for furniture, cabinets, countertops, and wall panelling.", img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=600&q=80" },
  { num: "05", name: "Wall Papers", desc: "Premium imported and domestic wallpapers — from subtle textures to bold patterns — that instantly elevate any bedroom, living room, or office.", img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&q=80" },
  { num: "06", name: "Glass Films", desc: "Decorative and functional glass films for privacy, UV protection, frosted effects, and vibrant patterns on glass partitions, windows, and storefronts.", img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=600&q=80" },
  { num: "07", name: "Decorative Panels", desc: "3D textured and embossed decorative wall panels that transform blank walls into architectural statements for hotels, offices, and residences.", img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80" },
];

const Products = () => {
  return (
    <Layout>
      {/* Page Header */}
      <div className="bg-charcoal py-20 px-[8vw] text-center">
        <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold-light font-medium">
          Our Range
        </span>
        <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-ivory mt-4">
          Premium Interior Products
        </h1>
        <p className="text-[0.88rem] text-ivory/50 mt-4 max-w-xl mx-auto">
          Globally sourced, locally delivered — quality products for every interior and exterior need.
        </p>
      </div>

      {/* Products Grid */}
      <section className="py-24 px-[8vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {products.map((product) => (
            <div key={product.num} className="group border border-line overflow-hidden">
              <div className="relative h-[320px] overflow-hidden">
                <img
                  src={product.img}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500 flex items-center justify-center">
                  <span className="border border-gold text-gold px-6 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer hover:bg-gold hover:text-charcoal">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6 pb-7">
                <span className="font-display text-[0.75rem] text-gold tracking-[0.2em] block mb-1.5">{product.num}</span>
                <h3 className="font-display text-[1.3rem] font-normal text-charcoal mb-2">{product.name}</h3>
                <p className="text-[0.8rem] text-soft leading-[1.65]">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-[70px] px-[8vw] flex items-center justify-between gap-8 flex-wrap">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-charcoal max-w-[600px] leading-[1.2]">
          Need help choosing the right product?
        </h2>
        <Link to="/quote" className="bg-charcoal text-gold px-8 py-3.5 text-[0.75rem] tracking-[0.2em] uppercase font-semibold no-underline hover:bg-mid transition-all duration-300 whitespace-nowrap">
          Get Expert Advice
        </Link>
      </section>
    </Layout>
  );
};

export default Products;
