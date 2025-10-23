"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
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
  Zap
} from "lucide-react";

export default function ZincHome() {
  const router = useRouter();

  const services = [
    {
      title: "Company Registration",
      description: "Register your Private Limited, LLP, or OPC with expert guidance",
      icon: Building2,
      link: "/private-limited-company-registration",
    },
    {
      title: "GST Services",
      description: "Complete GST registration and return filing solutions",
      icon: FileText,
      link: "/gst-registration",
    },
    {
      title: "Trademark Registration",
      description: "Protect your brand with trademark and IP services",
      icon: Award,
      link: "/trademark-registration",
    },
    {
      title: "FSSAI License",
      description: "Get your food business license quickly and hassle-free",
      icon: CheckCircle2,
      link: "/fssai-license-registration",
    },
    {
      title: "MSME Registration",
      description: "Unlock government benefits with MSME certification",
      icon: TrendingUp,
      link: "/msme-registration-india",
    },
    {
      title: "ISO Certification",
      description: "Get internationally recognized quality certifications",
      icon: Star,
      link: "/iso-registration",
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
      icon: Zap,
      title: "Fast Processing",
      description: "Quick turnaround time for all services"
    },
    {
      icon: CheckCircle2,
      title: "Expert Guidance",
      description: "Professional consultants to guide you at every step"
    },
    {
      icon: Star,
      title: "Best Prices",
      description: "Transparent pricing with no hidden charges"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section - Zinc Theme */}
      <section className="relative overflow-hidden bg-gradient-to-br from-neutral-50 via-neutral-100 to-neutral-50 pt-20 pb-32 border-b border-neutral-200">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 bg-neutral-900 text-white rounded-full text-sm font-semibold mb-6 shadow-lg"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Trusted by 5000+ Businesses
            </motion.div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-neutral-900 mb-6 leading-tight">
              Your Business,
              <br />
              <span className="text-neutral-600">Simplified & Secured</span>
            </h1>
            
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Professional business registration, compliance, and legal services in Patna and across India. Fast, reliable, and affordable.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => router.push("/contact")}
                className="group bg-neutral-900 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl hover:bg-neutral-800 transform hover:-translate-y-1 transition-all flex items-center"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => router.push("/services")}
                className="px-8 py-4 rounded-xl font-bold text-lg border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white transition-all"
              >
                Browse Services
              </button>
            </div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-neutral-600"
            >
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 mr-2" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 mr-2" />
                <span>Fast Processing</span>
              </div>
              <div className="flex items-center">
                <CheckCircle2 className="w-5 h-5 text-neutral-900 mr-2" />
                <span>Expert Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-6">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-900 rounded-xl mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-neutral-900 mb-2">{stat.number}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Everything you need to start, run, and grow your business
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                onClick={() => router.push(service.link)}
                className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all cursor-pointer border border-neutral-200 hover:border-neutral-300"
              >
                <div className="w-14 h-14 bg-neutral-900 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-neutral-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex items-center text-neutral-900 font-semibold group-hover:translate-x-2 transition-transform">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </motion.div>

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
      <section className="py-20 bg-white border-y border-neutral-200">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
              Why Choose Ashtronx?
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              We make business compliance simple, fast, and affordable
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-neutral-100 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-neutral-900" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-neutral-900 text-white">
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
            <p className="text-xl text-neutral-300 mb-8">
              Get expert guidance and fast processing for all your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-neutral-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-all shadow-xl"
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
