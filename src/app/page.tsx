"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardEight from '@/components/sections/feature/FeatureCardEight';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroSplitDualMedia from '@/components/sections/hero/HeroSplitDualMedia';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="background-highlight"
        borderRadius="pill"
        contentWidth="mediumSmall"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="glass-elevated"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="solid"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleCentered
      navItems={[
        {
          name: "Services",          id: "services"},
        {
          name: "Process",          id: "process"},
        {
          name: "Work",          id: "work"},
        {
          name: "Contact",          id: "contact"},
      ]}
      button={{
        text: "Get Started",        href: "#contact"}}
      brandName="House Stark"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitDualMedia
      background={{
        variant: "gradient-bars"}}
      title="Unleashing Digital Dominance."
      description="House Stark scales brands through relentless execution, data-driven strategy, and world-class engineering. No fluff, just results."
      tag="Est. 2018"
      buttons={[
        {
          text: "Our Work",          href: "#work"},
        {
          text: "Start Project",          href: "#contact"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/particle-lines-futuristic-network-background_53876-129729.jpg",          imageAlt: "Agency workspace"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-network-communications-background-with-low-poly-plexus-design_1048-15687.jpg",          imageAlt: "Data visualization"},
      ]}
      mediaAnimation="slide-up"
      rating={5}
      ratingText="Trusted by 100+ global brands"
      tagIcon={Sparkles}
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardEight
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Web Development",          description: "High-conversion web apps built with modern stacks (React, Node, Go). Scalable, secure, and lightning-fast.",          imageSrc: "http://img.b2bpic.net/free-photo/woman-employee-looking-startup-analytics-pc_482257-74478.jpg",          imageAlt: "Web Dev"},
        {
          title: "Mobile App Development",          description: "Native iOS/Android and Cross-platform solutions that users actually love. Performance-first architecture.",          imageSrc: "http://img.b2bpic.net/free-photo/3d-data-technology-abstract-background-with-low-poly-plexus-design_1048-17734.jpg",          imageAlt: "Mobile App"},
        {
          title: "SEO Excellence",          description: "Strategic, algorithm-proof search engine optimization that puts you on top and keeps you there.",          imageSrc: "http://img.b2bpic.net/free-photo/gradient-digital-transformation-business-background_53876-104052.jpg",          imageAlt: "SEO"},
        {
          title: "Precision PPC",          description: "Aggressive, high-ROI paid media campaigns designed to scale your reach and capture market share.",          imageSrc: "http://img.b2bpic.net/free-photo/3d-background-with-flowing-dots_1048-6618.jpg",          imageAlt: "PPC"},
      ]}
      title="Service Offerings"
      description="We specialize in high-growth digital infrastructure."
    />
  </div>

  <div id="process" data-section="process">
      <MetricCardEleven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "1",          value: "1.",          title: "Discovery",          description: "Deep audit of your current digital position.",          imageSrc: "http://img.b2bpic.net/free-photo/light-blue-3d-abstract-wave-pattern_53876-95187.jpg"},
        {
          id: "2",          value: "2.",          title: "Strategy",          description: "Mapping the path to your market dominance.",          imageSrc: "http://img.b2bpic.net/free-photo/geometric-abstract-background-technology-concept-connecting-dots-design_53876-153353.jpg"},
        {
          id: "3",          value: "3.",          title: "Build",          description: "Rapid development with agile methodology.",          imageSrc: "http://img.b2bpic.net/free-photo/successful-african-american-employee-manages-financial-planning_482257-122600.jpg"},
        {
          id: "4",          value: "4.",          title: "Launch",          description: "Go-to-market execution and quality assurance.",          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-network-communications-background-with-flowing-particles_1048-13122.jpg"},
        {
          id: "5",          value: "5.",          title: "Optimize",          description: "Continuous improvement and growth scaling.",          imageSrc: "http://img.b2bpic.net/free-photo/empty-space-prepared-aa-meeting-group-therapy-with-chairs-circle-nobody-room-used-psychotherapy-session-communication-against-acohol-addiction-problems_482257-27421.jpg"},
      ]}
      title="Our Battle Plan"
      description="5 precise steps to turn ambiguity into digital assets."
    />
  </div>

  <div id="work" data-section="work">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "w1",          name: "Fintech Disruptor App",          price: "+400% Growth",          imageSrc: "http://img.b2bpic.net/free-photo/successful-hacker-celebrating-phishing-achievement-pc-feeling-happy-about-stealing-passwords-night-skilled-spy-enjoying-cyberattack-success-with-malware-break-firewall_482257-66409.jpg"},
        {
          id: "w2",          name: "E-com Scale Strategy",          price: "$12M Revenue",          imageSrc: "http://img.b2bpic.net/free-photo/3d-connections-background-with-low-poly-connecting-lines-dots_1048-11882.jpg"},
        {
          id: "w3",          name: "SaaS Platform Re-build",          price: "-60% Churn",          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-modern-office-space-with-important-reports-laptop-empty-desk-showcasing-important-data_482257-133861.jpg"},
        {
          id: "w4",          name: "Enterprise Dashboard",          price: "10x Speed",          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-abstract-with-flowing-cyber-dots_1048-13630.jpg"},
        {
          id: "w5",          name: "Global SEO Campaign",          price: "1.2M Leads",          imageSrc: "http://img.b2bpic.net/free-photo/studio-background-concept-abstract-empty-light-gradient-purple-studio-room-background-product-plain-studio-background_1258-69112.jpg"},
        {
          id: "w6",          name: "PPC Market Acquisition",          price: "2.1 ROI",          imageSrc: "http://img.b2bpic.net/free-photo/business-network-background-connecting-dots-technology-design_53876-160247.jpg"},
      ]}
      title="Selected Case Studies"
      description="Data-driven outcomes for ambitious companies."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "John Doe",          handle: "CEO, StartupCorp",          testimonial: "House Stark isn't just an agency; they are our growth engine.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/model-man_158595-3785.jpg"},
        {
          id: "2",          name: "Jane Smith",          handle: "VP Tech, GrowthCo",          testimonial: "The most aggressive and effective developers we've worked with.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-business-woman-office-by-window_1303-21128.jpg"},
        {
          id: "3",          name: "Alex Johnson",          handle: "Founder, InnovateLab",          testimonial: "They don't make excuses, they make things happen.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-blond-business-woman-white-shirt-eyeglasses-crossed-arms-grey-background_613910-3693.jpg"},
        {
          id: "4",          name: "Sarah Lee",          handle: "Marketing Director",          testimonial: "ROI increased by 300% within the first quarter.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/designers-team-working-3d-model_23-2149371837.jpg"},
        {
          id: "5",          name: "Chris Brown",          handle: "CEO, ScaleUp",          testimonial: "House Stark understands the mechanics of digital revenue.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-businessman-using-touchpad-while-relaxing-staircase-looking-camera_637285-10976.jpg"},
      ]}
      showRating={true}
      title="What They Say"
      description="Hear from the partners we've scaled."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardOne
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      plans={[
        {
          id: "starter",          badge: "Launch",          price: "$5,000/mo",          subtitle: "Perfect for early-stage startups",          features: [
            "MVP Development",            "Basic SEO",            "Slack Support"],
        },
        {
          id: "growth",          badge: "Scale",          price: "$12,000/mo",          subtitle: "For established businesses",          features: [
            "App Scaling",            "Full Funnel PPC",            "Dedicated PM"],
        },
        {
          id: "enterprise",          badge: "Dominance",          price: "$25,000/mo",          subtitle: "Unrestricted agency resources",          features: [
            "Full Stack Team",            "Custom Strategies",            "24/7 Priority"],
        },
      ]}
      title="Pricing Plans"
      description="Flexible plans designed to grow with your ambition."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "How long does a typical build take?",          content: "Our rapid sprints typically take 4-8 weeks from discovery to market launch."},
        {
          id: "2",          title: "Can you work with our internal team?",          content: "Absolutely. We treat our partnership as a force multiplier for your existing efforts."},
        {
          id: "3",          title: "What tools do you use?",          content: "We rely on React, Go, Node.js, and AWS for scalable engineering."},
        {
          id: "4",          title: "Are you specialized in specific industries?",          content: "We thrive in Fintech, E-commerce, and high-growth SaaS environments."},
        {
          id: "5",          title: "Is pricing negotiable?",          content: "We work on fixed pricing based on the scope and project velocity requirements."},
        {
          id: "6",          title: "Do you provide support post-launch?",          content: "Yes, we offer ongoing optimization retainers to ensure continuous growth."},
      ]}
      title="Questions Answered"
      description="The logic behind our process."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCTA
      useInvertedBackground={true}
      background={{
        variant: "sparkles-gradient"}}
      tag="Start The Fire"
      title="Ready to scale your dominance?"
      description="Book a discovery call today and let's map out your roadmap."
      buttons={[
        {
          text: "Schedule Discovery Call",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Services",              href: "#services"},
            {
              label: "Our Process",              href: "#process"},
            {
              label: "Portfolio",              href: "#work"},
          ],
        },
        {
          items: [
            {
              label: "Pricing",              href: "#pricing"},
            {
              label: "Contact Us",              href: "#contact"},
            {
              label: "Careers",              href: "#"},
          ],
        },
        {
          items: [
            {
              label: "Privacy Policy",              href: "#"},
            {
              label: "Terms of Service",              href: "#"},
          ],
        },
      ]}
      logoText="House Stark"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}