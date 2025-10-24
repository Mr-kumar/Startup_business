"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Head from "next/head";
import {
  ArrowRight,
  CheckCircle2,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Users,
  Sparkles,
  Building2,
  FileText,
  Award,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ColorfulHome() {
  const router = useRouter();

  const services = [
    {
      title: "Company Registration",
      description:
        "Register your Private Limited, LLP, or OPC with expert guidance",
      icon: Building2,
      link: "/private-limited-company-registration",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "GST Services",
      description: "Complete GST registration and return filing solutions",
      icon: FileText,
      link: "/gst-registration",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Trademark Registration",
      description: "Protect your brand with trademark and IP services",
      icon: Award,
      link: "/trademark-registration",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "FSSAI License",
      description: "Get your food business license quickly and hassle-free",
      icon: CheckCircle2,
      link: "/fssai-license-registration",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      title: "MSME Registration",
      description: "Unlock government benefits with MSME certification",
      icon: TrendingUp,
      link: "/msme-registration-india",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "ISO Certification",
      description: "Get internationally recognized quality certifications",
      icon: Star,
      link: "/iso-registration",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  const stats = [
    {
      number: "5000+",
      label: "Happy Clients",
      icon: Users,
      color: "text-blue-600",
    },
    {
      number: "406",
      label: "Services Offered",
      icon: Sparkles,
      color: "text-purple-600",
    },
    {
      number: "10+",
      label: "Years Experience",
      icon: TrendingUp,
      color: "text-orange-600",
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: Clock,
      color: "text-green-600",
    },
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your data is encrypted and completely secure with us",
      color: "text-blue-600 bg-blue-50",
    },
    {
      icon: Zap,
      title: "Fast Processing",
      description: "Quick turnaround time for all services",
      color: "text-purple-600 bg-purple-50",
    },
    {
      icon: CheckCircle2,
      title: "Expert Guidance",
      description: "Professional consultants to guide you at every step",
      color: "text-orange-600 bg-orange-50",
    },
    {
      icon: Star,
      title: "Best Prices",
      description: "Transparent pricing with no hidden charges",
      color: "text-green-600 bg-green-50",
    },
  ];

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
      </Head>
      <div className="min-h-screen bg-gradient-to-b from-background via-blue-50/30 to-background overflow-x-hidden">
        {/* Hero Section - Colorful */}
        <section className="relative overflow-hidden pt-20 pb-32" aria-label="Hero section">
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-orange-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white border-0">
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by 5000+ Businesses
            </Badge>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Your Business,
              </span>
              <br />
              <span className="text-foreground">Simplified & Secured</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional business registration, compliance, and legal services
              in Patna and across India. Fast, reliable, and affordable.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 hover:opacity-90 text-lg px-8"
                onClick={() => router.push("/contact")}
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                onClick={() => router.push("/services")}
              >
                Browse Services
              </Button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-green-600 mr-2" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" />
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2" />
                <span>Expert Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y" aria-label="Company statistics">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${stat.color.replace(
                    "text-",
                    "bg-"
                  )}/10`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" aria-label="Our services">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              Popular Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Everything You Need to{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Grow
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions for your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  className="cursor-pointer hover:shadow-xl transition-all border-2 hover:border-primary/50 h-full"
                  onClick={() => router.push(service.link)}
                >
                  <CardHeader>
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
                    >
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => router.push("/services")}
            >
              View All 406 Services
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white" aria-label="Why choose us">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="mb-4">
              Why Choose Us
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Success
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make business compliance simple, fast, and affordable
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 mx-auto ${feature.color}`}
                    >
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Leading Partnerships Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white" aria-label="Our partners">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge variant="outline" className="mb-4">
              Trusted Partners
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industry Leading{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
                Partnerships
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We work with top Indian Institutions to further our shared mission of improving ease of doing business and promoting Entrepreneurship in India.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center max-w-6xl mx-auto"
          >
            {[
              { name: "ICICI Bank", logo: "/partners/icici-bank.png" },
              { name: "Axis Bank", logo: "/partners/axis-bank.png" },
              { name: "HDFC Bank", logo: "/partners/hdfc-bank.png" },
              { name: "Kotak", logo: "/partners/kotak.png" },
              { name: "Yes Bank", logo: "/partners/yes-bank.png" },
              { name: "Small Finance Bank", logo: "/partners/small-finance-bank.png" },
              { name: "South Indian Bank", logo: "/partners/south-indian-bank.png" },
              { name: "DBS", logo: "/partners/dbs.png" },
              { name: "Standard Chartered", logo: "/partners/standard-chartered.png" },
              { name: "IndusInd Bank", logo: "/partners/indusind-bank.png" },
              { name: "Shriram Finance", logo: "/partners/shriram-finance.png" },
              { name: "Aditya Birla Finance", logo: "/partners/aditya-birla.png" },
            ].map((partner, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-16 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100">
                  {/* Placeholder for partner logos - replace with actual images */}
                  <div className="flex items-center justify-center h-full text-sm font-semibold text-gray-600">
                    {partner.name}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 text-white" aria-label="Call to action">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Business Journey?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get expert guidance and fast processing for all your business
              needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8"
                onClick={() => router.push("/contact")}
              >
                Talk to an Expert
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 border-white text-white hover:bg-white/10"
                onClick={() => router.push("/services")}
              >
                Browse Services
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </>
  );
}
