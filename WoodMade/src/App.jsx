import { Box } from "@chakra-ui/react";
import React from "react";
import { Routes } from "react-router-dom";
import DesignInspires from "./parts/DesignInspires";
import FeaturedProducts from "./parts/FeaturedProducts";
import Footer from "./parts/Footer";
import Header from "./parts/Header";
import Inspiration from "./parts/Inspiration";
import Redefine from "./parts/Redefine";
import ShelfSystem from "./parts/ShelfSystem";

const App = () => {
  return (
    <Box>
      
      <Header />
   
    
      <ShelfSystem />
      <DesignInspires />
      <FeaturedProducts />
      <Inspiration />

      <Footer />
    </Box>
  );
};

export default App;
