import { useState } from 'react'
import './App.css'
import Navbars from './components/Navbar'
import { Routes,Route, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import AllRooms from './pages/AllRooms'
import Roomdetails from './pages/Roomdetails'
import MyBookings from './pages/MyBookings'
import Hotelreg from './components/Hotelreg'
function App() {
  
  const isOwnerPath = useLocation().pathname.includes("owner");
  console.log('isOwnerPath:', isOwnerPath);

  return (
    <>
      {!isOwnerPath && <Navbars />}
      {false && <Hotelreg/>}
      <div className='min-h-[70vh]'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/rooms' element={<AllRooms/>}/>
          <Route path='/rooms/:id' element={<Roomdetails/>}/>
          <Route path='/my-bookings' element={<MyBookings/>}/>

        </Routes>
      </div>
      <Footer/>
    </>
  );
}
export default App;
