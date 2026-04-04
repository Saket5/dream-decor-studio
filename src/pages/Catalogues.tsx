import { useState } from "react";
import Layout from "@/components/Layout";
import Seo from "@/components/Seo";
import { MessageCircle } from "lucide-react";
import { catalogues } from "@/data/catalogues";
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
import { createCatalogueMessage, openWhatsApp } from "@/lib/whatsapp";

const Catalogues = () => {
  const [selectedCatalogue, setSelectedCatalogue] = useState<string>("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Get the WhatsApp phone number from environment variable
    const whatsappPhone = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;
    
    if (!whatsappPhone) {
      toast.error("WhatsApp number is not configured. Please contact support.");
      console.error("VITE_WHATSAPP_PHONE_NUMBER is not set");
      return;
    }

    // Validate phone number
    if (!formData.phone || formData.phone.trim().length < 10) {
      toast.error("Please enter a valid phone number");
      return;
    }

    try {
      // Create a formatted message
      const message = createCatalogueMessage({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        catalogueName: selectedCatalogue,
        message: formData.message,
      });
      
      // Open WhatsApp with the message
      openWhatsApp(whatsappPhone, message);
      
      // Show success message
      toast.success("Opening WhatsApp... Your request is ready to send!");
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        setIsDialogOpen(false);
      }, 500);
    } catch (error) {
      console.error("Error opening WhatsApp:", error);
      toast.error("Failed to open WhatsApp. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const openRequestDialog = (catalogueTitle: string) => {
    setSelectedCatalogue(catalogueTitle);
    setIsDialogOpen(true);
  };

  return (
    <Layout>
      <Seo
        title="Product Catalogues | Nashnal Trend Decor LLP"
        description="Request and explore detailed catalogues for Nashnal Trend Decor LLP product ranges including panels, laminates, wallpapers, flooring, and decorative solutions."
        path="/catalogues"
      />
      {/* Header */}
      <div className="bg-charcoal py-20 px-[8vw] text-center">
        <span className="text-[0.62rem] tracking-[0.35em] uppercase text-gold-light font-medium">
          Downloads and Brochures
        </span>
        <h1 className="font-display text-[clamp(2rem,4.5vw,3.4rem)] font-light leading-[1.15] text-ivory mt-4">
          Product Catalogues
        </h1>
        <p className="text-[0.88rem] text-ivory/50 mt-4 max-w-xl mx-auto">
          Browse our detailed product catalogues. Fill in your details and we'll send you the catalogue via WhatsApp.
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
                  <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                      <button
                        onClick={() => openRequestDialog(cat.title)}
                        className="flex items-center gap-2 bg-gold text-charcoal px-5 py-2.5 text-[0.7rem] tracking-[0.15em] uppercase font-semibold hover:bg-gold-dark hover:text-ivory transition-all duration-300"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Request Catalogue
                      </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle className="text-center font-display text-[1.5rem] font-light">
                          Request Catalogue
                        </DialogTitle>
                        <p className="text-center text-soft text-[0.9rem]">
                          Fill in your details and we'll send you the "{selectedCatalogue}" catalogue via WhatsApp.
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
                          className="w-full bg-charcoal text-gold hover:bg-mid transition-all duration-300 text-[0.75rem] tracking-[0.2em] uppercase font-semibold flex items-center justify-center gap-2"
                        >
                          <MessageCircle className="w-4 h-4" />
                          Send via WhatsApp
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
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
