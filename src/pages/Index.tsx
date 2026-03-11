import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { stats, features, testimonials } from "@/data/index";
import { products } from "@/data/products";

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

function WelcomeIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState<'logo' | 'tagline' | 'doors' | 'done'>('logo');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('tagline'), 800);
    const t2 = setTimeout(() => setPhase('doors'), 2200);
    const t3 = setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onComplete]);

  if (phase === 'done') return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      {/* Left Door */}
      <div
        className="absolute top-0 left-0 w-1/2 h-full bg-charcoal transition-transform ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform: phase === 'doors' ? 'translateX(-100%)' : 'translateX(0)',
          transitionDuration: '1s',
        }}
      />
      {/* Right Door */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full bg-charcoal transition-transform ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{
          transform: phase === 'doors' ? 'translateX(100%)' : 'translateX(0)',
          transitionDuration: '1s',
        }}
      />
      {/* Gold line separator */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gold/40 transition-opacity duration-500"
        style={{ opacity: phase === 'doors' ? 0 : 1 }}
      />
      {/* Center content */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500"
        style={{ opacity: phase === 'doors' ? 0 : 1 }}
      >
        <h1
          className="font-display text-[clamp(1.6rem,4vw,3rem)] font-light text-gold tracking-[0.08em] transition-all duration-700"
          style={{
            opacity: phase === 'logo' || phase === 'tagline' ? 1 : 0,
            transform: phase === 'logo' ? 'translateY(8px)' : 'translateY(0)',
          }}
        >
          Nashnal Trend Decor
        </h1>
        <div
          className="mt-3 overflow-hidden"
          style={{ maxHeight: phase === 'tagline' ? '40px' : '0', transition: 'max-height 0.6s ease' }}
        >
          <p className="text-[0.65rem] tracking-[0.4em] uppercase text-ivory/50 font-medium">
            Welcome to Modern Living
          </p>
        </div>
        {/* Decorative dots */}
        <div
          className="flex gap-1.5 mt-6 transition-opacity duration-500"
          style={{ opacity: phase === 'tagline' ? 1 : 0 }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className="w-1 h-1 rounded-full bg-gold/60"
              style={{ animation: `pulse 1s ease-in-out ${i * 0.2}s infinite` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [introComplete, setIntroComplete] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

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
            West Bengal's Trusted Choice for <em className="text-gold-light">Modern, Durable,</em> & Affordable Interior & Exterior Products
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
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="py-24 px-[8vw]">
        <div className="text-center mb-16">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold font-medium">
            Our Collection
          </span>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-charcoal mt-4">
            Featured Products
          </h2>
          <p className="text-[0.9rem] text-soft max-w-2xl mx-auto mt-4">
            Explore our premium range of interior and exterior finishing solutions
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Main Carousel */}
          <div className="relative overflow-hidden rounded-lg">
            <div className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {products.map((product, index) => (
                <div key={product.num} className="min-w-full">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative h-[400px] overflow-hidden rounded-lg">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-charcoal text-gold px-3 py-1 text-[0.65rem] tracking-[0.15em] uppercase font-semibold">
                        Product {product.num}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="space-y-6">
                      <div>
                        <h3 className="font-display text-[clamp(1.8rem,3.5vw,2.6rem)] font-light text-charcoal mb-4">
                          {product.name}
                        </h3>
                        <p className="text-[0.92rem] text-soft leading-[1.8] mb-6">
                          {product.details}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="text-[0.85rem] tracking-[0.06em] font-semibold text-charcoal mb-3 uppercase">
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {product.features.slice(0, 3).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <div className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                              <span className="text-[0.8rem] text-soft">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* CTA */}
                      <div className="flex gap-4 pt-4">
                        <Link
                          to={`/products/${product.num}`}
                          className="bg-charcoal text-gold px-6 py-3 text-[0.75rem] tracking-[0.15em] uppercase font-semibold no-underline hover:bg-mid transition-all duration-300"
                        >
                          Learn More
                        </Link>
                        <Link
                          to="/quote"
                          className="border border-charcoal text-charcoal px-6 py-3 text-[0.75rem] tracking-[0.15em] uppercase font-semibold no-underline hover:bg-charcoal hover:text-gold transition-all duration-300"
                        >
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-charcoal" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all"
            >
              <ChevronRight className="w-5 h-5 text-charcoal" />
            </button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-charcoal w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* View All */}
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-block bg-gold text-charcoal px-8 py-3.5 text-[0.75rem] tracking-[0.2em] uppercase font-semibold no-underline hover:bg-gold-dark hover:text-ivory transition-all duration-300"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

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
