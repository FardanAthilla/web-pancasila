import React from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Sejarah from "./Sejarah";
import Makanan from "./Makanan";
import Adat from "./Adat";
import Wisata from "./Wisata";
import Footer from "./Footer";
import '../styles/style.css';


class ContainerData extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <Sejarah />
        <Makanan />
        <Adat />
        <Wisata />
        <Footer />
      </div>
    );
  }
}

export default ContainerData;
