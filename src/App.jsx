import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

import Hero from './Components/Hero/Hero';
import Programs from './Components/Programs/Programs';
import Title from './Components/Title/Title';
import About from './Components/About/About';
import About1 from "./Components/Pages/AboutUS";
import Campus from './Components/Campus/Campus';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import VideoPlayer from './Components/VideoPlayer/VideoPlayer';
import MapComponent from './Components/MapComponent';
import Gallery from './Components/Pages/Gallery';
import OurBusiness from './Components/Pages/OurBusiness';
import Contact1 from "./Components/Pages/Contact1";
import NavbarTYP from './Components/Pages/Navbar/NavbarTYP';
import Navbar1 from './Components/Pages/Navbar/Navbar1';
import TypesOfPotatoes from './Components/Pages/TypesOfPotatoes';
import NutritionalFacts from './Components/Pages/NutritionalFacts';
import PotatoHistory from './Components/Pages/PotatoHistory';
import PotatoRecipes from './Components/Pages/PotatoRecipes';
import FAQ from './Components/Pages/FAQ';
import PotatoInsights from './Components/Pages/Insights';
import Soup from './Components/Pages/Recipe/Soup';
import Garlic from './Components/Pages/Recipe/Garlic';
import Salad from './Components/Pages/Recipe/salad';
import Fries from './Components/Pages/Recipe/fries';
import Mash from './Components/Pages/Recipe/mash';
// New imports for Digestive, Hypoallergenic, Immune, Skin
// import Digestive from './Components/Pages/Recipe/Digestive';
// import Hypoallergenic from './Components/Pages/Recipe/Hypoallergenic';
 import Imune from './Components/Pages/nutribenefit/imune';
import Skin from './Components/Pages/nutribenefit/skin';
import Digestive from './Components/Pages/nutribenefit/digestive';
import Russet from './Components/Pages/type/ruseet';
import Finger from './Components/Pages/type/finger';
import Yellow from './Components/Pages/type/yellow';
import Red from './Components/Pages/type/red';
import Chip from './Components/Pages/type/chip';
import Rost from './Components/Pages/Recipe/rost';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Anim from './Components/Pages/circ';
import WorldMap from './Components/Pages/world';
import Supplychain from './Components/Pages/Supplychain';
import Coldstorage from './Components/Pages/Coldstorage';
import PotatoByproducts from './Components/Pages/Potatobyproduct';
import Export from './Components/Pages/Export';
import Fri from './Components/Pages/Recipe/Food/fri';
import Milk from './Components/Pages/Recipe/Food/milk';
import Flor from './Components/Pages/Recipe/Food/flo';
import Gra from './Components/Pages/Recipe/Food/gra';
import Fro from './Components/Pages/frozen';
// import Emb from './Components/Pages/emb';
import Vi from './Components/Pages/vi';
import Meetfarmer from './Components/Pages/Meetfarmer';
import Li from './Components/Pages/li';


import Scroll from './Components/Pages/scroll';
import LogoSlider from './Components/About/Logo';
import Ty from './Components/Pages/ty';
import Hi from './Components/Pages/hi';
import Events from './Components/Events/Events';
import Buy from './Components/Pages/Buy';
import Sell from './Components/Pages/Sell';
import VendorCustomerPage from './Components/Pages/VendorCustomerPage';


import Kyati from './Components/Pages/type/Kyati';
import Jyoti from './Components/Pages/type/Jyoti';
import Hasan from './Components/Pages/type/hasan';












// Layout component
const Layout = ({ children, showNavbar, navbarType }) => (
  <>
    {showNavbar && (
      <>
        {navbarType === 'NavbarTYP' ? <NavbarTYP /> : <NavbarTYP />}
      </>
    )}
    {children}
  </>
);
// App component with all routes
const App = () => {
  const [playState, setPlayState] = React.useState(false);
  return (
    <Router>
      <Routes>
        {/* Existing Routes */}
        <Route path="/" element={<Layout showNavbar={true} navbarType="Navbar1">
          <Hero />
          <div className="container">
          {/* <div style={{ margin: '80px 0' }} /> 

          <Anim />  */}
          <Title subTitle='What We Offer' title='Agribusiness-Bridging the Gap in the Potato Supply Chain' />
      
            
      <Programs />
  
       {/* Moved Programs above Anim */}
      
    
    
      
      
      <WorldMap /> {/* Add the Anim component here */}
      <br></br>
            <About setPlayState={setPlayState} />

            <Title subTitle='Gallery' title='AGPOTATO' />
            <Campus />
            <Hi/>
            <Ty/>
            <Li/>
            <Vi/>
            
            
         
           
            
            <Title subTitle='' title='' />
            <LogoSlider />
            <Title subTitle='Our Vendors' title='Vendor & Customer ' />
            <Testimonials />
            
            <Title subTitle='Our Events' title='Our Company Events' />
            <Events />
          <div>
            <br></br>
          </div>
         
         
           
            
          
          </div>
 
    
          <VideoPlayer playState={playState} setPlayState={setPlayState} />
          <Footer />
        </Layout>} />
        <Route path="/Gallery" element={<Layout showNavbar={false}><Gallery /></Layout>} />
        <Route path="/AboutUS" element={<Layout showNavbar={false}><About1 /></Layout>} />
       
        <Route path="/Contact1" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Contact1 /></Layout>} />
        <Route path="/OurBusiness" element={<Layout showNavbar={true} navbarType="NavbarTYP"><OurBusiness /></Layout>} />
        <Route path="/PotatoInsights" element={<Layout showNavbar={true} navbarType="NavbarTYP"><PotatoInsights /></Layout>} />
        <Route path="/TypesOfPotatoes" element={<Layout showNavbar={true} navbarType="NavbarTYP"><TypesOfPotatoes /></Layout>} />
        <Route path="/nutritional-facts" element={<Layout showNavbar={true} navbarType="NavbarTYP"><NutritionalFacts /></Layout>} />
        <Route path="/potato-history" element={<Layout showNavbar={true} navbarType="NavbarTYP"><PotatoHistory /></Layout>} />
        <Route path="/potato-recipes" element={<Layout showNavbar={true} navbarType="NavbarTYP"><PotatoRecipes /></Layout>} />
        <Route path="/Soup" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Soup /></Layout>} />
        <Route path="/Garlic" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Garlic /></Layout>} />
        <Route path="/Salad" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Salad /></Layout>} />
        <Route path="/faq" element={<Layout showNavbar={true} navbarType="NavbarTYP"><FAQ /></Layout>} />
        <Route path="/Fries" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Fries /></Layout>} />
        <Route path="/Mash" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Mash /></Layout>} />
        <Route path="/export-excellence" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Export /></Layout>} />
        {/* New Routes */}
        {/* <Route path="/Digestive" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Digestive /></Layout>} />
        <Route path="/Hypoallergenic" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Hypoallergenic /></Layout>} />*/
        <Route path="/immune" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Imune /></Layout>} /> }
        <Route path="/Skin" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Skin /></Layout>} />
        <Route path="/Digestive" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Digestive /></Layout>} />
        <Route path="/russet" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Russet /></Layout>} />
        <Route path="/finger" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Finger /></Layout>} />
        <Route path="/yellow" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Yellow /></Layout>} />
        <Route path="/red" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Red /></Layout>} />
        <Route path="/chip" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Chip /></Layout>} />
        <Route path="/rost" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Rost /></Layout>} />
        <Route path="/circ" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Anim /></Layout>} />
        <Route path="/supply-chain" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Supplychain /></Layout>} />
        <Route path="/Coldstorage" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Coldstorage /></Layout>} />
        <Route path="/potato-by-product" element={<Layout showNavbar={true} navbarType="NavbarTYP">< PotatoByproducts /></Layout>} />
        <Route path="/WorldMap" element={<Layout showNavbar={true} navbarType="NavbarTYP"><WorldMap /></Layout>} />
        <Route path="/milk" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Milk /></Layout>} />
        <Route path="/flo" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Flor /></Layout>} />
        <Route path="/gra" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Gra /></Layout>} />
        <Route path="/frozen-products" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Fro /></Layout>} />
        <Route path="/fri" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Fri /></Layout>} />
        {/* <Route path="/em" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Emb /></Layout>} /> */}
        <Route path="/vi" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Vi /></Layout>} />
        <Route path="/Meetfarmer" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Meetfarmer /></Layout>} />
        <Route path="/li" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Li /></Layout>} />
        <Route path="/sc" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Scroll /></Layout>} />
        <Route path="/Logo" element={<Layout showNavbar={true} navbarType="NavbarTYP"><LogoSlider /></Layout>} />
        <Route path="/ty" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Ty /></Layout>} />
        <Route path="/hi" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Hi /></Layout>} />
        <Route path="/Buy" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Buy /></Layout>} />
        <Route path="/Sell" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Sell /></Layout>} />
        <Route path="/VendorCustomerPage" element={<Layout showNavbar={true} navbarType="NavbarTYP"><VendorCustomerPage /></Layout>} />
       

        

        <Route path="/Kyathi" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Kyati /></Layout>} />
        <Route path="/jyothi" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Jyoti /></Layout>} />
        <Route path="/hasan" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Hasan /></Layout>} />

        {/* <Route path="/rost" element={<Layout showNavbar={true} navbarType="NavbarTYP"><Rost /></Layout>} /> */}
      </Routes>
    </Router>
  );
}
export default App;