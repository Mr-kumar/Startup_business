'use client';
import { Service } from '../data/servicesData';
import { useRouter } from 'next/navigation';
import { Mail, FileText, CreditCard, Headphones, ArrowRight, ChevronRight } from "lucide-react";

interface ServicesSectionProps {
  services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
  const router = useRouter();

  const steps = [
    {
      icon: <FileText size={32} className="text-white" />,
      title: "Fill Up Application Form",
      description: "Complete our simple online form with your details",
      bg: "bg-blue-900",
    },
    {
      icon: <Mail size={32} className="text-white" />,
      title: "Get Confirmation on Mail",
      description: "Receive immediate confirmation with next steps",
      bg: "bg-amber-600",
    },
    {
      icon: <CreditCard size={32} className="text-white" />,
      title: "Connect on meeting",
      description: "Schedule a consultation with our experts",
      bg: "bg-blue-900",
    },
    {
      icon: <Headphones size={32} className="text-white" />,
      title: "Executive will process Application",
      description: "Our team handles everything from here",
      bg: "bg-amber-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Services We Offer</h2>
        <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
        <p className="mt-2 text-gray-600 max-w-2xl mx-auto text-lg">
          We make technical compliance certifications effortless and convenient with our expert guidance and streamlined processes.
        </p>
      </div>
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {services.map((svc) => (
          <div
            key={svc.id}
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col justify-between border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">{svc.title}</h3>
              </div>
              <div className="h-1 w-10 bg-amber-500 mb-4" />
              <p className="text-gray-600 mb-6 leading-relaxed">{svc.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between pt-4 border-t border-gray-100">
              <button
                onClick={() => router.push(svc.href)}
                className="bg-[#1D293D] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-blue-800 transition-all flex items-center gap-2"
              >
                {svc.price} <ArrowRight size={16} />
              </button>
              <a
                href={svc.href}
                className="text-blue-700 font-medium hover:underline flex items-center gap-1 text-sm"
              >
                Read more <ChevronRight size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* working process */}
      <section className="py-16 px-6 bg-gray-50 mt-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Working Process
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mb-4"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our streamlined 4-step process ensures a smooth and efficient experience from application to completion
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
            
            {steps.map((step, index) => (
              <div
                key={index}
                className={`${step.bg} text-white p-6 rounded-xl flex flex-col items-center justify-center shadow-lg relative z-10 transition-transform duration-300 hover:scale-105`}
              >
                <div className="w-14 h-14 rounded-full bg-black bg-opacity-20 flex items-center justify-center mb-4">
                  {step.icon}
                </div>
                <div className="text-center">
                  <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center text-white font-bold absolute -top-2 -right-2">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm opacity-90">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}