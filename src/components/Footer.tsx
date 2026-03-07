import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-charcoal pt-[70px] px-[8vw] pb-[30px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gold/20 flex items-center justify-center">
              <span className="font-heading text-gold text-lg">N</span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-heading text-[0.75rem] tracking-[0.12em] text-ivory">
                NASHNAL TREND DECOR
              </span>
              <span className="text-[0.55rem] tracking-[0.22em] text-gold-light uppercase">
                LLP
              </span>
            </div>
          </div>
          <p className="text-[0.82rem] text-ivory/50 leading-relaxed max-w-[280px]">
            West Bengal's trusted choice for modern, durable, and affordable interiors and exteriors. Bringing global quality to local spaces since 2018.
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
            {["PVC & WPC Panels", "Laminates", "Wallpapers", "Floorings", "Glass Films"].map((item) => (
              <span key={item} className="text-[0.8rem] text-ivory/50">{item}</span>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-[0.7rem] tracking-[0.2em] text-gold uppercase mb-6">Contact</h4>
          <div className="flex flex-col gap-3 text-[0.8rem] text-ivory/50">
            <span>Kolkata, West Bengal</span>
            <span>+91 98765 43210</span>
            <span>info@nashnaltrenddecor.com</span>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-ivory/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[0.72rem] text-ivory/30">
          © 2025 Nashnal Trend Decor LLP. All rights reserved.
        </p>
        <p className="text-[0.72rem] text-gold/40 tracking-[0.15em] uppercase">
          New Trend Setter
        </p>
      </div>
    </footer>
  );
};

export default Footer;
