"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users,
  Sparkles
} from "lucide-react";

export default function ModernHome() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      title: "Company Registration",
      description: "Register your Private Limited, LLP, or OPC with expert guidance",
      icon: "🏢",
      category: "registration",
      link: "/private-limited-company-registration",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "GST Services",
      description: "Complete GST registration and return filing solutions",
      icon: "📊",
      category: "tax",
      link: "/gst-registration",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Trademark Registration",
      description: "Protect your brand with trademark and IP services",
      icon: "™️",
      category: "ip",
      link: "/trademark-registration",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "FSSAI License",
      description: "Get your food business license quickly and hassle-free",
      icon: "🍽️",
      category: "license",
      link: "/fssai-license-registration",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "MSME Registration",
      description: "Unlock government benefits with MSME certification",
      icon: "🏭",
      category: "registration",
      link: "/msme-registration-india",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "ISO Certification",
      description: "Get internationally recognized quality certifications",
      icon: "🏅",
      category: "license",
      link: "/iso-registration",
      color: "from-yellow-500 to-orange-500"
    },
  ];

  const stats = [
    { number: "5000+", label: "Happy Clients", icon: Users },
    { number: "400+", label: "Services Offered", icon: Sparkles },
    { number: "10+", label: "Years Experience", icon: TrendingUp },
    { number: "24/7", label: "Support Available", icon: Clock },
  ];

  const features = [
    {
      icon: Shield,
      title: "100% Secure",
      description: "Your data is encrypted and completely secure with us"
    },
    {
      icon: Clock,
      title: "Fast Processing",
      description: "Quick turnaround time for all services"
    },
    {
      icon: CheckCircle,
      title: "Expert Guidance",
      description: "Professional consultants to guide you at every step"
    },
    {
      icon: Star,
      title: "Best Prices",
      description: "Transparent pricing with no hidden charges"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Modern Gradient */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 pt-20 pb-32">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-40 w-80 h-80 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
                🚀 Trusted by 5000+ Businesses
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
                Your Business,
                <br />
                <span className="bg-gradient-to-r from-primary-600 via-secondary-600 to-accent-600 bg-clip-text text-transparent">
                  Simplified & Secured
                </span>
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                Professional business registration, compliance, and legal services in Patna and across India. Fast, reliable, and affordable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => router.push("/contact")}
                  className="group bg-gradient-primary text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all flex items-center"
                >
                  Get Started Free
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => router.push("/about")}
                  className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-primary-600 text-primary-600 hover:bg-primary-50 transition-all"
                >
                  Learn More
                </button>
              </div>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-600"
            >
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success-500 mr-2" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success-500 mr-2" />
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-success-500 mr-2" />
                <span>Expert Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-neutral-200">
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
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-primary rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-neutral-900 mb-2">{stat.number}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Everything you need to start, run, and grow your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                onClick={() => router.push(service.link)}
                className="group bg-white rounded-2xl p-8 shadow-soft hover:shadow-large transition-all cursor-pointer border border-neutral-100"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-primary-600 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => router.push("/services")}
              className="bg-neutral-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-neutral-800 transition-all shadow-lg"
            >
              View All 400+ Services
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Why Choose Ashtronx?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We make business compliance simple, fast, and affordable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 text-white">
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
            <p className="text-xl text-primary-100 mb-8">
              Get expert guidance and fast processing for all your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-all shadow-xl"
              >
                Talk to an Expert
              </button>
              <button
                onClick={() => router.push("/services")}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
              >
                Browse Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
