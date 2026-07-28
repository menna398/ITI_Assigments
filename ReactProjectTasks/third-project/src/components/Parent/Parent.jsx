import React, { useState } from "react";
import Child from "../Child/Child";
import { Outlet } from "react-router-dom";

let prodArray = [
  {
    id: 1,
    pName: "Classic T-Shirt",
    price: 350,
    onSale: true,
    desc: "100% Cotton Crew Neck T-Shirt",
    count: 15,
  },
  {
    id: 2,
    pName: "Slim Fit Jeans",
    price: 850,
    onSale: false,
    desc: "Blue Denim Slim Fit Jeans",
    count: 10,
  },
  {
    id: 3,
    pName: "Hoodie",
    price: 950,
    onSale: true,
    desc: "Warm Fleece Hoodie",
    count: 8,
  },
  {
    id: 4,
    pName: "Leather Jacket",
    price: 2500,
    onSale: false,
    desc: "Premium Black Leather Jacket",
    count: 5,
  },
  {
    id: 5,
    pName: "Polo Shirt",
    price: 600,
    onSale: true,
    desc: "Short Sleeve Polo Shirt",
    count: 20,
  },
  {
    id: 6,
    pName: "Cargo Pants",
    price: 1100,
    onSale: false,
    desc: "Comfortable Cotton Cargo Pants",
    count: 12,
  },
  {
    id: 7,
    pName: "Sweatshirt",
    price: 750,
    onSale: true,
    desc: "Oversized Casual Sweatshirt",
    count: 9,
  },
  {
    id: 8,
    pName: "Sports Shorts",
    price: 450,
    onSale: false,
    desc: "Lightweight Training Shorts",
    count: 18,
  },
  {
    id: 9,
    pName: "Summer Dress",
    price: 1200,
    onSale: true,
    desc: "Floral Casual Summer Dress",
    count: 7,
  },
  {
    id: 10,
    pName: "Sneakers",
    price: 1800,
    onSale: false,
    desc: "Comfortable White Sneakers",
    count: 14,
  },
];

function Parent() {
  let [products, setProducts] = useState(prodArray);
  //   console.log(products);

  function deleteProduct(prodId) {
    let newProductsArray = products.filter((product) => product.id !== prodId);
    setProducts(newProductsArray);
  }

  return (
    <>
      <div className=" bg-danger-subtle m-5">
        <div className="row gap-3 p-4 d-flex justify-content-center">
          {products.map((product) => (
            <Child product={product} deleteProduct={deleteProduct}></Child>
          ))}
        </div>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default Parent;
