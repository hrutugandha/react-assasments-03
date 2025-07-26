import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="min-w-[200px] m-2 p-4 border rounded shadow bg-white">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover mb-2" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-600">{product.price}</p>
    </div>
  );
};

export default ProductCard;
