import React, { useState } from "react";
import { TopsaleData } from "./topsaleData";
import Korzinkaicon from "./navbar/navbar-logos/korzinka-icon";

const Topsale = () => {
  const [isOpen, setIsOpen] = useState(false); 
  const [selectedProduct, setSelectedProduct] = useState(null); 
  const [cartItems, setCartItems] = useState([]); 

  const addNewItem = () => {
    const newItem = {
      title: "Yangi mahsulot",
      img: "url-to-new-product-image",
      price: "$100",
      order: "10 ta buyurtma",
      badge: "Top sale",
    };

    TopsaleData.push(newItem); 
  };

  const handleBuyClick = (product) => {
    setSelectedProduct(product); 
    setIsOpen(true); 
  };

  const closeModal = () => {
    setIsOpen(false); 
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setIsOpen(false);
  };

  const calculateTotalItems = () => {
    return cartItems.length;
  };

  return (
    <div className="bg-blue-50 p-8 container">
      <h2 className="text-2xl font-bold mb-6">Eng ko'p sotilgan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {TopsaleData.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 relative">
            {product.badge && (
              <span
                className={`absolute top-0 left-0 bg-orange-500 text-white px-2 py-1 text-sm rounded-br-lg ${
                  product.badge === "Top sale" ? "bg-red-500" : "bg-orange-500"
                }`}
              >
                {product.badge}
              </span>
            )}
            <img src={product.img} alt={product.title} className="w-full h-48 object-cover mb-4" />
            <div className="h-[190px]">
              <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
              <p className="text-xl font-bold mb-2">{product.price}</p>
              <p className="text-gray-500 mb-4">{product.order}</p>
            </div>
            <div className="flex justify-between items-center">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => handleBuyClick(product)}>
                Sotib olish
              </button>
              <button>
                <Korzinkaicon />
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button className="bg-white border border-gray-300 rounded-lg px-8 py-2 w-full" onClick={addNewItem}>
          Koproq korish
        </button>
      </div>

      {/* Modal oynasi */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg max-w-md">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            <img src={selectedProduct.img} alt={selectedProduct.title} className="w-full h-48 object-cover mb-4" />
            <p className="text-xl font-bold mb-2">{selectedProduct.price}</p>
            <p className="text-gray-500 mb-4">{selectedProduct.order}</p>
            <div className="flex justify-between">
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={() => handleAddToCart(selectedProduct)}>
                Sotib olish
              </button>
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400" onClick={closeModal}>
                Bekor qilish
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 bg-white p-4 rounded-full shadow-lg">
        <Korzinkaicon />
        <span className="ml-2">{calculateTotalItems()}</span>
      </div>
    </div>
  );
};

export default Topsale;
