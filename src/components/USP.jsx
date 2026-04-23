import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import { FaRocket, FaShieldAlt, FaLightbulb } from "react-icons/fa";

const uspCards = [
  {
    icon: FaRocket,
    title: "Fast Performance",
    desc: "Optimized solutions that load quickly and deliver smooth user experiences across all devices.",
    iconStyle: "text-indigo-500",
  },
  {
    icon: FaShieldAlt,
    title: "Secure Systems",
    desc: "Built with modern security practices to keep your data safe and your platform protected.",
    iconStyle: "text-emerald-500",
  },
  {
    icon: FaLightbulb,
    title: "Creative Solutions",
    desc: "Innovative ideas and smart design thinking to help your business stand out in the market.",
    iconStyle: "text-amber-500",
  },
];

function USP() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim(window.tsParticles).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section
      className="relative py-26 flex items-center justify-center text-center overflow-hidden 
    bg-gradient-to-b from-[#f9fafb] to-[#eef2ff]"
    >
      {/* Particles */}
      {init && (
        <Particles
          className="absolute inset-0 z-0"
          options={{
            fullScreen: false,
            particles: {
              number: { value: 50 },
              color: { value: "#6366f1" }, // soft indigo
              links: {
                enable: true,
                distance: 130,
                color: "#c7d2fe",
                opacity: 0.4,
              },
              move: { enable: true, speed: 0.8 },
              size: { value: 3 },
              opacity: { value: 0.4 },
            },
          }}
        />
      )}

      {/* Content */}
      <div className="relative z-10 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose Us
        </h2>

        <p className="max-w-2xl mx-auto mb-12 text-gray-600">
          We stand out from our competitors by delivering consistent quality,
          cost-effective solutions, and a customer-first approach in every
          project.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {uspCards.map((card, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-2xl shadow-md 
              hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col items-center"
            >
              <card.icon className={`text-4xl mb-4 ${card.iconStyle}`} />

              <h3 className="font-semibold text-lg text-gray-800">
                {card.title}
              </h3>

              <p className="text-sm mt-2 text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default USP;
