import React from "react";
import Alamy from "../alamy/Alamy";
import Budget from "../budget/Budget";
import Work from "../work/Work";
import Creative from "../creative/Creative";
import Collection from "../collection/Collection";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div>
      <Alamy />
      <Budget />
      <Work />
      <Creative />
      <Collection />
      <Footer />
    </div>
  );
};

export default Home;
