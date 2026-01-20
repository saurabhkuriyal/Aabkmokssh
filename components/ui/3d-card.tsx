import React, { useRef } from "react";

export const Floating3DCard: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;

    const { left, top, width, height } = card.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate rotation angles
    const rotateX = ((y - height / 2) / height) * 15;
    const rotateY = ((x - width / 2) / width) * -15;

    // Apply 3D transform with a slight scale on hover
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    // Reset transform on mouse leave
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <div className="flex w-full items-center justify-center border-y-emerald-50 text-gray-800 transition-colors duration-300
    
     ">
      <div
        className="flex w-full justify-center px-1  md:px-2"
        style={{ perspective: "1000px" }}
      >
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="group relative w-full max-w-xs sm:max-w-sm md:max-w-md rounded-md border border-black/10 bg-white p-6 shadow-lg transition-transform duration-300 ease-out hover:shadow-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Content with translateZ for depth effect */}
          <h2
            className="text-xl font-bold text-neutral-700 sm:text-2xl"
            style={{ transform: "translateZ(50px)" }}
          >
            Path to Success🪄
          </h2>

          <p
            className="mt-2 text-sm text-neutral-500 sm:text-base"
            style={{ transform: "translateZ(60px)" }}
          >
            Our primium gemstone collection <br />
            which is meticulously curated to bring you
          </p>

          <div
            className="mt-6 w-full px-2"
            style={{ transform: "translateZ(100px)" }}
          >
            <img
              src="/latest-hero.webp"
              alt="thumbnail"
              className="h-48 w-full max-w-full rounded-sm object-cover transition-shadow duration-300 sm:h-60 group-hover:shadow-xl"
            />
          </div>

          <div className="mt-8 flex sm:flex-row items-center justify-between gap-4 sm:gap-0">
            {/* <a
              href='/crystal/3'
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl px-4 py-2 text-xs font-medium text-neutral-700 transition-colors duration-300 hover:text-emerald-600 dark:text-gray-200 dark:hover:text-emerald-400 sm:text-sm"
              style={{ transform: "translateZ(20px)" }}
            >
              Visit →
            </a> */}
            <a href="/crystal/1111">
            <button
              className="rounded-sm bg-black px-6 py-3 text-xs font-bold text-white transition-colors duration-300 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200 sm:text-sm"
              style={{ transform: "translateZ(20px)" }}
            >
              Have a look
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};