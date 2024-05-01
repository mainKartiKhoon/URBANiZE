import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import MainHeader from './components/MainHeader';
import ScrollToTop from './ScrollToTop';
import RealEstate from './components/RealEstate';
import Cars from './components/Cars';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import { LuLifeBuoy } from "react-icons/lu";
import { LuReceipt } from "react-icons/lu";
import { LuBoxes } from "react-icons/lu";
import { LuPackage } from "react-icons/lu";
import { LuUserCircle } from "react-icons/lu";
import { LuBarChart3 } from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import SidebarItem from './components/SidebarItem';

function App() {
  return (
    <div className="App">

      <ScrollToTop />
      <Navbar />
      {/* <Sidebar>
        <SidebarItem
          icon={<LuLayoutDashboard size={20} />}
          text="Dashboard"
          alert />
        <SidebarItem
          icon={<LuBarChart3 size={20} />}
          text="Statistics"
          alert />
        <SidebarItem
          icon={<LuUserCircle size={20} />}
          text="Users"
          alert />
        <SidebarItem
          icon={<LuBoxes size={20} />}
          text="Inventory"
          alert />
        <SidebarItem
          icon={<LuPackage size={20} />}
          text="Orders"
          alert />
        <SidebarItem
          icon={<LuReceipt size={20} />}
          text="Billings"
          alert />
        <SidebarItem
          icon={<LuSettings size={20} />}
          text="Settings"
          alert />
        <SidebarItem
          icon={<LuLifeBuoy size={20} />}
          text="Help"
          alert />
      </Sidebar> */}
      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path='/realestate' element={<RealEstate />} />
          <Route path='/cars' element={<Cars />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
      <Footer />


    </div>
  );
}

export default App;
