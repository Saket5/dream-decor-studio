import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const Products = () => {
  return (
    <Layout>
      <Seo
        title="Interior and Exterior Products | Nashnal Trend Decor LLP"
        description="Browse PVC panels, WPC panels, laminates, wallpapers, floorings, glass films, decorative panels, and furnishing solutions from Nashnal Trend Decor LLP."
        path="/products"
      />
      {/* Page Header */}
      <div className="bg-charcoal py-20 px-[8vw] text-center">
        <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold-light font-medium">
          Our Range Of
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
                  <Link
                    to={`/products/${product.num}`}
                    className="border border-gold text-gold px-6 py-2.5 text-[0.7rem] tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 cursor-pointer hover:bg-gold hover:text-charcoal"
                  >
                    View Details
                  </Link>
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
