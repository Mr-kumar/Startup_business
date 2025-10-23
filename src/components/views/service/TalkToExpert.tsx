'use client'
import React from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle, Calendar, FileText } from "lucide-react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TalkToExpert: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    {
      step: "01",
      title: "Enquiry Form",
      desc: "Among Asia Top 100 Consulting Firm",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      step: "02",
      title: "Get Consultation",
      desc: "Lowest Fees 100,000+ Clients",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      step: "03",
      title: "Service Delivery",
      desc: "4.9 Rating | 50+ Offices",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    }
  ];

  return (
    <div ref={ref} className="bg-gradient-to-b from-background to-blue-50/30 py-16 px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {/* Section Header */}
        <div className="mb-12 text-center">
          <Badge className="mb-4" variant="secondary">Expert Consultation</Badge>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Talk to an Expert
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto text-lg"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            Get personalized guidance from our industry specialists
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-center lg:items-start">
          {/* Expert Card */}
          <motion.div
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 text-white border-0 shadow-xl relative overflow-hidden">
              <CardContent className="p-8">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12"></div>

                <div className="relative z-10 flex flex-col items-center">
                  <motion.div
                    className="relative mb-6"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Image
                      width={150}
                      height={150}
                      src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80"
                      alt="Expert"
                      className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                  </motion.div>

                  <div className="text-center">
                    {/* Contact Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center mt-8">
                      <Button
                        size="lg"
                        variant="secondary"
                        className="shadow-lg hover:shadow-xl"
                        asChild
                      >
                        <a href="tel:+919911144807" className="flex items-center gap-2">
                          <Phone className="w-5 h-5" />
                          <span>Call Now</span>
                        </a>
                      </Button>
                      <Button
                        size="lg"
                        className="bg-green-500 hover:bg-green-600 shadow-lg hover:shadow-xl"
                        asChild
                      >
                        <a href="https://wa.me/919911144807" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <MessageCircle className="w-5 h-5" />
                          <span>WhatsApp</span>
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full lg:w-2/3">
            {steps.map(({ step, title, desc, icon }, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-all h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="relative mb-4">
                      <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full shadow-lg">
                        {icon}
                      </div>
                    </div>
                    <Badge variant="outline" className="mb-2">Step {step}</Badge>
                    <h3 className="font-bold text-foreground text-lg mb-2">{title}</h3>
                    <p className="text-muted-foreground text-sm flex-grow">{desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TalkToExpert;