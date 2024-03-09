import React from 'react';
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
// import Bronzen from './Brozen';
// import B1 from './page/B1';
import CopperWare from './page/CopperWare';
import BrassWare from './page/BrassWare';
import BronzeWare from './page/BronzeWare';
import PujaPage from './page/PujaPage';
import Idols from './page/Idols';
import CopperBottle from './CooperProduct/CopperBottle';
import Watercontainer from './CooperProduct/Watercontainer';
import Beda from './CooperProduct/Beda';
import BedRoom from './CooperProduct/BedRoom';
import Glass from './CooperProduct/Glass';
import WaterJugset from './CooperProduct/WaterJugset';
import SpiceBox from './BrassProduct/SpiceBox';
import BGlass from './BrassProduct/BGlass';
import BjugSet from './BrassProduct/BjugSet';
import Lota from './BrassProduct/Lota';
import Mukwass from './BrassProduct/Mukwass';
import Bowl from './BronzeProduct/Bowl';
import BrGlass from './BronzeProduct/BrGlass';
import Jug from './BronzeProduct/Jug';
import Spoon from './BronzeProduct/Spoon';
import DinnerSet from './BronzeProduct/DinnerSet';
import Diva from './PujaProduct/Diva';
import AartiThali from './PujaProduct/AartiThali';
import Bell from './PujaProduct/Bell';
import Basket from './PujaProduct/Basket';
import StickHolder from './PujaProduct/StickHolder';
import HomePage from './page/HomePage';


function App() {
  return (
    <>
    <BrowserRouter>
   
    
    


    
    <Routes>

      
    <Route path="/" element={<HomePage/>} />
    <Route path="/CopperWare" element={<CopperWare/>} />
    <Route path="/BrassWare" element={<BrassWare/>} />
    <Route path="/BronzeWare" element={<BronzeWare/>} />
    <Route path="/Idols" element={<Idols/>} />
    <Route path="/PujaUtensils" element={<PujaPage/>} />


    {/* Copper catgeroy pages */}
    <Route path="CopperBottle" element={<CopperBottle/>} />
    <Route path="WaterContainer" element={<Watercontainer/>} />
    <Route path="Beda" element={<Beda/>} />
    <Route path="BedRoom" element={<BedRoom/>} />
    <Route path="Glass" element={<Glass/>} />
    <Route path="WaterJugset" element={<WaterJugset/>} />

    {/* Brass categroy pages */}
    <Route path="SpiceBox" element={<SpiceBox/>} />
    <Route path="BGlass" element={<BGlass/>} />
    <Route path="Bjugset" element={<BjugSet/>} />
    <Route path="Lota" element={<Lota/>} />
    <Route path="Mukwass" element={<Mukwass/>} />

  {/* onze category pages */} */

    <Route path="Bowl" element={<Bowl/>} />
    <Route path="BrGlass" element={<BrGlass/>} />
    <Route path="Jug" element={<Jug/>} />
    <Route path="Spoon" element={<Spoon/>} />
    <Route path="DinnerSet" element={<DinnerSet/>} />

    {/* Puja category pages */}
    
    <Route path="Diva" element={<Diva/>} />
    <Route path="AartiThali" element={<AartiThali/>} />
    <Route path="Bell" element={<Bell/>} />
    <Route path="Basket" element={<Basket/>} />
    <Route path="StickHolder" element={<StickHolder/>} />





    
   
    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
