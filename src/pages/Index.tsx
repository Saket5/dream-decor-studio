import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";
import { Shield, MapPin, Headphones, ChevronDown, Star } from "lucide-react";

const stats = [
  { number: 500, suffix: "+", label: "Projects Completed" },
  { number: 350, suffix: "+", label: "Happy Clients" },
  { number: 12, suffix: "+", label: "Premium Product Lines" },
  { number: 7, suffix: "+", label: "Years of Experience" },
];

const features = [
  { icon: Shield, title: "Quality Assured Products", desc: "Every product in our catalogue is rigorously tested to meet durability and finish standards." },
  { icon: MapPin, title: "Pan-Bengal Network", desc: "Serving architects, contractors, builders, and homeowners across the entire state." },
  { icon: Headphones, title: "Expert Consultation", desc: "Our design experts guide you from selection to installation for a seamless experience." },
];

const testimonials = [
  { name: "Rajesh Dutta", role: "Business Owner, Kolkata", initials: "RD", text: "Nashnal Trend Decor transformed our entire office with their WPC panels and glass films. The quality is outstanding and the team was incredibly professional. Highly recommend!" },
  { name: "Priya Sharma", role: "Interior Designer, Howrah", initials: "PS", text: "Exceptional product range at very competitive pricing. We've been sourcing laminates and floorings for our residential projects from them for 3 years now. Never disappointed." },
  { name: "Arjun Mukherjee", role: "Hotel Developer, Siliguri", initials: "AM", text: "The bamboo charcoal panels we used for our hotel lobby have been an absolute showstopper. Guests always comment on the elegance. Nashnal delivered exactly what was promised." },
];

const clients = ["Merlin Group", "Srijan Realty", "Ambuja Neotia", "PS Group", "DTC Builders", "Bengal Shrachi", "Orion Constructions", "Nandan Homes", "Siddha Group", "Unimark Group"];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-[clamp(2.8rem,5vw,4rem)] font-light text-gold leading-none">
      {count}{suffix}
    </div>
  );
}

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[calc(100vh-72px)] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-charcoal/70" />
        <div className="relative z-10 text-center px-[5vw] max-w-4xl">
          <div className="text-[0.62rem] tracking-[0.35em] uppercase text-gold font-medium mb-4 animate-fade-up">
            Kolkata · West Bengal · Est. 2018
          </div>
          <h1 className="font-display text-[clamp(2.2rem,5.5vw,4.6rem)] font-light text-ivory leading-[1.12] mb-5 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0, animationFillMode: 'forwards' }}>
            West Bengal's Trusted Choice for <em className="text-gold-light">Modern, Durable,</em> & Affordable Interiors & Exteriors
          </h1>
          <p className="font-heading text-[clamp(0.9rem,2vw,1.2rem)] tracking-[0.22em] text-gold uppercase mt-3.5 animate-fade-up" style={{ animationDelay: '0.4s', opacity: 0, animationFillMode: 'forwards' }}>
            New Trend Setter
          </p>
          <div className="flex gap-4 mt-10 justify-center flex-wrap animate-fade-up" style={{ animationDelay: '0.6s', opacity: 0, animationFillMode: 'forwards' }}>
            <Link to="/products" className="bg-gold text-charcoal px-8 py-3.5 text-[0.75rem] tracking-[0.2em] uppercase font-semibold no-underline hover:bg-gold-dark hover:text-ivory transition-all duration-300 hover:-translate-y-0.5">
              Explore Products
            </Link>
            <Link to="/quote" className="border border-ivory/40 text-ivory px-8 py-3.5 text-[0.75rem] tracking-[0.2em] uppercase font-medium no-underline hover:border-gold hover:text-gold transition-all duration-300">
              Get a Free Quote
            </Link>
          </div>
        </div>
        <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory/40 text-[0.6rem] tracking-[0.3em] uppercase animate-bounce">
          <span>Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-ivory py-12 px-[5vw] text-center">
            <Counter target={stat.number} suffix={stat.suffix} />
            <div className="text-[0.7rem] tracking-[0.2em] uppercase text-soft mt-2 font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* About Snapshot */}
      <section className="py-24 px-[8vw]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold font-medium">
              7+ Years of Trust
            </span>
            <div className="w-12 h-px bg-gold my-6" />
            <p className="text-[0.62rem] tracking-[0.35em] uppercase text-gold font-medium mb-3.5">
              Who We Are
            </p>
            <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-charcoal mb-5">
              Redefining Interior Spaces Across <em>West Bengal</em>
            </h2>
            <p className="text-[0.92rem] leading-[1.85] text-soft max-w-[560px] mb-10">
              Nashnal Trend Decor LLP is West Bengal's leading supplier of modern interior and exterior finishing products. From premium PVC panels to luxurious laminates and elegant wallpapers, we bring globally sourced materials to your doorstep — at prices that make sense.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.slice(0, 2).map((f) => (
                <div key={f.title} className="flex gap-4">
                  <f.icon className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                  <div>
                    <h4 className="text-[0.85rem] tracking-[0.06em] font-semibold text-charcoal mb-1">{f.title}</h4>
                    <p className="text-[0.82rem] text-soft leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8">
              {(() => {
                const F = features[2];
                return (
                  <div className="flex gap-4">
                    <F.icon className="w-5 h-5 text-gold flex-shrink-0 mt-1" strokeWidth={1.5} />
                    <div>
                      <h4 className="text-[0.85rem] tracking-[0.06em] font-semibold text-charcoal mb-1">{F.title}</h4>
                      <p className="text-[0.82rem] text-soft leading-relaxed">{F.desc}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
            <Link to="/about" className="inline-block mt-10 bg-charcoal text-gold px-8 py-3.5 text-[0.75rem] tracking-[0.2em] uppercase font-semibold no-underline hover:bg-mid transition-all duration-300">
              Learn More About Us
            </Link>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
              alt="Modern interior design showcase"
              className="w-full h-[500px] object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Client Marquee */}
      <div className="bg-ivory border-y border-line overflow-hidden py-1">
        <div className="text-center mb-4 pt-6">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold font-medium">
            Trusted by Leading Developers & Architects Across Bengal
          </span>
        </div>
        <div className="flex animate-marquee whitespace-nowrap pb-6">
          {[...clients, ...clients].map((client, i) => (
            <span
              key={i}
              className="px-10 font-display text-[1.05rem] text-soft tracking-wide border-r border-line hover:text-gold transition-colors"
            >
              {client}
            </span>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-24 px-[8vw]">
        <div className="text-center mb-16">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold font-medium">
            Client Stories
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-charcoal mt-4">
            What Our Clients Say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.name} className="border border-line p-8 hover:shadow-lg transition-shadow duration-300">
              <div className="text-gold text-3xl font-display mb-4">"</div>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="text-[0.88rem] text-soft leading-[1.75] mb-6">{t.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-line">
                <div className="w-10 h-10 bg-charcoal flex items-center justify-center text-gold text-[0.7rem] tracking-wider font-medium">
                  {t.initials}
                </div>
                <div>
                  <p className="text-[0.82rem] font-medium text-charcoal">{t.name}</p>
                  <p className="text-[0.72rem] text-soft">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-gold py-[70px] px-[8vw] flex items-center justify-between gap-8 flex-wrap">
        <h2 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-charcoal max-w-[600px] leading-[1.2]">
          Ready to Transform Your Space? Let's Talk.
        </h2>
        <Link to="/quote" className="bg-charcoal text-gold px-8 py-3.5 text-[0.75rem] tracking-[0.2em] uppercase font-semibold no-underline hover:bg-mid transition-all duration-300 whitespace-nowrap">
          Request a Free Quote
        </Link>
      </section>
    </Layout>
  );
};

export default Index;
