import React, { useState } from "react";
import Base from "../base/Base";
import Category from "./Category";
import Restaurant from "./Restaurant";

function Home() {
  const [category, setCategory] = useState([]);
  const handleCategory = (e) => {
    const selectedCategory = e.target.id;
    category.includes(selectedCategory)
      ? setCategory(category.filter((cate) => cate !== selectedCategory))
      : setCategory([...category, selectedCategory]);
  };
  return (
    <Base className="p-4" rpage={false}>
      <Category category={category} handleCategory={handleCategory} />
      <Restaurant category={category} />
    </Base>
  );
}

export default Home;
