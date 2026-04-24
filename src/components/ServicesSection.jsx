import ServiceCard from "./ServiceCard";
import img1 from "../assets/service/img1.webp";
import img2 from "../assets/service/img2.webp";
import img3 from "../assets/service/img3.webp";
import img4 from "../assets/service/img4.webp";
import img5 from "../assets/service/img5.webp";
import img6 from "../assets/service/img6.webp";
import img7 from "../assets/service/img7.webp";
import img8 from "../assets/service/img8.webp";
import img9 from "../assets/service/img9.webp";
import img10 from "../assets/service/img10.webp";
import img11 from "../assets/service/img11.webp";
import img12 from "../assets/service/img12.webp";
import img13 from "../assets/service/img13.webp";
import img14 from "../assets/service/img14.webp";

function ServicesSection() {
  const services = [
    {
      slides: [
        { img: img1, text: "Landing Pages" },
        { img: img7, text: "E-commerce Sites" },
        { img: img8, text: "Admin Dashboards" },
      ],
    },
    {
      slides: [
        { img: img2, text: "Android Apps" },
        { img: img3, text: "iOS Apps" },
        { img: img4, text: "Cross Platform" },
      ],
    },
    {
      slides: [
        { img: img10, text: "Wireframing" },
        { img: img4, text: "Prototyping" },
        { img: img5, text: "User Testing" },
      ],
    },
    {
      slides: [
        { img: img9, text: "SEO" },
        { img: img11, text: "Social Media" },
        { img: img6, text: "Ads Campaign" },
      ],
    },
    {
      slides: [
        { img: img5, text: "Blog Writing" },
        { img: img13, text: "Copywriting" },
        { img: img12, text: "Brand Content" },
      ],
    },
    {
      slides: [
        { img: img14, text: "Business Strategy" },
        { img: img1, text: "Tech Advice" },
        { img: img2, text: "Growth Planning" },
      ],
    },
  ];

  return (
    <div id="services" className="bg-gradient-to-t from-[#f9fafb] to-[#eef2ff] py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Our Services
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <ServiceCard key={i} slides={service.slides} delay={i * 400} />
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
