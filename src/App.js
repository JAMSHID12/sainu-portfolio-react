
import './App.css';
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import AlgaPage from './sections/projectList/algaPage.js';
import HomePage from './homePage.js';
import EotCampDirector from './sections/projectList/eotCampDirectorApp.js';
import EkaPortfolioApp from './sections/projectList/ekaPortfolioApp.js';
import EotStaffPortfolio from './sections/projectList/eotStaffPortfolio.js';
import OperxElnApp from './sections/projectList/oprexElnApp.js';
import LBHireDesignersApp from './sections/projectList/littleBrahmaHireApp.js';
import ClearSubtitleApp from './sections/projectList/clearSubtitleApp.js';
import PressureYokogawaApp from './sections/projectList/pressureYokogawaApp.js';
import TwaddanCarWashApp from './sections/projectList/twaddanCarWasApp.js';
import GroomHrManagmentApp from './sections/projectList/groomHrManagmentApp.js';
import BigmenuGroceryApp from './sections/projectList/bigmenuGroceryApp.js';
import LBEcommerceApp from './sections/projectList/littleBrahmaEcommerceApp.js';

function App() {

  
  return (
    <div className="MyApp">
      <Router>
        <div className="App">
          <div>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/portfolio/alga-energy-app" element={<AlgaPage />} />
              <Route path="/portfolio/bigmenu-grocery-app" element={<BigmenuGroceryApp />} />
              <Route path="/portfolio/eka-portfolio-app" element={<EkaPortfolioApp />} />
              <Route path="/portfolio/clear-subtitle-app" element={<ClearSubtitleApp />} />
              <Route path="/portfolio/eot-camp-director-app" element={<EotCampDirector />} />
              <Route path="/portfolio/eot-staff-portfolio-app" element={<EotStaffPortfolio />} />
              <Route path="/portfolio/groom-hr-managment-app" element={<GroomHrManagmentApp />} />
              <Route path="/portfolio/little-brahma-ecommerce-app" element={<LBEcommerceApp />} />
              <Route path="/portfolio/little-brahma-hire-app" element={<LBHireDesignersApp />} />
              <Route path="/portfolio/oprex-eln-app" element={<OperxElnApp />} />
              <Route path="/portfolio/pressure-yokogawa-app" element={<PressureYokogawaApp />} />
              <Route path="/portfolio/twaddan-car-wash-app" element={<TwaddanCarWashApp />} />
            </Routes>
          </div>
        </div>
      </Router>
      
    </div>
  );
}

export default App;


// '/portfolio/bigmenu-grocery-app', 'little-brahma-ecommerce-app'
