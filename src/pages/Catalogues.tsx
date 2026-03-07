import Layout from "@/components/Layout";
import { Download, Eye } from "lucide-react";

const catalogues = [
  { title: "PVC & WPC Panel Collection 2025", desc: "Complete range of wall and ceiling panels with technical specifications and installation guides.", pages: "48 Pages", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80" },
  { title: "Premium Laminates Catalogue", desc: "Over 500 finishes including wood grain, matte, high gloss, and textured options for every application.", pages: "72 Pages", img: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?w=400&q=80" },
  { title: "Designer Wallpaper Lookbook", desc: "Curated collection of imported and domestic wallpapers featuring contemporary and classic designs.", pages: "36 Pages", img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=400&q=80" },
  { title: "Louvers & Exterior Solutions", desc: "Architectural louver systems and exterior finishing products for modern facades and outdoor spaces.", pages: "28 Pages", img: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80" },
  { title: "Glass Films & Privacy Solutions", desc: "Decorative, frosted, and UV-protection glass films for commercial and residential applications.", pages: "24 Pages", img: "https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=400&q=80" },
  { title: "Bamboo Charcoal & Eco Range", desc: "Sustainable interior solutions featuring bamboo charcoal panels and eco-friendly materials.", pages: "32 Pages", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80" },
];

const Catalogues = () => {
  return (
    <Layout>
      {/* Header */}
      <div className="bg-charcoal py-20 px-[8vw] text-center">
        <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold-light font-medium">
          Resources
        </span>
        <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-ivory mt-4">
          Product Catalogues
        </h1>
        <p className="text-[0.88rem] text-ivory/50 mt-4 max-w-xl mx-auto">
          Browse or download our detailed product catalogues to find the perfect solution for your project.
        </p>
      </div>

      {/* Catalogues Grid */}
      <section className="py-24 px-[8vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {catalogues.map((cat) => (
            <div key={cat.title} className="group border border-line overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-[220px] overflow-hidden">
                <img
                  src={cat.img}
                  alt={cat.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-charcoal/80 text-gold px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase">
                  {cat.pages}
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-[1.2rem] font-normal text-charcoal mb-2">{cat.title}</h3>
                <p className="text-[0.8rem] text-soft leading-[1.65] mb-6">{cat.desc}</p>
                <div className="flex gap-3">
                  <button className="flex items-center gap-2 bg-gold text-charcoal px-5 py-2.5 text-[0.7rem] tracking-[0.15em] uppercase font-semibold hover:bg-gold-dark hover:text-ivory transition-all duration-300">
                    <Eye className="w-3.5 h-3.5" />
                    Preview
                  </button>
                  <button className="flex items-center gap-2 border border-charcoal text-charcoal px-5 py-2.5 text-[0.7rem] tracking-[0.15em] uppercase font-medium hover:bg-charcoal hover:text-gold transition-all duration-300">
                    <Download className="w-3.5 h-3.5" />
                    Download
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Catalogues;
