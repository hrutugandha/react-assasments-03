import React, { useRef, forwardRef, useImperativeHandle, useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { productData } from "../ProductData";

const ProductCarousel = forwardRef((props, ref) => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useImperativeHandle(ref, () => ({
    nextSlide,
    prevSlide,
    goToSlide
  }));

  function nextSlide() {
    if (activeIndex < productData.length - 1) {
      goToSlide(activeIndex + 1);
    }
  }

  function prevSlide() {
    if (activeIndex > 0) {
      goToSlide(activeIndex - 1);
    }
  }

  function goToSlide(index) {
    const cardWidth = containerRef.current.children[0].offsetWidth + 16; // 16 for margin
    containerRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth"
    });
    setActiveIndex(index);
  }

  return (
    <div className="w-full">
      <div className="flex justify-between mb-2">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-200 rounded">◀</button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-200 rounded">▶</button>
      </div>
      <div
        ref={containerRef}
        className="flex justify-center overflow-x-auto scroll-smooth no-scrollbar"
      >
        {productData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="flex justify-center mt-3 space-x-2">
        {productData.map((_, idx) => (
          <span
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer ${idx === activeIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
});

export default ProductCarousel;