import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Catalogues", path: "/catalogues" },
  { name: "About Us", path: "/about" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[999] h-[72px] flex items-center px-[5vw] justify-between transition-shadow duration-300 bg-ivory/95 backdrop-blur-xl border-b border-line ${
        scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.06)]" : ""
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center gap-3 no-underline">
        <img 
          src="https://res.cloudinary.com/dtjgaihu7/image/upload/v1773333409/NTD_JPG-removebg-preview_z0ylcu.png" 
          alt="Nashnal Trend Decor Logo" 
          className="h-12 w-auto object-contain"
        />
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-10">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`relative text-[0.78rem] tracking-[0.14em] uppercase font-medium no-underline transition-colors duration-300 hover:text-gold-dark ${
              location.pathname === link.path ? "text-gold-dark" : "text-mid"
            }`}
          >
            {link.name}
            <span
              className={`absolute bottom-[-3px] left-0 right-0 h-px bg-gold transition-transform duration-300 origin-right ${
                location.pathname === link.path ? "scale-x-100 origin-left" : "scale-x-0"
              }`}
            />
          </Link>
        ))}
        <Link
          to="/quote"
          className="bg-charcoal text-gold px-5 py-2 text-[0.78rem] tracking-[0.12em] uppercase no-underline hover:bg-gold-dark hover:text-ivory transition-all duration-300"
        >
          Request a Quote
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="w-6 h-6 text-charcoal" /> : <Menu className="w-6 h-6 text-charcoal" />}
      </button>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-ivory border-b border-line md:hidden flex flex-col py-6 px-[5vw] gap-4 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-[0.85rem] tracking-[0.14em] uppercase text-mid no-underline hover:text-gold-dark transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/quote"
            className="bg-charcoal text-gold px-5 py-3 text-[0.78rem] tracking-[0.12em] uppercase no-underline text-center hover:bg-gold-dark hover:text-ivory transition-all"
          >
            Request a Quote
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
