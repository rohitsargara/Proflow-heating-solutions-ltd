import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { BeforeAfter } from "./components/BeforeAfter";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Reviews } from "./components/Reviews";
import { HowItWorks } from "./components/HowItWorks";
import { ServiceArea } from "./components/ServiceArea";
import { QuoteForm } from "./components/QuoteForm";
import { Footer } from "./components/Footer";
import { StickyContact } from "./components/StickyContact";

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-teal/30 selection:text-brand-navy">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <Reviews />
        <HowItWorks />
        <ServiceArea />
        <QuoteForm />
      </main>
      <Footer />
      <StickyContact />
    </div>
  );
}

