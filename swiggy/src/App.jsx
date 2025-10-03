import React from 'react'
import Header from './assets/Component/Header'
import Category from './assets/Component/Category'
import TopRest from './assets/Component/TopRest'
import RestaurentDelivery from './assets/Component/RestaurentDelivery'
// import List from './assets/Component/List'
import { Routes, Route } from "react-router-dom";
import Best from './assets/Component/Best'
import Footer from './assets/Component/ITEMS/Footer'
import Search from './assets/Component/search/Search'
import Collections from './assets/Component/Pages/collections.jsx'
import City from './assets/Component/Pages/City.jsx'
import Offer from './assets/Component/Pages/Offer.jsx'
import Chhindwara from './assets/Component/Pages/Chhindwara.jsx'
import HelpSupport from './assets/Component/Pages/Help.jsx'
import Cart from './assets/Component/Pages/Cart.jsx'

export default function App() {
      const places=[
        {name:"Best Restaurant s in Bangalore"},
        {name:"Best Restaurants in Pune"},
        {name:"Best Restaurants in Mumbai"},
        {name:"Best Restaurants in Delhi"},
        {name:"Best Restaurants in Hyderabad"},
        {name:"Best Restaurants in Kolkata"},
        {name:"Best Restaurants in Chennai"},
        {name:"Best Restaurants in Chandigarh"},
        {name:"Best Restaurants in Ahmedabad"},
        {name:"Best Restaurants in Jaipur"},
        {name:"Best Restaurants in Nagpur"}
 ];
       const  cuisines =[
        {name:"Chinese Restaurant Near Me"},
        {name:"South Indian Restaurant Near Me"},
        {name:"Indian Restaurant Near Me"},
        {name:"Kerala Restaurant Near Me"},
        {name:"Korean Restaurant Near Me"},
        {name:"North Indian Restaurant Near Me"},
        {name:"Seafood Restaurant Near Me"},
        {name:"Bengali Restaurant Near Me"},
        {name:"Punjabi Restaurant Near Me"},
        {name:"Italian Restaurant Near Me"},
        {name:"Andhra Restaurant Near Me"}
 ];

 
  return (
 <>
   <Header />
      <Routes>
        <Route path="/" element={
          <>
            <Category/>
            <TopRest/>
            <RestaurentDelivery/>
            <Best title={"Best Places to Eat Across Cities"} place={places}/>  
            <Best title={"Best Cuisines Near Me"} place={cuisines}/> 
            <Footer/>
          </>
        } />
        <Route path="/search" element={<Search />} />
             <Route path="/collection" element={<Collections/>} />
             <Route path='/City' element={<City/>}/>
             <Route path='/offers' element={<Offer/>}/>
             <Route path='/help' element={<HelpSupport/>}/>
                <Route path='/chhindwara' element={<Chhindwara/>}/>
                <Route path='/cart' element={<Cart/>}/>
      </Routes>
      
 </>
  )
}
