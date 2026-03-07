import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Shield, MapPin, Headphones, Award, Users, Gem } from "lucide-react";

const values = [
  { icon: Shield, title: "Quality First", desc: "Every product undergoes rigorous testing for durability and finish standards." },
  { icon: Users, title: "Customer Focus", desc: "Building lasting relationships through exceptional service and support." },
  { icon: Gem, title: "Innovation", desc: "Continuously sourcing the latest global trends and materials." },
  { icon: Award, title: "Integrity", desc: "Transparent pricing and honest business practices since day one." },
];

const team = [
  { name: "Founder & CEO", role: "Visionary leader with 15+ years in the interior industry", initials: "NK" },
  { name: "Head of Sales", role: "Driving pan-Bengal distribution and client relationships", initials: "RS" },
  { name: "Design Consultant", role: "Expert in material selection and interior design trends", initials: "PM" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="bg-charcoal py-20 px-[6vw] flex flex-col justify-center">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold-light font-medium">
            About Us
          </span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-ivory mt-4 mb-6">
            Welcome to <em>Nashnal Trend Decor</em> LLP
          </h1>
          <p className="text-[0.92rem] leading-[1.85] text-ivory/60 max-w-[500px] mb-8">
            We are dedicated to providing the best interior and exterior finishing solutions to homeowners, architects, and developers across West Bengal. Our team is committed to excellence and innovation.
          </p>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#25D366] font-semibold text-[0.82rem] hover:underline"
          >
            💬 Chat with us on WhatsApp
          </a>
        </div>
        <div
          className="min-h-[400px] lg:min-h-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80')` }}
        />
      </div>

      {/* Values */}
      <section className="py-24 px-[8vw]">
        <div className="text-center mb-16">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold font-medium">Our Values</span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-charcoal mt-4">
            What Drives Us
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v) => (
            <div key={v.title} className="text-center p-8 border border-line hover:shadow-md transition-shadow">
              <v.icon className="w-6 h-6 text-gold mx-auto mb-4" strokeWidth={1.5} />
              <h4 className="text-[0.85rem] tracking-[0.06em] font-semibold text-charcoal mb-2">{v.title}</h4>
              <p className="text-[0.82rem] text-soft leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-[8vw] bg-cream">
        <div className="text-center mb-16">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold font-medium">Team Members</span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-charcoal mt-4">
            The People Behind the Brand
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {team.map((member) => (
            <div key={member.initials} className="bg-ivory border border-line p-8 text-center">
              <div className="w-20 h-20 bg-charcoal flex items-center justify-center mx-auto mb-6">
                <span className="font-heading text-gold text-lg tracking-wider">{member.initials}</span>
              </div>
              <h4 className="text-[0.9rem] font-semibold text-charcoal mb-1">{member.name}</h4>
              <p className="text-[0.8rem] text-soft leading-relaxed">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold py-[70px] px-[8vw] flex items-center justify-between gap-8 flex-wrap">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-charcoal max-w-[600px] leading-[1.2]">
          Want to work with us? Let's discuss your project.
        </h2>
        <Link to="/quote" className="bg-charcoal text-gold px-8 py-3.5 text-[0.75rem] tracking-[0.2em] uppercase font-semibold no-underline hover:bg-mid transition-all duration-300 whitespace-nowrap">
          Request a Quote
        </Link>
      </section>
    </Layout>
  );
};

export default About;
