import React, { useRef } from "react";
import ProductCarousel from "./Components/ProductCarousal";
import "./index.css";

function App() {
  const carouselRef = useRef();

  return (
    <div className="max-w-4xl mx-auto p-6 center-content">
      <h1 className="text-2xl font-bold mb-4">Featured Products</h1>
      <ProductCarousel ref={carouselRef} />
      <div className="flex justify-center mt-6 space-x-4 center-content" >
        <button onClick={() => carouselRef.current.prevSlide()} className="px-4 py-2 bg-blue-500 text-white rounded">
          Previous
        </button>
        <button onClick={() => carouselRef.current.nextSlide()} className="px-4 py-2 bg-blue-500 text-white rounded">
          Next
        </button>
      </div>
    </div>
  );
}

export default App;