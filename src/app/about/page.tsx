import React from "react";
 
import { Mail, Phone, MessageCircle, Globe, Scale, MessageSquare, Award, FileText, CreditCard, Headphones } from "lucide-react";

export default function About() {

    const features = [
        {
            icon: <Award className="w-12 h-12 text-orange-500" />,
            title: "India No.1 Legal Platform",
            desc: "Get the legal help from over 10,000+ Independent Professionals across India",
        },
        {
            icon: <MessageSquare className="w-12 h-12 text-orange-500" />,
            title: "Get Legal Advice",
            desc: "Post your queries and get response from highly experienced professionals within 30 minutes.",
        },
        {
            icon: <Scale className="w-12 h-12 text-orange-500" />,
            title: "Contact a Lawyer/CA/Engineers Now?",
            desc: "Contact & get legal advice from our network of independent professionals for your specific matter.",
        },
    ];

    const steps = [
        {
            icon: <FileText size={40} className="text-white" />,
            title: "Fill Up Application Form",
            bg: "bg-[#0d4d7d]",
        },
        {
            icon: <Mail size={40} className="text-white" />,
            title: "Get Confirmation on Mail",
            bg: "bg-[#e9a837]",
        },
        {
            icon: <CreditCard size={40} className="text-white" />,
            title: "Connect on meeting",
            bg: "bg-[#0d4d7d]",
        },
        {
            icon: <Headphones size={40} className="text-white" />,
            title: "Executive will process Application",
            bg: "bg-[#e9a837]",
        },

    ];

    return (
        <div>
            {/* woweare */}
            <section
                className="relative bg-cover bg-center h-[300px] flex items-center justify-center"
                style={{
                    backgroundImage:
                        "url('https://media.istockphoto.com/id/637367232/photo/business-people-shaking-hands-finishing-up-a-meeting.jpg?s=1024x1024&w=is&k=20&c=dfXT9VwHkLHZ6nJrsxWmN9fMu8oMH2aIn5Kwq_B6nlg=')",
                }}
            >
                <div className="absolute inset-0 bg-blue-500 opacity-40"></div>

                <div className="relative text-center text-white px-6">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        Who we are?
                    </h2>
                    <div className="w-16 h-1 bg-yellow-500 mx-auto mb-4"></div>
                    <p className="max-w-2xl mx-auto text-sm md:text-lg">
                        We serve many customers, ranging from small businesses,
                        medium entrepreneurs, to world-renowned companies.
                    </p>
                </div>
            </section>

            {/* About Us content */}
            <section className="py-12 px-6 md:px-16 bg-gray-50">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                    {/* Left Content */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About us</h2>

                        <p className="text-gray-700 mb-4">
                            Welcome to Ashtronx.in: India&apos;s premier platform for business registration, compliance, tax, and legal consulting. Powered by a robust network of over 10,000 Chartered Accountants, 15,000 Lawyers, 1,000 Company Secretaries, and 1,500 Engineers, we deliver integrated solutions trusted by startups, SMEs, and large enterprises alike.
                        </p>

                        <h3 className="text-lg font-semibold mb-2">Client-First. Always Independent.</h3>
                        <p className="text-gray-700 mb-4">
                            What sets us apart? At Ashtronx.in, clients connect directly with verified experts across domains—ensuring unbiased, transparent, and personalized guidance every step of the way. Our professionals operate independently, free from third-party influence, guaranteeing genuine advice tailored to your business goals.
                        </p>

                        <h3 className="text-lg font-semibold mb-2">Nationwide Network. Tailored Expertise.</h3>
                        <p className="text-gray-700">
                            Backed by 5,000+ legal and accounting firms and a dedicated team of management consultants, we offer unmatched reach across 10,000+ pin codes in India. Whether you&apos;re launching a startup or scaling a multinational, Ashtronx.in delivers customized, end-to-end solutions to navigate every stage of your business lifecycle.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center md:justify-end">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1747889461984-ecf42eab7d80?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // place your image in public/office.jpg
                            alt="Office workspace"
                            width={600}
                            height={400}
                            className="rounded-md shadow-md"
                        />
                    </div>
                </div>
            </section>

            {/* contact section */}
            <div>
                {/* Top Section */}
                <section className="py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">

                    {/* Left Content */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Streamlining Business in India: Your One-Stop Solution for Complex Regulatory Needs
                        </h2>
                        <p className="text-gray-700 mb-4">
                            At Ashtronx.in, we operate India&apos;s most comprehensive platform for managing compliance across 1,000+ business categories. Powered by AI-driven technology, our system simplifies even the most intricate legal and regulatory requirements—saving you time, cost, and effort.

                            From BFSI and manufacturing to international trade, our unified platform consolidates all your compliance needs under one secure login, offering seamless access to expert-led solutions.
                        </p>
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Fast. Reliable. Expert-Led.
                        </h2>
                        <p className="text-gray-700 mb-6">
                            Our team is built for speed and precision. With a client-first approach, we deliver prompt responses and tailored advisory services to ensure you&apos;re always compliant, always ready.

                            At Ashtronx.in, client satisfaction isn&apos;t a metric—it&apos;s our mission. We make business simple, scalable, and future-ready.
                        </p>

                        <button className="bg-[#1D293D] text-white px-6 py-2 rounded-md font-semibold shadow-md hover:bg-orange-600">
                            Get Started
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <img
                            src="https://corpbiz.io/admin/style/images/userfiles/image/best-advice-img.png"
                            alt="Illustration"
                            width={400}
                            height={300}
                            className="w-full max-w-md"
                        />
                    </div>
                </section>

                {/* Bottom Section */}
                <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-12 px-6 md:px-16">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">How To Reach Us?</h2>
                    <p className="mb-8 font-semibold">You can reach out to us :-</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                        <div className="flex items-center space-x-3">
                            <Mail className="text-yellow-400" />
                            <span>office.dostartup@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Phone className="text-red-400" />
                            <span>+91-9911144807</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <MessageCircle className="text-green-400" />
                            <span>+91-9911144807</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <Globe className="text-blue-400" />
                            <span>www.dostartup.in</span>
                        </div>
                    </div>

                    <p className="mb-2">📩 Submit your query and state your requirements.</p>
                    <p>
                        Receive a call back from our experts as per your query, where we
                        provide free legal advice and proceed further to solve your query.
                    </p>
                </section>
            </div>

            {/* feaetures */}
            <section className="py-16 px-6 md:px-16 bg-gray-50">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
                    Over 100,000 clients choose Corpbiz for their legal solutions
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition"
                        >
                            <div className="mb-4 flex justify-center">{feature.icon}</div>
                            <h3 className="text-lg font-bold text-center mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-center">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* working process */}
            <section className="py-16 px-6 md:px-16 bg-white">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
                    Our Working Process
                </h2>
                <div className="w-20 h-1 bg-[#e9a837] mx-auto mb-12 rounded"></div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className={`${step.bg} text-white p-8 rounded-lg flex flex-col items-center justify-center shadow-md`}
                        >
                            <div className="mb-4">{step.icon}</div>
                            <h3 className="text-center font-semibold text-lg">{step.title}</h3>
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}