import React  from "react";
import Base from "../base/Base";
import Category from "./Category";
import Restaurant from "./Restaurant";


function Home() {

  return (
    <Base className="p-4" rpage={false}>
      <Category />
      <Restaurant />
    </Base>
  );
}

export default Home;
