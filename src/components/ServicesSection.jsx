import ServiceCard from "./ServiceCard";

function ServicesSection() {
  const services = [
  {
    title: "Web Development",
    slides: ["Landing Pages", "E-commerce Sites", "Admin Dashboards"],
  },
  {
    title: "App Development",
    slides: ["Android Apps", "iOS Apps", "Cross Platform"],
  },
  {
    title: "UI/UX Design",
    slides: ["Wireframing", "Prototyping", "User Testing"],
  },
  {
    title: "Digital Marketing",
    slides: ["SEO", "Social Media", "Ads Campaign"],
  },
  {
    title: "Content Creation",
    slides: ["Blog Writing", "Copywriting", "Brand Content"],
  },
  {
    title: "Consulting",
    slides: ["Business Strategy", "Tech Advice", "Growth Planning"],
  },
];
  return (
    <div id="services" className="bg-[#f9fafb] py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;