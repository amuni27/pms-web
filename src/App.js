import Header from "./components/Header/Header";
import Property from "./components/Property";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./page/Home";
import SingleProperty from "./page/SingleProperty";
import Login from "./page/Login";
import Register from "./page/Register";
import AccountSetting from "./page/AccountSetting";
import PersonalInfoPage from "./page/PersonalInfoPage";
import VerifyPage from "./page/VerifyPage";
import WishlistsPage from "./page/WishlistsPage";
import {useContext, useEffect, useState} from "react";
import PropertyContext from "./context/PropertyContext";

function App() {
    const propertyContext = useContext(PropertyContext);
    const [propertyData, setPropertyData] = useState([]);
    useEffect(() => {
        setPropertyData([
            {
                id: 1, images: [
                    {url: "../asset/img/1.webp", propertyId: 1},
                    {url: "../asset/img/2.webp", propertyId: 1},
                    {url: "../asset/img/3.webp", propertyId: 1},
                    {url: "../asset/img/4.webp", propertyId: 1},
                    {url: "../asset/img/4.webp", propertyId: 1}
                ],propertyType:"House", totalArea:"5000",bedrooms:4,title: "Dallas", address:{street:"123 Dallas",latitude:-91.959005, longitude:41.010590}, price: 400000, minidescription:"Good House", description: "Lake retreat!  Private bungalow located just feet from the shores of Lake Worth.  Perfect for a couple or the solo traveler needing a quiet and convenient location to stay.  Enjoy the sunset on the dock overlooking the lake!  Located in a quiet neighborhood 10 minutes from downtown Fort Worth.  Everything you need is within minutes!  Dedicated parking, private entrance.  Great queen size memory foam mattress, TV, Internet included.",amenities:["hh","WIFI"]
            },
            {
                id: 2, images: [
                    {url: "../asset/img/5.webp", propertyId: 2},
                    {url: "../asset/img/6.webp", propertyId: 2},
                    {url: "../asset/img/7.webp", propertyId: 2},
                    {url: "../asset/img/8.webp", propertyId: 2},
                    {url: "../asset/img/8.webp", propertyId: 2}
                ],propertyType:"House", totalArea:"5000",bedrooms:4,title: "Plano great house", address:{street:"123 Plano",latitude:-91.959005, longitude:41.010590} , price: 350000, minidescription:"Good House",description: "Lake retreat!  Private bungalow located just feet from the shores of Lake Worth.  Perfect for a couple or the solo traveler needing a quiet and convenient location to stay.  Enjoy the sunset on the dock overlooking the lake!  Located in a quiet neighborhood 10 minutes from downtown Fort Worth.  Everything you need is within minutes!  Dedicated parking, private entrance.  Great queen size memory foam mattress, TV, Internet included.",amenities:["2 Bath","WIFI"]
            },
            {
                id: 3, images: [
                    {url: "../asset/img/9.webp" , propertyId: 3},
                    {url: "../asset/img/10.webp", propertyId: 3},
                    {url: "../asset/img/11.webp", propertyId: 3},
                    {url: "../asset/img/12.webp", propertyId: 3},
                    {url: "../asset/img/12.webp", propertyId: 3}
                ],propertyType:"House", totalArea:"5000",bedrooms:4,title: "Allen", address:{street:"123 Allen",latitude:-91.959005, longitude:41.010590}, price: 385000, minidescription:"Good House",description: "Lake retreat!  Private bungalow located just feet from the shores of Lake Worth.  Perfect for a couple or the solo traveler needing a quiet and convenient location to stay.  Enjoy the sunset on the dock overlooking the lake!  Located in a quiet neighborhood 10 minutes from downtown Fort Worth.  Everything you need is within minutes!  Dedicated parking, private entrance.  Great queen size memory foam mattress, TV, Internet included.",amenities:["2 Bath", "WIFI"]
            },
            {
                id: 4, images: [
                    {url: "../asset/img/13.webp", propertyId: 4},
                    {url: "../asset/img/14.webp", propertyId: 4},
                    {url: "../asset/img/15.webp", propertyId: 4},
                    {url: "../asset/img/16.webp", propertyId: 4},
                    {url: "../asset/img/16.webp", propertyId: 4}
                ], propertyType:"House",totalArea:"5000",bedrooms:4,title: "Mellesa", address:{street:"123 Mellesa",latitude:-91.959005, longitude:41.010590}, price: 290000,minidescription:"Good House", description: "Lake retreat!  Private bungalow located just feet from the shores of Lake Worth.  Perfect for a couple or the solo traveler needing a quiet and convenient location to stay.  Enjoy the sunset on the dock overlooking the lake!  Located in a quiet neighborhood 10 minutes from downtown Fort Worth.  Everything you need is within minutes!  Dedicated parking, private entrance.  Great queen size memory foam mattress, TV, Internet included.",amenities:["2 Bath", "WIFI"]
            },
        ]);
    }, [])
    return (
        <PropertyContext.Provider value={{propertyData, setPropertyData}}>
            <Router basename="/pms-web">
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/login" element={<Login/>}></Route>
                    <Route path="/signup" element={<Register/>}></Route>
                    <Route path="/property/:id" element={<SingleProperty/>}></Route>
                    <Route path="/account-settings" element={<AccountSetting/>}></Route>
                    <Route path="/account-settings/personal-info" element={<PersonalInfoPage/>}></Route>
                    <Route path="/verify" element={<VerifyPage/>}></Route>
                    <Route path="/wishlist" element={<WishlistsPage/>}></Route>
                </Routes>
            </Router>

        </PropertyContext.Provider>
    );
}

export default App;
