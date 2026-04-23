import { react, useEffect, useState } from "react";

function ServiceCard({ title, slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000); // change every 2.5s

    return () => clearInterval(interval); // cleanup
  }, [slides.length]);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md text-center transition hover:shadow-xl hover:-translate-y-2">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {title}
      </h3>

      <div className="h-10 flex items-center justify-center overflow-hidden">
        <p className="text-blue-500 font-medium animate-fade">
          {slides[index]}
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;