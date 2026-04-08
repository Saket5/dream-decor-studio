import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { products } from "@/data/products";
import { ArrowLeft, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { createProductInquiryMessage, openWhatsApp } from "@/lib/whatsapp";

const ProductDetail = () => {
  const { productId } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const product = products.find(p => p.num === productId);

  if (!product) {
    return (
      <Layout>
        <Seo
          title="Product Not Found | Nashnal Trend Decor LLP"
          description="The requested product page could not be found. Browse our full range of interior and exterior products."
          path={`/products/${productId ?? ""}`}
          robots="noindex,nofollow"
        />
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-charcoal mb-4">Product Not Found</h1>
            <Link to="/products" className="text-gold hover:underline">
              ← Back to Products
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;
    if (!whatsappPhone) {
      toast.error("WhatsApp number is not configured. Please contact support.");
      console.error("VITE_WHATSAPP_PHONE_NUMBER is not set");
      return;
    }

    const message = createProductInquiryMessage({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      productName: product.name,
    });

    openWhatsApp(whatsappPhone, message);
    toast.success("Opening WhatsApp with your product inquiry!");

    // Reset form
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    setIsDialogOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <Layout>
      <Seo
        title={`${product.name} | Nashnal Trend Decor LLP`}
        description={product.desc}
        path={`/products/${product.num}`}
        type="product"
        image={product.images[0]}
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          description: product.desc,
          image: product.images,
          brand: {
            "@type": "Brand",
            name: "Nashnal Trend Decor LLP"
          },
          url: `https://nashnal.com/products/${product.num}`
        }}
      />
      {/* Breadcrumb */}
      <div className="bg-cream py-4 px-[8vw]">
        <div className="flex items-center gap-2 text-[0.8rem]">
          <Link to="/" className="text-soft hover:text-charcoal">Home</Link>
          <span className="text-soft">/</span>
          <Link to="/products" className="text-soft hover:text-charcoal">Products</Link>
          <span className="text-soft">/</span>
          <span className="text-charcoal">{product.name}</span>
        </div>
      </div>

      {/* Product Header */}
      <div className="bg-charcoal py-12 px-[8vw]">
        <div className="flex items-center gap-4 mb-4">
          <Link to="/products" className="text-ivory hover:text-gold transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <span className="text-gold text-[0.7rem] tracking-[0.2em] uppercase font-medium">
            Product {product.num}
          </span>
        </div>
        <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-ivory">
          {product.name}
        </h1>
        <p className="text-[0.92rem] text-ivory/60 max-w-2xl mt-4">
          {product.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-[8vw] py-16">
        {/* Image Gallery */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronLeft className="w-5 h-5 text-charcoal" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                >
                  <ChevronRight className="w-5 h-5 text-charcoal" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-gold'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="space-y-8">
          {/* Description */}
          <div>
            <h2 className="font-display text-[1.5rem] font-normal text-charcoal mb-4">
              Product Details
            </h2>
            <p className="text-[0.9rem] text-soft leading-[1.7]">
              {product.details}
            </p>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-display text-[1.2rem] font-normal text-charcoal mb-4">
              Key Features
            </h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                  <span className="text-[0.85rem] text-soft">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Applications */}
          <div>
            <h3 className="font-display text-[1.2rem] font-normal text-charcoal mb-4">
              Applications
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.applications.map((application, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-cream text-charcoal text-[0.75rem] rounded-full"
                >
                  {application}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="w-full bg-charcoal text-gold px-8 py-4 text-[0.8rem] tracking-[0.15em] uppercase font-semibold hover:bg-mid transition-all duration-300 mb-4">
                  <MessageCircle className="w-4 h-4 inline mr-2" />
                  Inquire About This Product
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-center font-display text-[1.5rem] font-light">
                    Product Inquiry
                  </DialogTitle>
                  <p className="text-center text-soft text-[0.9rem]">
                    Interested in "{product.name}"? Fill in your details and we'll get back to you.
                  </p>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-[0.82rem] font-semibold text-charcoal mb-2">
                        First Name *
                      </Label>
                      <Input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-[0.82rem] font-semibold text-charcoal mb-2">
                        Last Name *
                      </Label>
                      <Input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email" className="text-[0.82rem] font-semibold text-charcoal mb-2">
                        Email Address
                      </Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-[0.82rem] font-semibold text-charcoal mb-2">
                        Phone Number *
                      </Label>
                      <Input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-[0.82rem] font-semibold text-charcoal mb-2">
                      Additional Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      className="w-full"
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-charcoal text-gold hover:bg-mid transition-all duration-300 text-[0.75rem] tracking-[0.2em] uppercase font-semibold"
                  >
                    Send via WhatsApp
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
            <Link
              to="/quote"
              className="block w-full text-center border border-charcoal text-charcoal px-8 py-4 text-[0.8rem] tracking-[0.15em] uppercase font-medium hover:bg-charcoal hover:text-gold transition-all duration-300"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <section className="py-16 px-[8vw] bg-cream">
        <h2 className="font-display text-[2rem] font-light text-charcoal text-center mb-12">
          Explore More Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products
            .filter(p => p.num !== product.num)
            .slice(0, 3)
            .map((relatedProduct) => (
              <Link
                key={relatedProduct.num}
                to={`/products/${relatedProduct.num}`}
                className="group block"
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={relatedProduct.img}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <span className="text-gold text-[0.7rem] tracking-[0.2em] uppercase font-medium">
                      {relatedProduct.num}
                    </span>
                    <h3 className="font-display text-[1.1rem] font-normal text-charcoal mt-2 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-[0.8rem] text-soft leading-[1.6] line-clamp-2">
                      {relatedProduct.desc}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;