import React, { useState } from "react";
import { productData } from "./productData";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null); 

  const showDetails = (product) => {
    setSelectedProduct(product);
  };

  const closeDetails = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="container mx-auto p-4 pt-[40px] ">
      <h2 className="text-2xl font-semibold mb-4">Kategoriyalar</h2>

      <div className="flex overflow-x-auto space-x-8 p-4 rounded-lg">
        {productData.map((product) => (
          <div
            key={product.id}
            className="flex-shrink-0 bg-white border rounded-lg p-4 flex flex-col items-center w-40 cursor-pointer"
            onClick={() => showDetails(product)}
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-auto mb-2"
            />
            <h3 className="text-center text-base font-semibold">
              {product.title}
            </h3>
          </div>
        ))}
      </div>
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <img
              src={selectedProduct.img}
              alt={selectedProduct.title}
              className="w-full h-48 object-cover mb-4"
            />
            <p className="text-lg mb-2">{selectedProduct.description}</p>
            <p className="text-xl font-bold mb-2">{selectedProduct.price}</p>
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              onClick={closeDetails}
            >
              Yopish
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
