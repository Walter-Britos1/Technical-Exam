import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import ImgMain from "./components/ImgMain/ImgMain";
import Trends from "./components/Trends/Trends";
import Popular from "./components/Popular/Popular";
import MostSold from "./components/MostSold/MostSold";
import InfoSection from "./components/InfoSection/InfoSection";
import Footer from "./components/Footer/Footer";
import HeaderMobile from "./components/Header/HeaderMobile/HeaderMobile";

import './App.css'

function App() {
  return (
    <>
      <div className="desktopOnly">
        <Header />
        <NavBar />
        <ImgMain />
        <Trends />
        <Popular />
        <MostSold />
        <InfoSection />
        <Footer />
      </div>
      <div className="mobileOnly">
        <HeaderMobile />
      </div>
    </>
  );
}

export default App;