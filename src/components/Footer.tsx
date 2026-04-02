import { Link } from "react-router-dom";
import { products } from "@/data/products";

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-[70px] px-[8vw] pb-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <img 
            src="https://res.cloudinary.com/dtjgaihu7/image/upload/v1773333409/NTD_JPG-removebg-preview_z0ylcu.png" 
            alt="Nashnal Trend Decor Logo" 
            className="h-16 w-auto object-contain mb-6"
          />
          <p className="text-[0.82rem] text-ivory/50 leading-relaxed max-w-[280px]">
            West Bengal's trusted choice for modern, durable, and affordable interiors and exteriors. Bringing global quality to local spaces since 2007.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-heading text-[0.7rem] tracking-[0.2em] text-gold uppercase mb-6">Navigation</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Products", "Catalogues", "About Us", "Request a Quote"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : item === "Request a Quote" ? "/quote" : `/${item.toLowerCase().replace(" ", "-")}`}
                className="text-[0.8rem] text-ivory/50 no-underline hover:text-gold transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Products */}
        <div>
          <h4 className="font-heading text-[0.7rem] tracking-[0.2em] text-gold uppercase mb-6">Products</h4>
          <div className="flex flex-col gap-3">
            {products.map((product) => (
              <Link
                key={product.num}
                to={`/products/${product.num}`}
                className="text-[0.8rem] text-ivory/50 no-underline hover:text-gold transition-colors"
              >
                {product.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-[0.7rem] tracking-[0.2em] text-gold uppercase mb-6">Contact</h4>
          <div className="flex flex-col gap-3 text-[0.8rem] text-ivory/50">
            <span>Kolkata, West Bengal</span>
            <span>+91 9836291113</span>
            <span>info@nashnal.com</span>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="https://www.instagram.com/nashnaltrenddecor?igsh=MWU1ODY3d3o5ZjJtaQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-ivory/50 no-underline hover:text-gold transition-colors w-fit"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17" cy="7" r="1.2" fill="currentColor" />
                </svg>
              </a>
              <a
                href="https://share.google/zVnY6FposCZKVZXF3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google"
                className="text-ivory/50 no-underline hover:text-gold transition-colors w-fit"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                  <path
                    fill="currentColor"
                    d="M21.8 12.2c0-.7-.1-1.4-.2-2.1H12v4h5.5c-.2 1.3-.9 2.4-2 3.2v2.6h3.2c1.9-1.8 3.1-4.4 3.1-7.7z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 22c2.8 0 5.2-.9 6.9-2.5l-3.2-2.6c-.9.6-2.1 1-3.7 1-2.8 0-5.2-1.9-6-4.5H2.7V16c1.7 3.6 5.3 6 9.3 6z"
                  />
                  <path
                    fill="currentColor"
                    d="M6 13.4c-.2-.6-.3-1.1-.3-1.8s.1-1.2.3-1.8V7.2H2.7C2.2 8.3 2 9.4 2 10.6s.2 2.3.7 3.4L6 13.4z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.3c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17.1 2.4 14.8 1.5 12 1.5c-4 0-7.6 2.4-9.3 6L6 10c.8-2.6 3.2-4.7 6-4.7z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-ivory/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[0.72rem] text-ivory/30">
          © 2025 Nashnal Trend Decor LLP. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <Link
            to="/privacy-policy"
            className="text-[0.72rem] text-ivory/40 no-underline hover:text-gold transition-colors tracking-[0.08em] uppercase"
          >
            Privacy Policy
          </Link>
          <p className="text-[0.72rem] text-gold/40 tracking-[0.15em] uppercase">
            New Trend Setter
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
