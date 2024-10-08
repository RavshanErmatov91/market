import React, { useState } from "react";
import Card from "../UI/Card";
import dataBase from "../data/datas";
import CategoryItems from "../components/CategoryItems";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const filteredItems = dataBase.filter((product) => {
    if (selectedCategory === "All") return true;
    return product.category === selectedCategory;
  });
  console.log(filteredItems);

  return (
    <div className="p-10">
      <div className=" flex flex-col justify-start items-center">
        <div className="w-[100%] gap-5 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-[300]">Latest Products</h1>
          <div className="w-[80%] bg-gray-300 h-[1px]" />
        </div>
        <div className="mt-10">
          <CategoryItems setSelectedCategory={setSelectedCategory} />
        </div>
        <div className="p-10 flex flex-wrap justify-center  gap-5">
          {filteredItems.map((item, index) => (
            <Card
              key={index}
              img={item.img}
              name={item.name}
              p={item.p}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
