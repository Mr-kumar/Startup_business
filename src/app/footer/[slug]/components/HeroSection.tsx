// app/registerpage/[slug]/components/HeroSection.tsx
import { HeroData } from "../data/herodata";

interface HeroSectionProps {
  data: HeroData;
}

export default function HeroSection({ data }: HeroSectionProps) {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Section */}
        <div className="flex-1 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
            {data.title}{" "}
            <span className="text-orange-500">{data.subtitle}</span>
          </h1>

          <p className="mt-4 text-lg text-gray-600">{data.description}</p>

          {/* Search */}
          <form className="mt-6 flex bg-white border rounded-lg overflow-hidden shadow-md max-w-lg">
            <input
              type="text"
              placeholder={data.searchPlaceholder}
              className="p-4 w-full outline-none text-gray-700"
            />
            <button className="bg-blue-600 text-white px-8 font-semibold hover:bg-blue-700 transition">
              Search
            </button>
          </form>
        </div>

        {/* Right Section */}
        <div className="flex-1 relative flex justify-center">
          <img
            src="https://corpbiz.io/img/all-service.png"
            alt="Business Illustration"
            className="h-80 md:h-96 w-auto"
          />
        </div>
      </div>
    </section>
  );
}
