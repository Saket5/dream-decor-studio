import Layout from "@/components/Layout";
import { useState } from "react";
import { toast } from "sonner";
import { productOptions } from "@/data/quote";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: "",
    area: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your quote request has been submitted. We'll contact you shortly.");
    setFormData({ name: "", email: "", phone: "", company: "", product: "", area: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Layout>
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-72px)]">
        {/* Left Info */}
        <div className="bg-charcoal py-20 px-[6vw] flex flex-col justify-center">
          <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold-light font-medium">
            Get in Touch
          </span>
          <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-ivory mt-4 mb-6">
            Request a <em>Free Quote</em>
          </h1>
          <p className="text-[0.88rem] text-ivory/55 leading-[1.75] mb-12 max-w-[450px]">
            Tell us about your project and we'll provide a customized quotation with the best products and pricing for your needs.
          </p>
          <div className="flex flex-col gap-5">
            {[
              "Free consultation with our design experts",
              "Competitive pricing on all products",
              "Samples available for all materials at store",
            ].map((point) => (
              <div key={point} className="flex items-start gap-3.5">
                <div className="w-2 h-2 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                <span className="text-[0.88rem] text-ivory/60 leading-[1.65]">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Form */}
        <div className="bg-cream py-20 px-[6vw] flex flex-col justify-center">
          <h2 className="font-display text-[2rem] font-normal text-charcoal mb-1.5">Get Your Quote</h2>
          <p className="text-[0.82rem] text-soft mb-9">Fill out the form below and we'll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] tracking-[0.15em] uppercase text-mid font-medium">Full Name *</label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border border-line bg-ivory/50 px-4 py-3 text-[0.88rem] font-body text-charcoal outline-none transition-colors focus:border-gold"
                  placeholder="Your name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] tracking-[0.15em] uppercase text-mid font-medium">Email *</label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border border-line bg-ivory/50 px-4 py-3 text-[0.88rem] font-body text-charcoal outline-none transition-colors focus:border-gold"
                  placeholder="email@example.com"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] tracking-[0.15em] uppercase text-mid font-medium">Phone *</label>
                <input
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="border border-line bg-ivory/50 px-4 py-3 text-[0.88rem] font-body text-charcoal outline-none transition-colors focus:border-gold"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.72rem] tracking-[0.15em] uppercase text-mid font-medium">Company</label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="border border-line bg-ivory/50 px-4 py-3 text-[0.88rem] font-body text-charcoal outline-none transition-colors focus:border-gold"
                  placeholder="Company name"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] tracking-[0.15em] uppercase text-mid font-medium">Product Interest *</label>
              <select
                name="product"
                value={formData.product}
                onChange={handleChange}
                required
                className="border border-line bg-ivory/50 px-4 py-3 text-[0.88rem] font-body text-charcoal outline-none transition-colors focus:border-gold appearance-none cursor-pointer"
              >
                <option value="">Select a product category</option>
                {productOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] tracking-[0.15em] uppercase text-mid font-medium">Approximate Area (sq ft)</label>
              <input
                name="area"
                value={formData.area}
                onChange={handleChange}
                className="border border-line bg-ivory/50 px-4 py-3 text-[0.88rem] font-body text-charcoal outline-none transition-colors focus:border-gold"
                placeholder="e.g., 500"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-[0.72rem] tracking-[0.15em] uppercase text-mid font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="border border-line bg-ivory/50 px-4 py-3 text-[0.88rem] font-body text-charcoal outline-none transition-colors focus:border-gold resize-vertical min-h-[100px]"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="bg-gold text-charcoal px-8 py-3.5 text-[0.75rem] tracking-[0.2em] uppercase font-semibold hover:bg-gold-dark hover:text-ivory transition-all duration-300 mt-2"
            >
              Submit Quote Request
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Quote;
