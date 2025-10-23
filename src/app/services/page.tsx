"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, Filter, ArrowRight, Loader2 } from "lucide-react";
import { getAllServices } from "@/lib/services";

export default function ServicesPage() {
  const router = useRouter();
  const [services, setServices] = useState<any[]>([]);
  const [filteredServices, setFilteredServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const servicesPerPage = 24;

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      setLoading(true);
      // Fetch all services from Strapi
      const result = await getAllServices(1, 500); // Get up to 500 services
      setServices(result.services);
      setFilteredServices(result.services);
    } catch (error) {
      console.error("Error loading services:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    filterServices();
  }, [searchQuery, selectedCategory, services]);

  const filterServices = () => {
    let filtered = [...services];

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter((service) =>
        service.title?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (service) => service.serviceCategory === selectedCategory
      );
    }

    setFilteredServices(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  };

  // Pagination
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(
    indexOfFirstService,
    indexOfLastService
  );
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  const categories = [
    { value: "all", label: "All Services", count: services.length },
    {
      value: "primary",
      label: "Primary Services",
      count: services.filter((s) => s.serviceCategory === "primary").length,
    },
    {
      value: "secondary",
      label: "Secondary Services",
      count: services.filter((s) => s.serviceCategory === "secondary").length,
    },
  ];

  const getServiceIcon = (title: string) => {
    const lowerTitle = title.toLowerCase();
    if (lowerTitle.includes("gst") || lowerTitle.includes("tax")) return "📊";
    if (lowerTitle.includes("company") || lowerTitle.includes("registration"))
      return "🏢";
    if (lowerTitle.includes("trademark") || lowerTitle.includes("patent"))
      return "™️";
    if (lowerTitle.includes("fssai") || lowerTitle.includes("food"))
      return "🍽️";
    if (lowerTitle.includes("iso") || lowerTitle.includes("certification"))
      return "🏅";
    if (lowerTitle.includes("license")) return "📜";
    if (lowerTitle.includes("legal") || lowerTitle.includes("law")) return "⚖️";
    if (lowerTitle.includes("msme") || lowerTitle.includes("udyam"))
      return "🏭";
    if (lowerTitle.includes("import") || lowerTitle.includes("export"))
      return "🌍";
    return "📋";
  };

  const getGradientColor = (index: number) => {
    const gradients = [
      "from-blue-500 to-cyan-500",
      "from-purple-500 to-pink-500",
      "from-orange-500 to-red-500",
      "from-green-500 to-emerald-500",
      "from-indigo-500 to-blue-500",
      "from-yellow-500 to-orange-500",
    ];
    return gradients[index % gradients.length];
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary-600 animate-spin mx-auto mb-4" />
          <p className="text-neutral-600 text-lg">Loading services...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      {/* Header Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Browse through our comprehensive range of {services.length}{" "}
              business services
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search services..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl text-neutral-800 focus:outline-none focus:ring-4 focus:ring-primary-300 shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === category.value
                      ? "bg-gradient-primary text-white shadow-lg"
                      : "bg-white text-neutral-700 hover:bg-neutral-50 shadow-md"
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-sm opacity-75">
                    ({category.count})
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-center">
            <p className="text-neutral-600">
              Showing {indexOfFirstService + 1}-
              {Math.min(indexOfLastService, filteredServices.length)} of{" "}
              {filteredServices.length} services
            </p>
          </div>

          {/* Services Grid */}
          {currentServices.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
              {currentServices.map((service, idx) => (
                <div
                  key={service.id || idx}
                  onClick={() => router.push(`/${service.slug}`)}
                  className="group bg-white rounded-2xl p-6 shadow-soft hover:shadow-large transition-all cursor-pointer border border-neutral-100 hover:border-primary-200"
                >
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${getGradientColor(
                      idx
                    )} rounded-xl flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {getServiceIcon(service.title)}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                No services found
              </h3>
              <p className="text-neutral-600">
                Try adjusting your search or filter
              </p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Previous
              </button>

              <div className="flex space-x-2">
                {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`w-10 h-10 rounded-lg font-semibold transition-all ${
                        currentPage === pageNum
                          ? "bg-gradient-primary text-white shadow-lg"
                          : "bg-white border border-neutral-300 hover:bg-neutral-50"
                      }`}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white border border-neutral-300 hover:bg-neutral-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 via-secondary-600 to-accent-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Our experts are here to help you with any business service you need
          </p>
          <button
            onClick={() => router.push("/contact")}
            className="bg-white text-primary-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-neutral-100 transition-all shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
